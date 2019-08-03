import React from "react";
import Card from "../../elements/Card";
import Heading from "../../elements/Heading";
import Button from "../../elements/Button";

function ChuckJokeDisplay(props) {
  return (
    <div>
      <Card big>
        <Heading h3>Chuck Norris Joke</Heading>
        <p style={{ height: 100 }}>{props.oneJoke}</p>
        <Button
          type="submit"
          name="btnGetChuckJoke"
          onClick={props.handleRandom}
        >
          {"Jokes"}
        </Button>
      </Card>
    </div>
  );
}

export default ChuckJokeDisplay;
