import React from "react";
import styles from "./Paginator.module.css";

interface Props {
  page: number;
  setPage: (page: number) => void;
}

export default function Paginator({ page, setPage }: Props) {
  return (
    <div>
      <button onClick={()=>setPage(page-1)}>{"<"}</button>
      Page {page}
      <button onClick={()=>setPage(page+1)}>{">"}</button>
    </div>
  );
}
