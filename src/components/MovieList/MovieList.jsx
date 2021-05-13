import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';


const MovieList = ({ movies, location }) => {
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={{
                        pathname: `/movies/${movie.id}`,
                        state: { from: location}
                    }}>{movie.title}</Link>
                </li>
            ))}
        </ul>
    )
}

MovieList.propTypes = {
    movies: PropTypes.array,
    location: PropTypes.object
}

export default withRouter(MovieList);