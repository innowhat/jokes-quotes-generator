import React from "react";
import Card from "../../elements/Card";
import Heading from "../../elements/Heading";
import Button from "../../elements/Button";
import Loader from "../../elements/Loader";

function DadJoke(props) {
  const tweet = `https://twitter.com/intent/tweet?text='${props.dadJoke}`;
  return (
    <Card primary big delay={400}>
      <Heading h3>Dad Joke</Heading>
      {props.IsLoading ? (
        <p>
          {" "}
          <Loader />
        </p>
      ) : (
        <div style={{ minHeight: 140 }}>
          <p>{props.dadJoke}</p>
          <small style={{ color: "#ccc" }}>
            <i>{props.dadAuthor}</i>
          </small>
        </div>
      )}

      <Button
        type="submit"
        name="btnGetDadJoke"
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
  );
}

export default DadJoke;
