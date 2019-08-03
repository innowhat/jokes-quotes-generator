import React from "react";
import Flex from "../../elements/Flex";
import Container from "../../elements/Container";
import ChuckJokeEngine from "./ChuckJokeEngine";
import DadJokeEngine from "./DadJokeEngine";

function JokesSection() {
  return (
    <div>
      <Container>
        <Flex>
          <ChuckJokeEngine />
          <DadJokeEngine />
        </Flex>
      </Container>
    </div>
  );
}

export default JokesSection;
