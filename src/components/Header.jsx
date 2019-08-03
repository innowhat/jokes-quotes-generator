import React from "react";
import Heading from "../elements/Heading";
import Container from "../elements/Container";

function Header() {
  return (
    <Container>
      <Heading h3 center>
        <img
          src={require("../assets/vnicorn.png")}
          alt=""
          style={{ height: 100 }}
        />
        <div>Vnicorn App</div>
      </Heading>
    </Container>
  );
}

export default Header;
