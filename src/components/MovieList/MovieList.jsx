import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


const MovieList = ({ movies, match, }) => {
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`${match.url}/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export default withRouter(MovieList);