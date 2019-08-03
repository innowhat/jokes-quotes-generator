import React from "react";
import Card from "../../elements/Card";
import Heading from "../../elements/Heading";
import Button from "../../elements/Button";

function DadJoke(props) {
  return (
    <div>
      <Card big>
        <Heading h3>Dad Joke</Heading>
        <p style={{ height: 100 }}>{props.dadJoke}</p>
        <Button type="submit" name="btnGetDadJoke" onClick={props.handleRandom}>
          {"Jokes"}
        </Button>
      </Card>
    </div>
  );
}

export default DadJoke;
