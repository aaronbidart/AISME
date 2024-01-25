import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        <p className={styles.description}>Outsource your decision making for a 1 time fee of $199.</p>
        <Image src="/industrial.jpg" alt="Industrial Plant" width={700} height={475} />
      </main>
    </>
  );
}
