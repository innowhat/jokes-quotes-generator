import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jokes from "./components/jokeComponent/Jokes";
import Quotes from "./components/quoteComponent/Quotes";
import GlobalStyle from "./theme/GlobalStyle";
import Container from "./elements/Container";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Container fullVertical>
        <Jokes />
        <Quotes />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
