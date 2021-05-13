import axios from "axios";
import { Component } from "react";

const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '87fb620a73370ec44b96cc9a35d2b84f';
// const API_KEYv4 = '8eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2ZiNjIwYTczMzcwZWM0NGI5NmNjOWEzNWQyYjg0ZiIsInN1YiI6IjYwOTkyMmQ5OTdlYWI0MDAzZGQxMWJmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ze-EioKelB-U19Np5TnUty6nxhvdJlFk16k2CF-ZC4A';

class ServiceApi extends Component {

    async getTrendingMovies () {
        const response = await axios.get(`${BASE_URL}3/trending/movie/day?api_key=${API_KEY}`)
        return response;
    }

    async getQueryMovies ( query ) {
        const response = await axios.get(`${BASE_URL}3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
        return response;
    }

    async getMovieById ( id ) {
        const response = await axios.get(`${BASE_URL}3/movie/${id}?api_key=${API_KEY}&language=en-US`)
        return response;
    }

    async getMovieCast ( id ) {
        const response = await axios.get(`${BASE_URL}3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
        return response;
        
    }

    async getMovieReview ( id ) {
        const response = await axios.get(`${BASE_URL}3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
        return response;
    }
}

const FetchApi = new ServiceApi();
export default FetchApi;
