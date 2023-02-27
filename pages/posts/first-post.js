import styles from '../../styles/Home.module.css';
import Link from 'next/link'

export default function FirstPost() {
    return (
        <>
            <h1 className={styles.title}>First Post</h1>
            <h2 className={styles.description}>Back to <Link href={"/"}>home!</Link></h2>
        </>
    )
}