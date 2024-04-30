import axios from 'axios';
import { ACCESS_TOKEN } from './constants';

const api = axios.create({
    // IMPORTS anything inside an environment variable file
    baseURL: import.meta.env.VITE_API_URL
})

// axios interceptor Intercepts the request and auto correct the headers
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(token){
            // This is how you pass a JWT Access token, create Authorization header, and it has to start with Bearer
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default api