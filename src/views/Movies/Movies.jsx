import { Component } from "react";
import FetchApi from '../../services/ServiceApi';

export default class Movies extends Component {
    state = {
        query: '',
        movies: [],
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
        .then(({ data }) => console.log(data.results))
    }

    render() {
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
            </>
        )
    }
}