import { Component } from "react";
import FetchApi from '../../services/ServiceApi';
import styles from './Cast.module.css';

export default  class Cast extends Component {
    state = {
        cast: [],
    }


    componentDidMount () {
        const { movieId } = this.props.match.params;

        FetchApi.getMovieCast(movieId)
        .then(response => {
            this.setState({ cast: response.data.cast })
        })
        .catch(error=> console.log(error));

    }

    render() {
        const { cast } = this.state;

        return( 
            <ul className={styles.cast__list}>
                {cast.map(actor => (
                <li key={actor.id}>
                    <img 
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} 
                    alt={actor.name} width="100"
                    className={styles.cast__actor_img}/>
                    <h3 className={styles.cast__actor_name}>{actor.name}</h3>
                    <p className={styles.cast__actor_character}>Character: {actor.character}</p>
                </li>
                ))}
            </ul>
        )
    }
}
