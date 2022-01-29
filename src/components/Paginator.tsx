import React, { useState } from "react";
import dropdownIcon from "../assets/dropdown-icon.svg";
import styles from "./Paginator.module.css";

interface Props {
  page: number;
  setPage: (page: number) => void;
}

const visibleLength = 9;
const minPage = 1;
const maxPage = 49;

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

export default function Paginator({ page, setPage }: Props) {
  const [visiblePages, setVisiblePages] = useState(ascendingArray(1));
  const firstVisible = visiblePages[0];
  const lastVisible = visiblePages[8];

  const handlePageChange = (type: string) => {
    let newPage = 0;
    if (type === "increase") {
      newPage = page + 1;
      if (lastVisible === page) {
        setVisiblePages(ascendingArray(newPage));
      }
    }
    if (type === "decrease") {
      newPage = page - 1;
      if (firstVisible === page) {
        setVisiblePages(descendingArray(newPage));
      }
    }
    setPage(newPage);
  };

  return (
    <ul className={styles.container}>
      <button
        disabled={page === minPage}
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
          className={el === page ? styles.currentPage : ""}
          key={el}
          onClick={() => setPage(el)}
        >
          {el}
        </li>
      ))}
      <button
        disabled={page === maxPage}
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
/*
        disabled={page === minPage}
        disabled={page === maxPage}
*/
