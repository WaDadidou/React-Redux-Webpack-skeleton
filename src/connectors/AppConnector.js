import axios from "axios";

export default axios.create({
    baseURL: process.env.BASE_URL_APP_CONNECTOR,
    withCredentials: false,             // No CORS
    headers: {
        // 'Access-Control-Allow-Origin': process.env.BASE_URL_APP_CONNECTOR,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});