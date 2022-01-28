import React from 'react';
import Header from "./components/Header"
import Selector from "./components/Selector"
import Filter from "./components/Filter"
import NewsList from "./components/News/NewsList"
import Paginator from "./components/Paginator"
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Filter />
      <Selector />
      <NewsList />
      <Paginator />
    </div>
  );
}
