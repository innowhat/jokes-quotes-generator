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
        onClick={props.handleClick}
        style={{ background: "#000", border: "2px solid #fff" }}
      >
        {"Get joke"}
      </Button>
      <Button
        name="btnTweetDadJoke"
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
        name="btnCopyDadJoke"
        style={{ background: "#000", border: "2px solid #fff" }}
      >
        Copy it
      </Button>
    </Card>
  );
}

export default DadJoke;
