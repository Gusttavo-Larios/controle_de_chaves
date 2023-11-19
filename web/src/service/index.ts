import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:8000/api'
})

api.interceptors.request.use(function (config) {

    const token = sessionStorage.getItem('@token');

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});