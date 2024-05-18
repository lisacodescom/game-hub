import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '1548406170214a21bbc64e3a8b06007a'
    }
})