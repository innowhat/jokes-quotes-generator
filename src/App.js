import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jokes from "./components/jokeComponent/Jokes";
import Quotes from "./components/quoteComponent/Quotes";

import GlobalStyle from "./theme/GlobalStyle";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Jokes />
      <hr />
      <Quotes />

      <Footer />
    </React.Fragment>
  );
}

export default App;
