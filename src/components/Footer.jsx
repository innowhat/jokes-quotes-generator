import React from "react";
import Heading from "../elements/Heading";
import Container from "../elements/Container";

function Footer() {
  return (
    <Container>
      <Heading center h5 style={{ height: 100 }}>
        <img alt="" style={{ height: 100 }} />
        <div>Copyright @innowhat.com</div>
      </Heading>
    </Container>
  );
}

export default Footer;
