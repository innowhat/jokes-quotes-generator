import React from "react";
import Flex from "../../elements/Flex";
import ChuckJoke from "./ChuckJoke";
import DadJoke from "./DadJoke";

class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chuckJoke:
        "MacGyver can build an airplane out of gum and paper clips. Chuck Norris can kill him and take it.",
      dadJoke:
        "The great thing about stationery shops is they're always in the same place...",
      allJokes: [],
      dadAuthor: "Jokes about dads",
      chuckAuthor: "Jokes about Chuck Norris",
      isLoading: false
    };
  }

  componentDidMount() {
    this.fetchChuck();
    this.fetchDad();
  }

  // Fetch Chucks joke from api
  fetchChuck() {
    this.setState({ isLoading: true });
    fetch(`https://api.icndb.com/jokes`)
      .then(response => response.json())
      .then(data => this.setState({ allJokes: data.value, isLoading: false }));
  }

  // Fetch Dads joke from api
  fetchDad() {
    this.setState({ isLoading: true });
    fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }
    })
      .then(respond => respond.json())
      .then(data => this.setState({ dadJoke: data.joke, isLoading: false }));
  }

  handleChuck() {
    const getAllJokes = this.state.allJokes;
    const getSingleJokes =
      getAllJokes[Math.floor(Math.random() * getAllJokes.length)];
    this.setState({ chuckJoke: getSingleJokes.joke });
  }

  handleDad() {
    this.fetchDad();
    console.log(this.state.dadJoke);
    const getSingleJokes = this.state.dadJoke;
    this.setState({ dadJoke: getSingleJokes.joke });
  }

  // Event handler
  handleClick = event => {
    event.preventDefault();
    const name = event.target.name;
    if (name === "btnGetChuckJoke") {
      this.handleChuck();
    }
    if (name === "btnGetDadJoke") {
      this.handleDad();
    }
    if (name === "btnCopyDadJoke") {
      this.copyDad();
    }
    if (name === "btnCopyChuckJoke") {
      this.copyChuck();
    }
  };

  copyChuck() {
    let copyText = this.state.chuckJoke;
    const copied = document.createElement("input");
    document.body.appendChild(copied);
    copied.value = copyText;
    copied.select();
    const isSuccessful = document.execCommand("copy");
    if (!isSuccessful) {
      console.error("Failed to copy text.");
    }
    console.log("COPIED", copyText);
  }
  copyDad() {
    let copyText = this.state.dadJoke;
    const copied = document.createElement("input");
    document.body.appendChild(copied);
    copied.value = copyText;
    copied.select();
    const isSuccessful = document.execCommand("copy");
    if (!isSuccessful) {
      console.error("Failed to copy text.");
    }
    console.log("COPIED", copyText);
  }

  render() {
    return (
      <div>
        <Flex>
          <ChuckJoke
            handleClick={this.handleClick}
            chuckJoke={this.state.chuckJoke}
            isLoading={this.state.isLoading}
            chuckAuthor={this.state.chuckAuthor}
          />
          <DadJoke
            handleClick={this.handleClick}
            dadJoke={this.state.dadJoke}
            isLoading={this.state.isLoading}
            dadAuthor={this.state.dadAuthor}
          />
        </Flex>
      </div>
    );
  }
}

export default Jokes;
