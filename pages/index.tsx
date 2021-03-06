import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { createRef, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const pages = [{ title: "내용" }, { title: "없음" }, { title: "testx" }];
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (ref.current?.children) {
      for (let item of ref.current.children) {
        console.log(item);
      }
      //ref.current.children.forEach((item: Element) => observer.observe(item));
    }

    //ref.current?.children.forEach((item: Element) => observer.observe(item));
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>이진희의 포트폴리오</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} ref={ref}>
        <section className={styles.page} key={"sectionhi"}>
          <Link href={"http://localhost:3000#section-3"}>
            <a>끝으로가보까</a>
          </Link>
        </section>
        {pages.map((page, idx) => {
          return (
            <section
              className={styles.page}
              style={{ backgroundColor: ["#a6cb94", "blue", "green"][idx] }}
              key={page.title}
              data-idx={idx}
              id={`section-${idx}`}
            >
              {page.title}
            </section>
          );
        })}
        <div>포트폴리오사이트</div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by 이진희
        </a>
      </footer>
    </div>
  );
};

export default Home;
