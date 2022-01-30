export interface Article {
  author     : string;
  created_at : string;
  story_id   : number;
  story_title: string;
  story_url  : string;
  isFavorite?: boolean;
}

export interface PagesType {
  All    : number;
  MyFaves: number;
}

export const enum FrameworkType {
  React   = "React",
  Angular = "Angular",
  Vue     = "Vue",
}
export const enum FilterType {
  All     = "All",
  MyFaves = "MyFaves",
}

export const enum Keys {
  Favorites = "reign-challenge::favorites",
  Framework = "reign-challenge::selected-framework",
  Filter    = "reign-challenge::selected-filter",
}
