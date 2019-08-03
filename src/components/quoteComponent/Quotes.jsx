import React from "react";
import Flex from "../../elements/Flex";
import Container from "../../elements/Container";
import Heading from "../../elements/Heading";
import KanyeQuotes from "./KanyeQuotes";
import FamousQuotes from "./FamousQuotes";

import { StickyContainer, Sticky } from "react-sticky";

class Quotes extends React.Component {
  constructor() {
    super();
    this.state = {
      kanyeQuote: "",
      famousQuote: "",
      famousAuthor: ""
    };
  }

  componentDidMount() {
    this.fetchKanye();
    this.fetchFamous();
  }

  // Fetch Kanye quote from api
  fetchKanye() {
    fetch(`https://api.kanye.rest`)
      .then(response => response.json())
      .then(data => this.setState({ kanyeQuote: data.quote }));
  }

  // Fetch Famous quote from api
  fetchFamous() {
    fetch(`https://favqs.com/api/qotd`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          famousQuote: data.quote.body,
          famousAuthor: data.quote.author
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

  // Event handler
  handleRandom = event => {
    event.preventDefault();

    const name = event.target.name;
    if (name === "btnGetKanyeQuote") {
      this.handleKanye();
    } else if (name === "btnGetFamousQuote") this.handleFamous();
  };

  render() {
    return (
      <StickyContainer>
        <Sticky>
          {({ style }) => (
            <Container style={{ backgroundColor: "palevioletred" }}>
              <Heading
                h2
                style={{ ...style, backgroundColor: "palevioletred" }}
              >
                Quotes section
              </Heading>
            </Container>
          )}
        </Sticky>
        <Container>
          <Flex>
            <FamousQuotes
              handleRandom={this.handleRandom}
              famousQuote={this.state.famousQuote}
              famousAuthor={this.state.famousAuthor}
            />
            <KanyeQuotes
              handleRandom={this.handleRandom}
              kanyeQuote={this.state.kanyeQuote}
            />
          </Flex>
        </Container>
      </StickyContainer>
    );
  }
}

export default Quotes;
