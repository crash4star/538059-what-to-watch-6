import axios from 'axios';

const BACKEND_URL = `https://6.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
    UNAUTHORIZED: 401
};

export const createApi = (onAuthorized) => {
    const api = axios.create({
        baseURL: BACKEND_URL,
        timeout: REQUEST_TIMEOUT,
        withCredentials: true,
    });

    const onSuccess = (response) => response;

    const onFail = (err) => {
        const {response} = err;

        if (response.status === HttpCode.UNAUTHORIZED) {
            onAuthorized();
            throw err;
        }

        throw err;
    };

    api.interceptors.response.use(onSuccess, onFail);

    return api;
};