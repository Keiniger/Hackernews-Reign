import React, { useState } from "react";
import { getFromLocalStorage, Keys } from "./utils/localStorage";
import Header from "./components/Header";
import FilterFramework from "./components/FilterFramework";
import FilterFaves from "./components/FilterFaves";
import NewsList from "./components/News/NewsList";
import Paginator from "./components/Paginator";
import styles from "./App.module.css";

export default function App() {
  const [page, setPage] = useState<number>(1);
  const [selectedFramework, setSelectedFramework] = useState(
    getFromLocalStorage(Keys.Framework) || "Select your news"
  );
  const [selectedFilter, setSelectedFilter] = useState(
    getFromLocalStorage(Keys.Filter) || "All"
  );

  return (
    <div className={styles.app}>
      <Header />
      <FilterFaves
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <div className={styles.mini_container}>
        <FilterFramework
          selectedFramework={selectedFramework}
          setSelectedFramework={setSelectedFramework}
        />
        <NewsList
          page={page}
          selectedFilter={selectedFilter}
          selectedFramework={selectedFramework}
        />
      </div>
      <Paginator page={page} setPage={setPage} />
    </div>
  );
}
