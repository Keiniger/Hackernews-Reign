import React, { useState } from "react";
import Header from "./components/Header";
import FilterFramework from "./components/FilterFramework";
import Filter from "./components/Filter";
import NewsList from "./components/News/NewsList";
import Paginator from "./components/Paginator";
import styles from "./App.module.css";

export default function App() {
  const defaultFramework = "React";
  const [selectedFramework, setSelectedFramework] = useState<string>(defaultFramework);

  return (
    <div className={styles.app}>
      <Header />
      <Filter />
      <FilterFramework
        selectedFramework={selectedFramework}
        setSelectedFramework={setSelectedFramework}
      />
      <NewsList />
      <Paginator />
    </div>
  );
}
