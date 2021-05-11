import { Component } from "react";
import FetchApi from '../../services/ServiceApi';


export default class MovieDetailsPage extends Component {
    state = {
        title: null,
        releaseDate: null,
        imgUrl: null,
        score: null,
        overview: null,
        genres: [],
        id: null,
    }
    componentDidMount () {
        const { movieId } = this.props.match.params;
        FetchApi.getMovieById(movieId)
        .then(response => {
            this.setState({ 
                title: response.data.title,
                releaseDate: response.data.release_date,
                imgUrl: response.data.poster_path,
                score: response.data.vote_average,
                overview: response.data.overview,
                genres: response.data.genres,
                id: response.data.id,
             });
        });
    }


    render () {
        const { title, releaseDate, imgUrl, score, overview, genres } = this.state;
        return (
            <>
            <button type="button">back</button>
            <img src={imgUrl} alt={title} />
            <h2>{title} ({releaseDate})</h2>
            <p>{score}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            </>
        )
    } 
}
