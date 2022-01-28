import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <a
          className={styles.link}
          href="https://hacker-news.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          HACKER NEWS
        </a>
      </h1>
    </header>
  );
}
