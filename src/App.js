import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import AppBar from './components/AppBar';
import MovieDetailsPage from './views/MovieDetailsPage';


class App extends Component {

  render () {
    return (
      <>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
      </Switch>
      </>
    );
  }
}

export default App;
