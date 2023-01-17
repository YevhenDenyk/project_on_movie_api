import axios from "axios";

import {baseURL} from "../config";

const axiosService = axios.create({baseURL});

const tokenKey = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjU3NzYwNzc3ZjIzNTQwYzJjZjU2OTFkZTQzY2M1YSIsInN1YiI6IjYzYzU2MGFmYTY3MjU0MDA4NzE4ZTk3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y72aLZBCygg9OBlXolkoX6H3o_1e2A9tCFEzmPpKrBU'

axiosService.interceptors.request.use((config)=>{
    config.headers.Autorisation = tokenKey
    return config
})

export {axiosService}