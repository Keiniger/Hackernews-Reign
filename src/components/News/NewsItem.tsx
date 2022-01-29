import React from "react";
import { Article } from "./NewsList";
import timeIcon from "../../assets/time-icon.svg";
import heartFullIcon from "../../assets/heart-full-icon.svg";
import heartEmptyIcon from "../../assets/heart-empty-icon.svg";
import styles from "./NewsItem.module.css";

interface Props {
  article: Article;
}

export default function NewsItem({ article }: Props) {
  console.log(article.isFavorite);
  return (
    <div className={styles.item_container}>
      <a href={article.story_url} target="_blank" rel="noopener noreferrer">
        <span className={styles.time_container}>
          <img src={timeIcon} alt="clock" className={styles.timeIcon} />
          <span>{article.created_at}</span>
        </span>

        <h2>{article.story_title}</h2>
      </a>
      <button
        type="button"
        className={styles.heart_button}
        //onClick={handleFaveAction}
      >
        <img
          src={article.isFavorite ? heartFullIcon : heartEmptyIcon}
          alt="heart"
        />
      </button>
    </div>
  );
}
