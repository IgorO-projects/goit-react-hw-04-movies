import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


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

export default withRouter(MovieList);