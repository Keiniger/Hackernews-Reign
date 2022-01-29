import React, { useState } from "react";
import styles from "./Paginator.module.css";

interface Props {
  page: number;
  setPage: (page: number) => void;
}

const visibleLength= 9;
const minPage = 1;
const maxPage = 49;

const ascendingArray = (startsWith: number) => {
  let array = Array.from({ length: visibleLength }, (_, i) => startsWith + i)
  if(array[8]>maxPage) array = ascendingArray(maxPage-visibleLength+1)
  return array;
};

const descendingArray = (startsWith: number) => {
  return Array.from({ length: visibleLength }, (_, i) => startsWith - i).reverse();
};

export default function Paginator({ page, setPage }: Props) {
  const [visiblePages, setVisiblePages] = useState(ascendingArray(1));
  const firstVisible = visiblePages[0],
    lastVisible = visiblePages[8];

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
    <span style={{ display: "flex", flexDirection: "row" }}>
      <button
        disabled={page === minPage}
        onClick={() => handlePageChange("decrease")}
      >
        {"<"}
      </button>
      {visiblePages.map((el) =>
        el === page ? (
          <button key={el} onClick={() => setPage(el)}>({el})</button>
        ) : (
          <button key={el} onClick={() => setPage(el)}>{el}</button>
        )
      )}
      <button
        disabled={page === maxPage}
        onClick={() => handlePageChange("increase")}
      >
        {">"}
      </button>
    </span>
  );
}
