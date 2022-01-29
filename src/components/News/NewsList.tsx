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

const dummyNewsList: Article[] = [
  {
    author: "Jon Doe",
    created_at: "2022-01-28T20:20:57.000Z",
    story_id: 30117700,
    story_title:
      "More than 70% of prometheus executable are unused by most people",
    story_url:
      "https://wejick.wordpress.com/2022/01/29/can-i-have-a-smaller-prometheus/",
    isFavorite: true,
  },
  {
    author: "Jon Doe",
    created_at: "2022-01-28T20:20:57.000Z",
    story_id: 30117700,
    story_title:
      "More than 70% of prometheus executable are unused by most people",
    story_url:
      "https://wejick.wordpress.com/2022/01/29/can-i-have-a-smaller-prometheus/",
    isFavorite: false,
  },

  {
    author: "Jon Doe",
    created_at: "2022-01-28T20:20:57.000Z",
    story_id: 30117700,
    story_title:
      "More than 70% of prometheus executable are unused by most people",
    story_url:
      "https://wejick.wordpress.com/2022/01/29/can-i-have-a-smaller-prometheus/",
    isFavorite: true,
  },
];

//Todo: fetch api
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

  return (
    <>
      <div className={styles.list_container}>
        {newsList.map((el) => (
          <NewsItem article={el} key={el.story_id} />
        ))}
      </div>
    </>
  );
}
