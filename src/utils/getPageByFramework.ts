import { FrameworkType, Article } from "../types/Types";

export const getPageByFramework = async (
  page: number,
  selectedFramework: FrameworkType
) => {
  const url = `https://hn.algolia.com/api/v1/search_by_date?query=${selectedFramework}&page=${page}`;
  const res = await fetch(url);
  const parsed = await res.json();

  const pages = parsed.nbPages;
  const newsList = parsed.hits.reduce((list: Article[], item: Article) => {
    const { author, created_at, story_id, story_title, story_url }: Article =
      item;
    if (author && created_at && story_id && story_title && story_url) {
      const news: Article = {
        author,
        created_at,
        story_id,
        story_title,
        story_url,
      };
      return list.concat(news);
    }
    return list;
  }, []);

  return {
    data: newsList,
    pages,
  };
};
