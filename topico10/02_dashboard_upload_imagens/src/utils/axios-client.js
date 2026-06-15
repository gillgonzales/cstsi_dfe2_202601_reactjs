import axios from "axios";

export const BASE_URL = import.meta.env.VITE_BASE_URL
export const API_HOST = import.meta.env.VITE_API_HOST

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

axiosClient.defaults.withCredentials = true
axiosClient.defaults.withXSRFToken = true;
axiosClient.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axiosClient.interceptors.request.use((config) => {
    // config.headers.Referer = API_HOST
    config.headers.Accept = "application/json";
    return config;
});

axiosClient.interceptors.response.use(
    (response) => { return response },
    (error) => {
        console.error('Axios:', error)
        throw error;
    }
);

// const csrfUrl = API_HOST + `/sanctum/csrf-cookie`
// console.log({ csrfUrl })
// axiosClient.get(csrfUrl)

export {axiosClient};


