import React from "react";
import { Article } from "./NewsList";
import styles from "./NewstItem.module.css";

interface Props {
  article: Article;
}

export default function NewsItem({ article }: Props) {
  return (
    <>
      <h1>{article.story_title}</h1>
      <h3>{article.author}</h3>
      <div>{article.story_id}</div>
      <div>{article.story_url}</div>
    </>
  );
}
