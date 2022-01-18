import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Graph from '../components/Graph';

export default function Home() {
  return (
    <div className={styles.container}>
	  <script src="//unpkg.com/babel-standalone"></script>

      <Head>
        <title>Linalg FDG</title>
        <meta name="description" content="Linear Algebra Interactive Force Directed Graph" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

	<Graph />

    </div>
  )
}
