import React from "react";
import Heading from "../elements/Heading";
import Container from "../elements/Container";

function Footer() {
  return (
    <div>
      <Container style={{ background: "#666" }}>
        <Heading center h5 style={{ color: "#fff" }}>
          <a
            href="/"
            style={{ color: "#fff" }}
          >
            GitHub
          </a>
        </Heading>
      </Container>
      <Container style={{ color: "#fff", textAlign: "center" }}>
        <small>Copyright @innowhat</small>
      </Container>
    </div>
  );
}

export default Footer;
