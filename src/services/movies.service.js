import {axiosService} from "./axios.service";
import {urls} from "../config";

const moviesService = {
    getAll: (page=1)=>axiosService.get(urls.movies,{params:{page}}),
    getGenres: ()=>axiosService(urls.genres),
    search: (query='',page=1)=>axiosService.get(urls.search,{params:{query,page}})
}

export {moviesService}