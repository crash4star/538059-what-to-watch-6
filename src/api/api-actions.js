import { ActionCreator } from '../store/action';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
    api.get(`/films`)
        .then(({ data }) => {
            dispatch(ActionCreator.getFilms(data));
            dispatch(ActionCreator.addFirstEightFilms(data));
            dispatch(ActionCreator.getSameFilmsByGenre('', data));
        })
        .then(() => {
            dispatch(ActionCreator.dataLoaded(false));
        })
);

export const checkAuth = () => (dispatch, _getState, api) => (
    api.get(`/login`)
        .then(() => {
            dispatch(ActionCreator.requiredAuthorization(false));
        })
        .catch(() => { })
);

export const signIn = ({ login: email, password }) => (dispatch, _getState, api) => (
    api.post(`/login`, { email, password })
        .then(() => {
            console.log(email);
            dispatch(ActionCreator.requiredAuthorization(true));
            dispatch(ActionCreator.addUserMail(email));
        })
        .catch(() => { })
);

export const logOut = () => (dispatch, _getState, api) => (
    api.get(`/logout`)
        .then(() => {
            dispatch(ActionCreator.requiredAuthorization(false));
        })
        .catch(() => { })
);