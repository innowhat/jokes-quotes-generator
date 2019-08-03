import React from "react";
import Flex from "../../elements/Flex";
import Container from "../../elements/Container";
import ChuckJokeDisplay from "./ChuckJokeDisplay";
import DadJokeDisplay from "./DadJokeDisplay";

class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chuckJoke:
        "MacGyver can build an airplane out of gum and paper clips. Chuck Norris can kill him and take it.",
      dadJoke: "Something",
      allJokes: []
    };
  }

  componentDidMount() {
    this.fetchChuck();
    this.fetchDadJoke();
  }

  // Fetch Chucks joke from api
  fetchChuck() {
    fetch(`https://api.icndb.com/jokes`)
      .then(response => response.json())
      .then(data => this.setState({ allJokes: data.value }));
  }

  // Fetch Dads joke from api
  fetchDadJoke() {
    fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }
    })
      .then(respond => respond.json())
      .then(data => this.setState({ dadJoke: data.joke }));
  }

  handleChuck() {
    const getAllJokes = this.state.allJokes;
    const getSingleJokes =
      getAllJokes[Math.floor(Math.random() * getAllJokes.length)];
    this.setState({ chuckJoke: getSingleJokes.joke });
  }

  handleDad() {
    this.fetchDadJoke();
    console.log(this.state.dadJoke);
    const getSingleJokes = this.state.dadJoke;
    this.setState({ dadJoke: getSingleJokes.joke });
  }

  // Event handler
  handleRandom = event => {
    event.preventDefault();

    const name = event.target.name;
    if (name === "btnGetChuckJoke") {
      this.handleChuck();
    } else if (name === "btnGetDadJoke") this.handleDad();
  };

  render() {
    return (
      <div>
        <Container>
          <Flex>
            <ChuckJokeDisplay
              handleRandom={this.handleRandom}
              chuckJoke={this.state.chuckJoke}
            />
            <DadJokeDisplay
              handleRandom={this.handleRandom}
              dadJoke={this.state.dadJoke}
            />
          </Flex>
        </Container>
      </div>
    );
  }
}

export default Jokes;
