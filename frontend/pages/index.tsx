import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TT full stack exercise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Token Terminal full stack exercise.
        </h1>

        <p className={styles.description}> Now let's get started!
          <br />
          We shall start by creating a new page in the pages folder. We will call it projects.tsx</p>


        <h2>Below is the standard Next.js started. Feel free to remove it</h2>
      </main>
    </div>
  )
}

export default Home
