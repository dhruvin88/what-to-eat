import Head from "next/head";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import Link from "next/link";

export const siteTitle = "Restaurant Picker";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        {/* Responsive meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className={styles.header}>
        <h1>Resturant picker</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Restart</a>
          </Link>
        </div>
      )}
    </div>
  );
}
