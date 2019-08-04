import React from "react";
import Card from "../../elements/Card";
import Heading from "../../elements/Heading";
import Button from "../../elements/Button";

function KanyeQuotes(props) {
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
          {"Quote"}
        </Button>

        <Button
          type="submit"
          name="btnTweetKanyeQuote"
          onClick={props.handleShare}
          style={{ background: "#000", border: "2px solid #fff" }}
        >
          {"Share on Twitter"}
        </Button>
      </Card>
    </div>
  );
}

export default KanyeQuotes;
