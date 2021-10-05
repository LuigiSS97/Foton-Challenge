import axios from "axios";


const BASE_API = process.env.REACT_APP_BASE_API_URL

export const bookApi = axios.create({
    baseURL: BASE_API
})