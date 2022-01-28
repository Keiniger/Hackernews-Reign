import React, { useState } from "react";
import styles from "./Filter.module.css";

enum FilterType {
  All = "All",
  MyFaves = "MyFaves",
}

export default function Filter() {
  const [selectedButton, setSelectedButton] = useState("All");

  return (
    <div className={styles.button_container}>
      <button
        className={selectedButton === FilterType.All && styles.active}
        onClick={() => setSelectedButton(FilterType.All)}
      >
        All
      </button>
      <button
        className={selectedButton === FilterType.MyFaves && styles.active}
        onClick={() => setSelectedButton(FilterType.MyFaves)}
      >
        My faves
      </button>
    </div>
  );
}