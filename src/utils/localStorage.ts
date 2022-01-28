/*
const FAVORITE_KEY = 'reign::favorites';

export const setInLocalStorage = (key: string, data: string) => {
    const dataParsed = JSON.stringify(data);
    localStorage.setItem(key, dataParsed);
}

export const getFromLocalStorage = (key: string) => {
    const data = localStorage.getItem(key);

    const dataParsed = data ? JSON.parse(data) : null;

    return dataParsed;
}

export const removeFavoriteFromLocalStorage = (post) => {
    const localPosts = getFromLocalStorage(FAVORITE_KEY);
    const localPostParsed = localPosts instanceof Array ? localPosts : [];

    const index = localPostParsed.findIndex(p => p.created_at === post.created_at);

    if (index > -1) {
        localPostParsed.splice(index, 1);
        setInLocalStorage(FAVORITE_KEY, localPostParsed);
    }
}

export const addFavoriteToLocalStorage = (post) => {
    const localPosts = getFromLocalStorage(FAVORITE_KEY);
    const localPostParsed = localPosts instanceof Array ? localPosts : [];

    localPostParsed.push(post);
    setInLocalStorage(FAVORITE_KEY, localPostParsed);
}

export const getFavoritesFromLocalStorage = () => {
    return getFromLocalStorage(FAVORITE_KEY) || [];
}
*/

export const test = "test";