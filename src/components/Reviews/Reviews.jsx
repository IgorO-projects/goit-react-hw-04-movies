import { Component } from "react";
import FetchApi from '../../services/ServiceApi';
import styles from './Reviews.module.css';

export default class Reviews extends Component {
    state = {
        reviews: [],
    }

    componentDidMount () {
        const { movieId } = this.props.match.params;

        FetchApi.getMovieReview(movieId)
        .then(response => {
            this.setState({ reviews: response.data.results })
        });

    }

    render () {
        const { reviews } = this.state;

        return (
            <ul className={styles.reviews__list}>
                {reviews.map(review => (
                    <li key={review.id}>
                        <h3 className={styles.reviews__author}>Author: {review.author}</h3>
                        <p>{review.content}</p>
                    </li>
                )
                )}
            </ul>
        )
    }
}
