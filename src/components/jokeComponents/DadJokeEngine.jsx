import React from "react";
import DadJokeDisplay from "./DadJokeDisplay";

class DadJokeEngine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oneJoke:
        "MacGyver can build an airplane out of gum and paper clips. Chuck Norris can kill him and take it."
    };
  }

  //Hook
  componentDidMount() {
    this.fetchJoke();
  }

  // Fetch api data
  fetchJoke() {
    fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }
    })
      .then(respond => respond.json())
      .then(oneJoke => this.setState({ oneJoke: oneJoke.joke }));
  }

  //Event
  handleRandom = event => {
    event.preventDefault();
    this.fetchJoke();
    console.log(this.state.oneJoke);
  };

  render() {
    return (
      <div>
        <DadJokeDisplay
          handleRandom={this.handleRandom}
          oneJoke={this.state.oneJoke}
        />
      </div>
    );
  }
}

export default DadJokeEngine;
