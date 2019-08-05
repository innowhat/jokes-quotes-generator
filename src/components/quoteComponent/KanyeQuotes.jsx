import React from "react";
import Card from "../../elements/Card";
import Heading from "../../elements/Heading";
import Button from "../../elements/Button";

function KanyeQuotes(props) {
  const tweet = `https://twitter.com/intent/tweet?text=`;

  return (
    <div>
      <Card big style={{ background: "palevioletred" }}>
        <Heading h3>Mr West's Quotes</Heading>
        <p style={{ minheight: 100 }}>{props.kanyeQuote}</p>
        <Heading h5 right>
          <i>Kanye West</i>
        </Heading>
        <Button
          type="submit"
          name="btnGetKanyeQuote"
          onClick={props.handleRandom}
          style={{ background: "#000", border: "2px solid #fff" }}
        >
          {"Get quote"}
        </Button>

        <Button style={{ background: "#000", border: "2px solid #fff" }}>
          <a
            href={tweet + props.kanyeQuote + " -" + props.kanyeAuthor}
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

export default KanyeQuotes;
