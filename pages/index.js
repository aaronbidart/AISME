import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useState } from 'react';

import { db } from '../lib/firebase'; // adjust the path as necessary
import { collection, addDoc, serverTimestamp, getDoc, doc } from 'firebase/firestore';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [timestampMessage, setTimestampMessage] = useState('');

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    try {
      const docRef = await addDoc(collection(db, 'emails'), {
        email: email,
        createdAt: serverTimestamp()
      });
      console.log('Email saved to Firestore!');

      // Get the timestamp from the server and format it for display
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const createdAt = docSnap.data().createdAt;
        // Format the timestamp as a readable string
        const timestampString = new Date(createdAt.seconds * 1000).toLocaleString();
        setTimestampMessage(`Email collected on: ${timestampString}`);
      }
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
        <p className={styles.description}>Outsource your decision making for a 1 time fee of $499.
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
      {timestampMessage && <p className={styles.timestampMessage}>{timestampMessage}</p>}
        <Image src="/industrial.jpg" alt="Industrial Plant" width={700} height={475} />
      </main>
    </>
  );
}
