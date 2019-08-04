import React from "react";
import Card from "../../elements/Card";
import Heading from "../../elements/Heading";
import Button from "../../elements/Button";

function ChuckJoke(props) {
  return (
    <div>
      <Card big style={{ background: "#F5B700" }}>
        <Heading h3>Chuck Norris Joke</Heading>
        <p style={{ height: 100 }}>{props.chuckJoke}</p>
        <Button
          type="submit"
          name="btnGetChuckJoke"
          onClick={props.handleRandom}
          style={{ background: "#000", border: "2px solid #fff" }}
        >
          {"Jokes"}
        </Button>
      </Card>
    </div>
  );
}

export default ChuckJoke;
