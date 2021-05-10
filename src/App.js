import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import Movies from './views/Movies';
import AppBar from './components/AppBar';


class App extends Component {

  render () {
    return (
      <>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies" component={Movies} />
      </Switch>
      </>
    );
  }
}

export default App;
