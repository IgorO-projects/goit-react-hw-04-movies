import { Component } from "react";
import { Link, Switch, Route } from 'react-router-dom';
import FetchApi from '../../services/ServiceApi';
import Cast from '../../components/Cast'
import Reviews from "../../components/Reviews/Reviews";
import routes from '../../routes';


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
                releaseDate: response.data.release_date.split('-')[0],
                imgUrl: `https://image.tmdb.org/t/p/w500${response.data.poster_path}`,
                score: response.data.vote_average * 10,
                overview: response.data.overview,
                genres: response.data.genres,
                id: response.data.id,
             });
        });
    }
    handleBack = () => {
        this.props.history.push(this.props.location.state?.from || routes.home);
    }


    render () {
        const { title, releaseDate, imgUrl, score, overview, genres } = this.state;
        return (
            <>
            <div>
            <button
            type="button"
            onClick={this.handleBack}
            >back
            </button>
            <img src={imgUrl} alt={title} width={300}/>
            <h2>{title} ({releaseDate})</h2>
            <p>{score}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>{genres.map(genre => <li key={genre.id}>{genre.name}</li>)}</ul>
            </div>
            <div>
                <ul>
                    <li><Link to={`${this.props.location.pathname}/cast`}>Cast</Link></li>
                    <li><Link to={`${this.props.location.pathname}/reviews`}>Reviews</Link></li>
                </ul>
                <Switch>
                    <Route path={routes.cast} component={Cast}></Route>
                    <Route path={routes.review} component={Reviews}></Route>
                </Switch>
            </div>
            </>
        )
    } 
}
