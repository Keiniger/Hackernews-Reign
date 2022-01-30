import React from "react";
import NewsItem from "./NewsItem";
import styles from "./NewsList.module.css";
import { useFetch } from "../../hooks/useFetch";
import { FilterType, FrameworkType, PagesType } from "../../types/Types";

interface Props {
  pages: PagesType;
  selectedFilter: FilterType.All | FilterType.MyFaves;
  selectedFramework:
    | FrameworkType.React
    | FrameworkType.Angular
    | FrameworkType.Vue;
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

  const ids = newsListRaw.map((o) => o.story_id);
  const listWithoutRepeat = newsListRaw.filter(
    ({ story_id }, index) => !ids.includes(story_id, index + 1)
  );

  function createFavPages(favesList: any) {
    const maxElementsPerPage = 8;
    const amountOfPages = Math.ceil(favesList.length / maxElementsPerPage);
    const dividedPages = [...Array(amountOfPages).fill(0)];
    return dividedPages.map((_, i) => favesList.splice(0, maxElementsPerPage));
  }

  let finalNewsList = [...listWithoutRepeat].splice(1);
  if (selectedFilter === FilterType.MyFaves) {
    finalNewsList = createFavPages([...finalNewsList])[pages.MyFaves - 1];
    console.log(finalNewsList);
  }

  return (
    <>
      <div className={styles.list_container}>
        {(() => {
          if (isLoading) {
            return Array(9)
              .fill("")
              .map((el) => <NewsItem skeleton />);
          } else if (!finalNewsList) {
            return (
              <div className={styles.no_articles}>No articles to display</div>
            );
          } else {
            return finalNewsList.map((el) => (
              <NewsItem
                article={el}
                selectedFilter={selectedFilter}
                key={el.story_id}
              />
            ));
          }
        })()}
      </div>
    </>
  );
}
