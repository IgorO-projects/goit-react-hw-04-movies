import { Component } from "react";
import { Link, Switch, Route } from 'react-router-dom';
import FetchApi from '../../services/ServiceApi';
import Cast from '../../components/Cast'
import Reviews from "../../components/Reviews/Reviews";
import routes from '../../routes';
import styles from './MovieDetailsPage.module.css';


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
            <div className={styles.movie__wrapper}>
            <button
            type="button"
            onClick={this.handleBack}
            >back
            </button>
            <div className={styles.movie__info}>
                <img src={imgUrl} alt={title} width={250} className={styles.movie__poster}/>
                <div className={styles.movie__description}>
                    <h2 className={styles.movie__title}>{title} ({releaseDate})</h2>
                    <p className={styles.movie__score}>User Score {score}%</p>
                    <h3 className={styles.movie__overview_title}>Overview</h3>
                    <p className={styles.movie__overview}>{overview}</p>
                    <h3 className={styles.movie__genres_title}>Genres</h3>
                    <ul className={styles.movie__genres}>{genres.map(genre => <li key={genre.id}>{genre.name}</li>)}</ul>
                </div>
            </div>
            </div>
            <div className={styles.movie__additional}>
                <h3 className={styles.movie__additional_title}>Additional information</h3>
                <ul className={styles.movie__additional_list}>
                    <li><Link to={`${this.props.match.url}/cast`}>Cast</Link></li>
                    <li><Link to={`${this.props.match.url}/reviews`}>Reviews</Link></li>
                </ul>
            </div>
            <Switch>
                    <Route path={routes.cast} component={Cast}></Route>
                    <Route path={routes.review} component={Reviews}></Route>
                </Switch>
            </>
        )
    } 
}
