import React, { useState } from "react";
import dropdownIcon from "../assets/dropdown-icon.svg";
import styles from "./Paginator.module.css";
import { PagesType } from "../App";
import { FilterType } from "../components/FilterFaves";

interface Props {
  selectedFilter: FilterType;
  pages: any;
  setPages: (obj: any) => void;
}

const visibleLength = 9;
const minPage = 1;
const maxPage = 100;

const ascendingArray = (startsWith: number) => {
  let array = Array.from({ length: visibleLength }, (_, i) => startsWith + i);
  if (array[8] > maxPage) array = ascendingArray(maxPage - visibleLength + 1);
  return array;
};

const descendingArray = (startsWith: number) => {
  return Array.from(
    { length: visibleLength },
    (_, i) => startsWith - i
  ).reverse();
};

export default function Paginator({ selectedFilter, pages, setPages }: Props) {
  const [visiblePages, setVisiblePages] = useState(ascendingArray(1));
  const firstVisible = visiblePages[0];
  const lastVisible = visiblePages[8];

  const setPagesByFilter = (page: number) => {
    setPages((prev: any) => {
      return { ...prev, [selectedFilter]: page } as PagesType;
    });
  };

  const handlePageChange = (type: string) => {
    let newPage = 0;
    if (type === "increase") {
      newPage = pages[selectedFilter] + 1;
      if (lastVisible === pages[selectedFilter]) {
        setVisiblePages(ascendingArray(newPage));
      }
    }
    if (type === "decrease") {
      newPage = pages[selectedFilter] - 1;
      if (firstVisible === pages[selectedFilter]) {
        setVisiblePages(descendingArray(newPage));
      }
    }
    setPagesByFilter(newPage);
  };

  return (
    <ul className={styles.container}>
      <button
        disabled={pages[selectedFilter] === minPage}
        onClick={() => handlePageChange("decrease")}
      >
        <img
          src={dropdownIcon}
          className={`${styles.changePageIcon} ${styles.backIcon}`}
          alt="back"
        />
      </button>
      {visiblePages.map((el) => (
        <li
          className={el === pages[selectedFilter] ? styles.currentPage : ""}
          key={el}
          onClick={() => setPagesByFilter(el)}
        >
          {el}
        </li>
      ))}
      <button
        disabled={pages[selectedFilter] === maxPage}
        onClick={() => handlePageChange("increase")}
      >
        <img
          src={dropdownIcon}
          className={`${styles.changePageIcon} ${styles.nextIcon}`}
          alt="next"
        />
      </button>
    </ul>
  );
}
