import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de marco de 2021</time>
            <strong>ASDQWERQWE</strong>
            <p>Lorem impsum dolore sit amet</p>
          </a>
          <a href="#">
            <time>12 de marco de 2021</time>
            <strong>ASDQWERQWE</strong>
            <p>Lorem impsum dolore sit amet</p>
          </a>
          <a href="#">
            <time>12 de marco de 2021</time>
            <strong>ASDQWERQWE</strong>
            <p>Lorem impsum dolore sit amet</p>
          </a>
        </div>
      </main>
    </>
  );
}
