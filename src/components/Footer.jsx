import React from "react";
import Heading from "../elements/Heading";
import Container from "../elements/Container";

function Footer() {
  return (
    <Container>
      <Heading center h5>
        <img
          src={require("../assets/vnicorn.png")}
          alt=""
          style={{ height: 20 }}
        />
        <div>Copyright @innowhat.com</div>
      </Heading>
    </Container>
  );
}

export default Footer;
