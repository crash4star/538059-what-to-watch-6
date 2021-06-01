import { ActionCreator } from '../store/action';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
    api.get(`/films`)
        .then(({data}) => {
            console.log(data);
            dispatch(ActionCreator.getFilms(data))
        })
);