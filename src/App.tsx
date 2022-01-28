import React, { useState } from "react";
import { getFromLocalStorage, Keys } from "./utils/localStorage";
import Header from "./components/Header";
import FilterFramework from "./components/FilterFramework";
import FilterFaves from "./components/FilterFaves";
//import NewsList from "./components/News/NewsList";
import Paginator from "./components/Paginator";
import styles from "./App.module.css";

export default function App() {
  const frameworkFromLocalStorage = getFromLocalStorage(Keys.Framework);
  const filterFromLocalStorage = getFromLocalStorage(Keys.Filter);

  const [selectedFramework, setSelectedFramework] = useState(frameworkFromLocalStorage || "React")
  const [selectedFilter, setSelectedFilter] = useState(filterFromLocalStorage || "All")

  return (
    <div className={styles.app}>
      <Header />
      <FilterFaves
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <FilterFramework
        selectedFramework={selectedFramework}
        setSelectedFramework={setSelectedFramework}
      />
      {/*
      <NewsList
        selectedFilter={selectedFilter}
        selectedFramework={selectedFramework}
      />
      */}
      {selectedFramework}
      <Paginator />
    </div>
  );
}
