import { Component } from "react";
import FetchApi from '../../services/ServiceApi';
import MovieList from '../../components/MovieList';

export default class HomePage extends Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        this.fetchTrendingMowies();
      }

    fetchTrendingMowies = () => {
        FetchApi.getTrendingMovies()
        .then(response => {
            this.setState({ movies: response.data.results });
            console.log(this.state.movies)
        });
    }

    render() {
        const { movies } = this.state;
        return (
            <>
                <h1>Trending Today</h1>
                <MovieList movies={movies}/>
            </>
        )
    }
}
