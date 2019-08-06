import React from "react";
import Flex from "../../elements/Flex";
import KanyeQuotes from "./KanyeQuotes";
import FamousQuotes from "./FamousQuotes";

class Quotes extends React.Component {
  constructor() {
    super();
    this.state = {
      kanyeQuote: "",
      famousQuote: "",
      famousAuthor: "",
      kanyeAuthor: "Kanye West",
      isLoading: false
    };
  }

  componentDidMount() {
    this.fetchKanye();
    this.fetchFamous();
  }

  // Fetch Kanye quote from api
  fetchKanye() {
    this.setState({ isLoading: true });
    fetch(`https://api.kanye.rest`)
      .then(response => response.json())
      .then(data =>
        this.setState({ kanyeQuote: data.quote, isLoading: false })
      );
  }

  // Fetch Famous quote from api
  fetchFamous() {
    this.setState({ isLoading: true });
    fetch(`https://favqs.com/api/qotd`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          famousQuote: data.quote.body,
          famousAuthor: data.quote.author,
          isLoading: false
        })
      );
  }

  handleKanye() {
    this.fetchKanye();
    console.log(this.state.kanyeQuote);
    const getSingleJokes = this.state.kanyeQuote;
    this.setState({ kanyeQuote: getSingleJokes.quotes });
  }

  handleFamous() {
    this.fetchFamous();
    console.log(this.state.famousQuote);
    console.log(this.state.famousAuthor);
  }

  copyFamous() {
    let copyText = this.state.famousQuote;
    console.log(copyText);
    const copied = document.createElement("input");
    document.body.appendChild(copied);
    copied.value = copyText;
    copied.select();
    console.log(copied.value);
    const isSuccessful = document.execCommand("copy");
    copied.remove();

    if (!isSuccessful) {
      console.error("Failed to copy text.");
    }
    console.log("COPIED", copyText);
  }
  copyKanye() {
    let copyText = this.state.kanyeQuote;
    const copied = document.createElement("input");
    document.body.appendChild(copied);
    copied.value = copyText;
    copied.select();
    console.log(copied.value);
    const isSuccessful = document.execCommand("copy");
    copied.remove();

    if (!isSuccessful) {
      console.error("Failed to copy text.");
    }
    console.log("COPIED", copyText);
  }

  // Event handler
  handleClick = event => {
    event.preventDefault();

    const name = event.target.name;
    if (name === "btnGetKanyeQuote") {
      this.handleKanye();
    }
    if (name === "btnGetFamousQuote") {
      this.handleFamous();
    }

    if (name === "btnCopyFamouseQuote") {
      this.copyFamous();
    }
    if (name === "btnCopyKanyeQuote") {
      this.copyKanye();
    }
  };

  render() {
    return (
      <div>
        <Flex>
          <FamousQuotes
            handleClick={this.handleClick}
            famousQuote={this.state.famousQuote}
            famousAuthor={this.state.famousAuthor}
            isLoading={this.state.isLoading}
          />
          <KanyeQuotes
            handleClick={this.handleClick}
            kanyeQuote={this.state.kanyeQuote}
            kanyeAuthor={this.state.kanyeAuthor}
            isLoading={this.state.isLoading}
          />
        </Flex>
      </div>
    );
  }
}

export default Quotes;
