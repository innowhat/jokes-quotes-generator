import React from "react";
import Card from "../../elements/Card";
import Heading from "../../elements/Heading";
import Button from "../../elements/Button";

function KanyeQuotes(props) {
  return (
    <div>
      <Card big>
        <Heading h3>Mr West's Quotes</Heading>
        <p>{props.kanyeQuote}</p>
        <div>
          <i>Kanye West</i>
        </div>
        <Button
          type="submit"
          name="btnGetKanyeQuote"
          onClick={props.handleRandom}
        >
          {"Quote"}
        </Button>
      </Card>
    </div>
  );
}

export default KanyeQuotes;
