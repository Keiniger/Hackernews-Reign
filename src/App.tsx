import React, { useState } from "react";
import { getFromLocalStorage, Keys } from "./utils/localStorage";
import Header from "./components/Header";
import FilterFramework from "./components/FilterFramework";
import FilterFaves, { FilterType } from "./components/FilterFaves";
import NewsList from "./components/News/NewsList";
import Paginator from "./components/Paginator";
import styles from "./App.module.css";

export interface PagesType {
  All: number;
  MyFaves: number;
}

export default function App() {
  const [pages, setPages] = useState({
    All: 1,
    MyFaves: 1,
  });
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
        {selectedFilter === FilterType.All ? (
          <FilterFramework
            selectedFramework={selectedFramework}
            setSelectedFramework={setSelectedFramework}
          />
        ) : (
          <div style={{ height: "102px" }} />
        )}

        <NewsList
          pages={pages}
          selectedFilter={selectedFilter}
          selectedFramework={selectedFramework}
        />
        <Paginator
          selectedFilter={selectedFilter}
          pages={pages}
          setPages={setPages}
        />
      </div>
    </div>
  );
}
