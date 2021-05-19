export const ActionType = {
    CHANGE_GENRE: `change_genre`,
    GET_SAME_FILMS_BY_GENRE: `same_films_by_genre`,
};

export const ActionCreator = {
    changeGenre: (genre) => {
        return {
            type: ActionType.CHANGE_GENRE,
            payload: genre
        };
    },
    getSameFilmsByGenre: (currentGenre, films) => {
        let sourceArr = [];

        if (currentGenre.length !== 0) {
            const filteredArr = films.map(film => film.genre.split('/').filter(match => match === currentGenre ? film : false));

            filteredArr.map((item, i) => {
                sourceArr.push(item.length > 0 ? films[i] : false)
            })
        } else {
            sourceArr = films;
        }

        const result = sourceArr.filter(final => final !== false);

        return {
            type: ActionType.GET_SAME_FILMS_BY_GENRE,
            payload: result,
        };
    },
};