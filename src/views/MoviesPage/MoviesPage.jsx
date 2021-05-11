import { Component } from "react";
import FetchApi from '../../services/ServiceApi';
import MovieList from '../../components/MovieList';

export default class MoviesPage extends Component {
    state = {
        query: '',
        movies: [],
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
    }

    handleSubmit = event => {
        event.preventDefault();
        this.fetchMoviesByQuery(this.state.query)
    }

    handleChange = ({ currentTarget }) => {
        this.setState({ query: currentTarget.value })
    }

    fetchMoviesByQuery = query => {
        FetchApi.getQueryMovies(query)
        .then(response => {
            this.setState({ movies: response.data.results })
        })
    }

    render() {
        const { movies } = this.state;
        return(
            <>
            <h1>Movies</h1>
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                onChange={this.handleChange}
                value={this.state.query}/>
                <button>Search</button>
            </form>
            <MovieList movies={movies}/>
            </>
        )
    }
}