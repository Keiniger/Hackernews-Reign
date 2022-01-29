import React from "react";
import NewsItem from "./NewsItem";
import styles from "./NewsList.module.css";
import { useFetch } from "../../hooks/useFetch";
import { FilterType } from "../FilterFaves";
import { FrameworkType } from "../FilterFramework";

interface Props {
  page: number;
  selectedFilter: FilterType.All | FilterType.MyFaves;
  selectedFramework:
    | FrameworkType.React
    | FrameworkType.Angular
    | FrameworkType.Vue;
}

export interface Article {
  author: string;
  created_at: string;
  story_id: number;
  story_title: string;
  story_url: string;
  isFavorite?: boolean;
}

export default function NewsList({
  page,
  selectedFilter,
  selectedFramework,
}: Props) {
  const {
    data: newsList,
    isLoading,
    totalPages,
  } = useFetch(selectedFramework, page, selectedFilter);

  const ids = newsList.map((o) => o.story_id);
  const listWithoutRepeat = newsList.filter(
    ({ story_id }, index) => !ids.includes(story_id, index + 1)
  );

  return (
    <>
      <div className={styles.list_container}>
        {!isLoading
          ? listWithoutRepeat.map((el) => (
              <NewsItem article={el} key={el.story_id} />
            ))
          : Array(9).fill("").map((el) => <NewsItem skeleton />)}
      </div>
    </>
  );
}
