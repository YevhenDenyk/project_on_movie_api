import {axiosService} from "./axios.service";
import {urls} from "../config";

const genresService = {
    getGenres: () => axiosService(urls.genres)
}

export {genresService}