import React from "react";
import Heading from "../elements/Heading";
import Container from "../elements/Container";

function Header() {
  return (
    <Container style={{ backgroundColor: "#F5B700" }}>
      <Heading h2 center>
        <img
          src={require("../assets/vnicorn.png")}
          alt=""
          style={{ height: 50 }}
        />
        <div>Vnicorn App</div>
      </Heading>
    </Container>
  );
}

export default Header;
