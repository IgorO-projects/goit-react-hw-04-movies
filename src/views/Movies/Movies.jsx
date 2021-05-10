import { Component } from "react";

export default class Movies extends Component {
    state = {
        query: '',
        movies: [],
    }

    render() {
        return(
            <h1>Movies</h1>
        )
    }
}