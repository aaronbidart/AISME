import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { db } from '../lib/firebase'; // adjust the path as necessary
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    try {
      await addDoc(collection(db, 'emails'), {
        email: email,
        createdAt: serverTimestamp()
      });
      console.log('Email saved to Firestore!');
    } catch (error) {
      console.error('Error writing document: ', error);
    }
    
    // Reset the input field after submission
    event.target.email.value = '';
  };
  return (
    <>
      <Head>
        <title>The not free AI SME</title>
        <meta name="description" content="THe not free AI SME" />
                <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
        The not free AI SME
        </h1>
        <p className={styles.description}>Outsource your decision making for a 1 time fee of $199.
        </p>
        <form onSubmit={handleEmailSubmit} className={styles.emailForm}>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            className={styles.emailInput}
          /><button type="submit" className={styles.subscribeButton}>
          Subscribe
        </button>
      </form>
        <Image src="/industrial.jpg" alt="Industrial Plant" width={700} height={475} />
      </main>
    </>
  );
}
