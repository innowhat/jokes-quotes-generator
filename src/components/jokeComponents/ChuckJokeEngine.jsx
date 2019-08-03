import React from "react";
import ChuckJokeDisplay from "./ChuckJokeDisplay";

class ChuckJokeEngine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oneJoke:
        "MacGyver can build an airplane out of gum and paper clips. Chuck Norris can kill him and take it.",
      allJokes: []
    };
  }

  //Hook
  componentDidMount() {
    this.fetchJoke();
  }

  // Fetch api data
  fetchJoke() {
    fetch(`https://api.icndb.com/jokes`)
      .then(response => response.json())
      .then(data => this.setState({ allJokes: data.value }));
  }

  // Event handler
  handleRandom = event => {
    event.preventDefault();
    const getAllJokes = this.state.allJokes;
    const getSingleJokes =
      getAllJokes[Math.floor(Math.random() * getAllJokes.length)];
    this.setState({ oneJoke: getSingleJokes.joke });
  };

  render() {
    return (
      <div>
        <ChuckJokeDisplay
          handleRandom={this.handleRandom}
          oneJoke={this.state.oneJoke}
        />
      </div>
    );
  }
}

export default ChuckJokeEngine;
