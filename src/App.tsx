import React, { useState } from "react";
import { getFromLocalStorage, Keys } from "./utils/localStorage";
import Header from "./components/Header";
import FilterFramework from "./components/FilterFramework";
import FilterFaves from "./components/FilterFaves";
import { FilterType } from "./components/FilterFaves";
//import NewsList from "./components/News/NewsList";
import Paginator from "./components/Paginator";
import styles from "./App.module.css";

export default function App() {
  const defaultFramework = "React";
  const frameworkFromLocalStorage = getFromLocalStorage(
    Keys.Framework
  );
  const [selectedFramework, setSelectedFramework] = useState<string>(
    frameworkFromLocalStorage || defaultFramework
  );

  const filterFromLocalStorage = getFromLocalStorage(Keys.Filter);
  console.log("from storage favs filter: " + filterFromLocalStorage);
  const defaultFilter = filterFromLocalStorage || FilterType.All;
  const [selectedFilter, setSelectedFilter] = useState<string>(defaultFilter);

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
      <Paginator />
    </div>
  );
}
