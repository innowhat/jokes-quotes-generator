import React from "react";
import Card from "../../elements/Card";
import Heading from "../../elements/Heading";
import Button from "../../elements/Button";

function FamousQuotes(props) {
  const tweet = `https://twitter.com/intent/tweet?text=`;
  return (
    <div>
      <Card big style={{ background: "palevioletred" }}>
        <Heading h3>Famous Quotes</Heading>
        <p style={{ minheight: 100 }}>{props.famousQuote}</p>
        <Heading h5 right>
          <i>{props.famousAuthor}</i>
        </Heading>
        <Button
          style={{ background: "#000", border: "2px solid #fff" }}
          type="submit"
          name="btnGetFamousQuote"
          onClick={props.handleRandom}
        >
          {"Get quote"}
        </Button>
        <Button style={{ background: "#000", border: "2px solid #fff" }}>
          <a
            href={tweet + props.famousQuote + " -" + props.famousAuthor}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Tweet quote
          </a>
        </Button>
      </Card>
    </div>
  );
}

export default FamousQuotes;
