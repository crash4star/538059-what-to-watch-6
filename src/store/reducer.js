import { ActionType } from './action';

const initialState = {
    currentGenre: 'All genres',
    films: [],
    filmsByGenre: [],
    visibleFilms: [],
    reviews: [],
    genres: [
        'All genres',
        'Comedies',
        'Crime',
        'Documentary',
        'Dramas',
        'Horror',
        'Kids & Family',
        'Romance',
        'Sci-fi',
        'Thrillers'
    ],
    isDataLoaded: true,
    authorizationStatus: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_FILMS:
            return {
                ...state,
                films: action.payload,
                isDataLoaded: true
            };
        case ActionType.CHANGE_GENRE:
            return {
                ...state,
                currentGenre: action.payload,
            };

        case ActionType.GET_SAME_FILMS_BY_GENRE:
            return {
                ...state,
                filmsByGenre: action.payload,
                visibleFilms: action.payload.slice(0, 8),
            };

        case ActionType.FIRST_EIGHT_FILMS:
            return {
                ...state,
                visibleFilms: action.payload,
            };

        case ActionType.SHOW_NEW_EIGHT_FILMS:
            return {
                ...state,
                visibleFilms: state.visibleFilms.concat(action.payload),
            };

        case ActionType.IS_DATA_LOADED:
            return {
                ...state,
                isDataLoaded: action.payload,
            };
        case ActionType.REQUIRED_AUTHORIZATION:
            return {
                ...state,
                authorizationStatus: action.payload,
            };
    }

    return state;
};

export { reducer };