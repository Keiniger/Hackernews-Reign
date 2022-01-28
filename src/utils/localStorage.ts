export const enum Keys {
    Favorites = 'reign-challenge::favorites',
    Framework = 'reign-challenge::selected-framework',
    Filter    = 'reign-challenge::selected-filter',
}

export const setInLocalStorage = (key: string, data: string) => {
    const dataParsed = JSON.stringify(data);
    localStorage.setItem(key, dataParsed);
}

export const getFromLocalStorage = (key: string) => {
    const data = localStorage.getItem(key);
    const dataParsed = data ? JSON.parse(data) : null;
    return dataParsed;
}

export const removeFavorite = (post: any) => {
    const localPosts = getFromLocalStorage(Keys.Favorites);
    const localPostParsed = localPosts instanceof Array ? localPosts : [];
    const index = localPostParsed.findIndex(p => p.created_at === post.created_at);

    if (index > -1) {
        localPostParsed.splice(index, 1);
        setInLocalStorage(Keys.Favorites, localPostParsed.toString());
    }
}

export const addFavorite = (post: any) => {
    const localPosts = getFromLocalStorage(Keys.Favorites);
    const localPostParsed = localPosts instanceof Array ? localPosts : [];
    localPostParsed.push(post);
    setInLocalStorage(Keys.Favorites, localPostParsed.toString());
}

export const getFavorites = () => {
    return getFromLocalStorage(Keys.Favorites) || [];
}