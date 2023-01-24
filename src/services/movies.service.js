import {axiosService} from "./axios.service";
import {urls} from "../config";

const moviesService = {
    getAll: (page=1)=>axiosService.get(urls.movies,{params:{page}}),
    getMovie: (id)=> axiosService.get(`${urls.movie}/${id}`),
    search: ({query}) => axiosService.get(`${urls.search}?query=${query}`)
}


export {moviesService}