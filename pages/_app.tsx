import "../styles/globals.css";
import type { AppProps } from "next/app";
import TopNav from "../component/topNav";
import styles from "../styles/Home.module.css";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [page, setPage] = useState(1);
  return (
    <div className={styles.container}>
      <TopNav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
