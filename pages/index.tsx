import Head from 'next/head';
import Image from 'next/image';

import styles from '@/pages/index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Hello world!</h1>
        <p>This is v2</p>
      </main>
    </div>
  );
}
