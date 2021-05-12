import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import AppBar from './components/AppBar';
import MovieDetailsPage from './views/MovieDetailsPage';
import routes from './routes';


class App extends Component {

  render () {
    return (
      <>
      <AppBar />
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
      </Switch>
      </>
    );
  }
}

export default App;
