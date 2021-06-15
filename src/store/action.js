export const ActionType = {
    GET_FILMS: `get_films`,
    CHANGE_GENRE: `change_genre`,
    GET_SAME_FILMS_BY_GENRE: `same_films_by_genre`,
    SHOW_NEW_EIGHT_FILMS: 'show_new_eight_film_cards',
    FIRST_EIGHT_FILMS: 'add_first_eight_films',
    IS_DATA_LOADED: 'load_data',
    REQUIRED_AUTHORIZATION: 'login',
    ADD_USER_MAIL: 'add_user_mail'
};

export const ActionCreator = {
    getFilms: (films) => {
        return {
            type: ActionType.GET_FILMS,
            payload: films
        };
    },
    changeGenre: (genre) => {
        return {
            type: ActionType.CHANGE_GENRE,
            payload: genre
        };
    },
    getSameFilmsByGenre: (currentGenre, data) => {
        let sourceArr = [];

        if (currentGenre.length !== 0) {
            const filteredArr = data.map(film => film.genre.split('/').filter(match => match === currentGenre ? film : false));

            filteredArr.map((item, i) => {
                sourceArr.push(item.length > 0 ? data[i] : false)
            })
        } else {
            sourceArr = data;
        }

        const result = sourceArr.filter(final => final !== false);

        return {
            type: ActionType.GET_SAME_FILMS_BY_GENRE,
            payload: result,
        };
    },
    addFirstEightFilms: (films) => {
        return {
            type: ActionType.FIRST_EIGHT_FILMS,
            payload: films.slice(0, 8)
        };
    },
    showNewEightFilms: (films) => {
        return {
            type: ActionType.SHOW_NEW_EIGHT_FILMS,
            payload: films
        };
    },
    dataLoaded: (status) => {
        return {
            type: ActionType.IS_DATA_LOADED,
            payload: status
        };
    },
    requiredAuthorization: (status) => {
        return {
            type: ActionType.REQUIRED_AUTHORIZATION,
            payload: status
        };
    },
    addUserMail: (mail) => {
        return {
            type: ActionType.ADD_USER_MAIL,
            payload: mail
        };
    }
};