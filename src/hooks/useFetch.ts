import { useEffect, useState } from "react";
import { getPageByFramework } from "../utils/getPageByFramework";
import { getFavorites } from "../utils/localStorage";
import { FilterType, FrameworkType, Article, Fetched } from "../types/Types";

const initialState: Fetched = {
  data: [],
  isLoading: true,
};

export const useFetch = (
  selectedFramework: FrameworkType,
  page: number,
  selectedFilter: FilterType
) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(initialState);
    const favorites = getFavorites();
    if (selectedFilter === FilterType.All) {
      getPageByFramework(page, selectedFramework).then(({ data, pages }) => {
        const orderedData = data.sort((a: any, b: any) => {
          return (
            new Date(a.created_at).valueOf() - new Date(a.created_at).valueOf()
          );
        });
        const upatedData = orderedData.map((item: Article) => {
          const index = favorites.findIndex(
            (f: Article) => f.created_at === item.created_at
          );
          return {
            ...item,
            isFavorite: index > -1,
          };
        });
        setState({
          data: upatedData,
          isLoading: false,
        });
      });
    } else {
      setState({
        data: favorites,
        isLoading: false,
      });
    }
  }, [page, selectedFramework, selectedFilter]);

  return state;
};
