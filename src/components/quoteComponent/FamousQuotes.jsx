import React from "react";
import Card from "../../elements/Card";
import Heading from "../../elements/Heading";
import Button from "../../elements/Button";

function FamousQuotes(props) {
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
          {"Quote"}
        </Button>
        <Button
          type="submit"
          name="btnTweetFamousQuote"
          onClick={props.handleShare}
          style={{ background: "#000", border: "2px solid #fff" }}
        >
          {"Share on Twitter"}
        </Button>
      </Card>
    </div>
  );
}

export default FamousQuotes;
