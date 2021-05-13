import { Component } from "react";
import FetchApi from '../../services/ServiceApi';
import MovieList from '../../components/MovieList';

export default class MoviesPage extends Component {
    state = {
        query: '',
        movies: [],
    }
    componentDidMount() {

        if(this.props.location.search) {
            const searchQuery = this.props.location.search.replace('?query=', '')
    
            this.fetchMoviesByQuery(searchQuery)
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.fetchMoviesByQuery(this.state.query)
        this.setState({ query: ''})
    }

    handleChange = ({ currentTarget }) => {

        this.setState({ query: currentTarget.value })
    }

    fetchMoviesByQuery = query => {

        FetchApi.getQueryMovies(query)
        .then(response => {
            this.setState({ movies: response.data.results })
        })
        .catch(error=> console.log(error));

        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${query}`,
          });
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
            <MovieList 
            movies={movies}
            location={this.props.location}/>
            </>
        )
    }
}