import React from "react";
import Card from "../../elements/Card";
import Heading from "../../elements/Heading";
import Button from "../../elements/Button";
import Loader from "../../elements/Loader";

function ChuckJoke(props) {
  const tweet = `https://twitter.com/intent/tweet?text='${props.chuckJoke}`;
  return (
    <Card primary big delay={200}>
      <Heading h3>Chuck Norris Joke</Heading>

      {props.IsLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div style={{ minHeight: 140 }}>
          <p>{props.chuckJoke}</p>
          <small style={{ color: "#ccc" }}>
            <i>{props.chuckAuthor}</i>
          </small>
        </div>
      )}

      <Button
        type="submit"
        name="btnGetChuckJoke"
        onClick={props.handleClick}
        style={{ background: "#000", border: "2px solid #fff" }}
      >
        {"Get joke"}
      </Button>
      <Button
        name="btnTweetChuckJoke"
        style={{ background: "#000", border: "2px solid #fff" }}
      >
        <a
          href={tweet}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Tweet it
        </a>
      </Button>

      <Button
        onClick={props.handleClick}
        name="btnCopyChuckJoke"
        style={{ background: "#000", border: "2px solid #fff" }}
      >
        Copy it
      </Button>
    </Card>
  );
}

export default ChuckJoke;
