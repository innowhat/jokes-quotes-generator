import React from "react";
import Card from "../../elements/Card";
import Heading from "../../elements/Heading";
import Button from "../../elements/Button";

function DadJoke(props) {
  return (
    <div>
      <Card big style={{ background: "#F5B700" }}>
        <Heading h3>Dad Joke</Heading>
        <p style={{ height: 100 }}>{props.dadJoke}</p>
        <Button
          type="submit"
          name="btnGetDadJoke"
          onClick={props.handleRandom}
          style={{ background: "#000", border: "2px solid #fff" }}
        >
          {"Jokes"}
        </Button>
        <Button
          type="submit"
          name="btnTweetDadJoke"
          onClick={props.handleShare}
          style={{ background: "#000", border: "2px solid #fff" }}
        >
          {"Share on Twitter"}
        </Button>
      </Card>
    </div>
  );
}

export default DadJoke;
