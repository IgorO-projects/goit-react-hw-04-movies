import { Component, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppBar from './components/AppBar';
import routes from './routes';
// import HomePage from './views/HomePage';
// import MoviesPage from './views/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage';
const AsyncHomePage = lazy(()=> import('./views/HomePage'));
const AsyncMoviesPage = lazy(()=> import('./views/MoviesPage'));
const AsyncMovieDetailsPage = lazy(()=> import('./views/MovieDetailsPage'));

class App extends Component {

  render () {
    return (
      <>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={AsyncHomePage} />
          <Route exact path={routes.movies} component={AsyncMoviesPage} />
          <Route path={routes.movieDetails} component={AsyncMovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
      </>
    );
  }
}

export default App;
