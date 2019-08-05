import React from "react";
import Heading from "../elements/Heading";
import Container from "../elements/Container";

function Header() {
  return (
    <Container>
      <Heading h2 center>
        <img
          src={require("../assets/vnicorn.png")}
          alt=""
          style={{ height: 50 }}
        />
        <div>Vnicorn Jokes and Quotes App</div>
      </Heading>
    </Container>
  );
}

export default Header;
