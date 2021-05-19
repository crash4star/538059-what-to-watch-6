import films from '../mocks/films';
import reviews from '../mocks/reviews';
import { ActionType } from './action';

const initialState = {
    currentGenre: 'All genres',
    filmsByGenre: films,
    films: films,
    reviews: reviews,
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
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.CHANGE_GENRE:
            return {
                ...state,
                currentGenre: action.payload,
            };

        case ActionType.GET_SAME_FILMS_BY_GENRE:
            return {
                ...state,
                filmsByGenre: action.payload,
            };
    }

    return state;
};

export { reducer };