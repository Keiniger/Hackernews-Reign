import React, { useState } from "react";
import {setInLocalStorage, Keys} from "../utils/localStorage";
import styles from "./FilterFaves.module.css";

export enum FilterType {
  All     = "All",
  MyFaves = "MyFaves",
}

interface Props {
  selectedFilter?: string;
  setSelectedFilter: (filter: string) => void;
}

export default function FilterFaves({ selectedFilter, setSelectedFilter }: Props) {
  console.log(selectedFilter);
  const [selectedButton, setSelectedButton] = useState(selectedFilter || "All");

  const handleSelection = (option: FilterType) => {
    setSelectedButton(option);
    setInLocalStorage(Keys.Filter, option);
  };

  return (
    <div className={styles.button_container}>
      <button
        className={selectedButton === FilterType.All && styles.active}
        onClick={() => handleSelection(FilterType.All)}
      >
        All
      </button>
      <button
        className={selectedButton === FilterType.MyFaves && styles.active}
        onClick={() => handleSelection(FilterType.MyFaves)}
      >
        My faves
      </button>
    </div>
  );
}
