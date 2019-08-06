import React from "react";
import Card from "../../elements/Card";
import Heading from "../../elements/Heading";
import Button from "../../elements/Button";

function FamousQuotes(props) {
  const tweet = `https://twitter.com/intent/tweet?text=`;
  return (
    <Card primary big delay={600}>
      <Heading h3>Famous Quotes</Heading>
      <div style={{ minHeight: 140 }}>
        <q>{props.famousQuote}</q>
        <br />
        <small style={{ color: "#ccc" }}>
          <i>{props.famousAuthor}</i>
        </small>
      </div>

      <Button
        style={{ background: "#000", border: "2px solid #fff" }}
        type="submit"
        name="btnGetFamousQuote"
        onClick={props.handleClick}
      >
        {"Get quote"}
      </Button>
      <Button
        inverse
        name="btnTweetFamouseQuote"
        style={{ background: "#000", border: "2px solid #fff" }}
      >
        <a
          href={tweet + props.famousQuote + " -" + props.famousAuthor}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Tweet it
        </a>
      </Button>
      <Button
        onClick={props.handleClick}
        name="btnCopyFamouseQuote"
        style={{ background: "#000", border: "2px solid #fff" }}
      >
        Copy it
      </Button>
    </Card>
  );
}

export default FamousQuotes;
