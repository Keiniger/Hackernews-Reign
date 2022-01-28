import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <a
          id="headerTitle"
          className={styles.link}
          href="https://keiniger.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          HACKER NEWS
        </a>
      </h1>
    </header>
  );
}
