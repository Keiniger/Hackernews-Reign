import React, { useState } from "react";
import { addFavorite, removeFavorite } from "../../utils/localStorage";
import { formatTime } from "../../utils/formatTime";
import { FilterType, Article } from "../../types/Types";
import timeIcon from "../../assets/time-icon.svg";
import heartFullIcon from "../../assets/heart-full-icon.svg";
import heartEmptyIcon from "../../assets/heart-empty-icon.svg";
import styles from "./NewsItem.module.css";

interface Props {
  skeleton?: boolean;
  selectedFilter?: FilterType;
  article?: Article;
}

export default function NewsItem({ skeleton, selectedFilter, article }: Props) {
  const [articleState, setArticleState] = useState({ ...article });
  const [isFavoriteState, setIsFavoriteState] = useState(article?.isFavorite);

  const handleFave = () => {
    const updatedArticle = {
      ...articleState,
      isFavorite: !articleState.isFavorite,
    };
    setArticleState(updatedArticle);
    setIsFavoriteState((prevState) => !prevState);


    if (articleState.isFavorite) {
      removeFavorite(updatedArticle as Article);
    } else {
      addFavorite(updatedArticle as Article);
    }
  };

  if (selectedFilter === FilterType.MyFaves && !isFavoriteState) {
    return <></>;
  }

  return (
    <div className={styles.item_container}>
      {skeleton ? (
        <div className={styles.skeleton_anchor}>
          <span className={styles.time_container}>
            <img src={timeIcon} alt="clock" className={styles.timeIcon} />
            <span
              className={styles.skeleton_box}
              style={{ height: "11px", width: "120px" }}
            />
          </span>
          <span
            className={styles.skeleton_box}
            style={{ marginTop: "6px", height: "14px", width: "90%" }}
          />
          <span
            className={styles.skeleton_box}
            style={{ height: "14px", width: "60%" }}
          />
        </div>
      ) : (
        <a href={article?.story_url} target="_blank" rel="noopener noreferrer">
          <span className={styles.time_container}>
            <img src={timeIcon} alt="clock" className={styles.timeIcon} />
            <span>{formatTime(article?.created_at)} by {article?.author}</span>
          </span>
          <h2>{article?.story_title}</h2>
        </a>
      )}

      <button
        type="button"
        className={`${styles.heart_button} ${
          skeleton ? styles.heart_skeleton : ""
        }`}
        onClick={handleFave}
      >
        <img
          src={!isFavoriteState || skeleton ? heartEmptyIcon : heartFullIcon}
          alt="heart"
        />
      </button>
    </div>
  );
}
