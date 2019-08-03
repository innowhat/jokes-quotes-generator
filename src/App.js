import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jokes from "./components/jokeComponents/Jokes";
import GlobalStyle from "./theme/GlobalStyle";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Jokes />
      <Footer />
    </React.Fragment>
  );
}

export default App;
