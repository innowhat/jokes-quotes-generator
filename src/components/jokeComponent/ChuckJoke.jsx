import React from "react";
import Card from "../../elements/Card";
import Heading from "../../elements/Heading";
import Button from "../../elements/Button";

function ChuckJoke(props) {
  const tweet = `https://twitter.com/intent/tweet?text='${props.chuckJoke}`;
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
          {"Get joke"}
        </Button>
        <Button style={{ background: "#000", border: "2px solid #fff" }}>
          <a
            href={tweet}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Tweet joke
          </a>
        </Button>
      </Card>
    </div>
  );
}

export default ChuckJoke;
