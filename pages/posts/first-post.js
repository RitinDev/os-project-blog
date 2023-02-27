import styles from '../../styles/Home.module.css';
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout';

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <Layout>
                <h1 className={styles.title}>First Post</h1>
                <h2 className={styles.description}>Back to <Link href={"/"}>home!</Link></h2>
            </Layout>
        </>
    )
}