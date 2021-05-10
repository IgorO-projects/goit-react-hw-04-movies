import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '87fb620a73370ec44b96cc9a35d2b84f';
// const API_KEYv4 = '8eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2ZiNjIwYTczMzcwZWM0NGI5NmNjOWEzNWQyYjg0ZiIsInN1YiI6IjYwOTkyMmQ5OTdlYWI0MDAzZGQxMWJmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ze-EioKelB-U19Np5TnUty6nxhvdJlFk16k2CF-ZC4A';

const fetchApi = () => {
    return (
        axios.get(`${BASE_URL}3/trending/movie/day?api_key=${API_KEY}`)
    )

}

export default { fetchApi };