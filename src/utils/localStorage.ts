import { Keys, Article } from "../types/Types";

export const setInLocalStorage = (key: any, data: any) => {
  const dataParsed = JSON.stringify(data);
  localStorage.setItem(key, dataParsed);
};

export const getFromLocalStorage = (key: any) => {
  const data = localStorage.getItem(key);

  const dataParsed = data ? JSON.parse(data) : null;

  return dataParsed;
};

export const removeFavorite = (post: any) => {
  const localPosts = getFromLocalStorage(Keys.Favorites);
  const localPostParsed = localPosts instanceof Array ? localPosts : [];

  const index = localPostParsed.findIndex(
    (p) => p.created_at === post.created_at
  );

  if (index > -1) {
    localPostParsed.splice(index, 1);
    setInLocalStorage(Keys.Favorites, localPostParsed);
  }
};

export const addFavorite = (post: any) => {
  const localPosts = getFromLocalStorage(Keys.Favorites);
  const localPostParsed = localPosts instanceof Array ? localPosts : [];

  localPostParsed.push(post);
  setInLocalStorage(Keys.Favorites, localPostParsed);
};

export const getFavorites = () => {
  return getFromLocalStorage(Keys.Favorites) || [];
};
