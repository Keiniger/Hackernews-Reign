import React from "react";
import NewsItem from "./NewsItem";
import styles from "./NewsList.module.css";
import { useFetch } from "../../hooks/useFetch";
import { FilterType } from "../FilterFaves";
import { FrameworkType } from "../FilterFramework";
import { PagesType } from "../../App";

interface Props {
  pages: PagesType;
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
  pages,
  selectedFilter,
  selectedFramework,
}: Props) {
  const {
    data: newsListRaw,
    isLoading,
    // totalPages,
  } = useFetch(selectedFramework, pages[selectedFilter], selectedFilter);
  let finalNewsList = [];
  const ids = newsListRaw.map((o) => o.story_id);
  const listWithoutRepeat = newsListRaw.filter(
    ({ story_id }, index) => !ids.includes(story_id, index + 1)
  );

  function createFavPages(favesList: any) {
    const maxElementsPerPage = 8;
    const amountOfPages = Math.ceil(favesList.length / maxElementsPerPage);
    let copiedList = [...favesList];
    let dividedPages = [...Array(amountOfPages).fill(0)];
    return dividedPages.map((el, i) =>
      copiedList.splice(0, maxElementsPerPage)
    );
  }

  finalNewsList = listWithoutRepeat; /*
  if (selectedFilter === FilterType.MyFaves) {
    const favPages = createFavPages(listWithoutRepeat);
    finalNewsList = favPages[pages.MyFaves];
  }*/

  return (
    <>
      <div className={styles.list_container}>
        {!isLoading
          ? finalNewsList.map((el) => (
              <NewsItem article={el} key={el.story_id} />
            ))
          : Array(9)
              .fill("")
              .map((el) => <NewsItem skeleton />)}
      </div>
    </>
  );
}
