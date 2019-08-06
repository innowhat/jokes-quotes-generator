import React from "react";
import Heading from "../elements/Heading";
import Container from "../elements/Container";

function Footer() {
  return (
    <Container>
      <Heading center h5 style={{ height: 100, color: "#fff" }}>
        <a
          href="innowhat.com"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Copyright @innowhat
        </a>
      </Heading>
    </Container>
  );
}

export default Footer;
