import React from "react";
import Card from "../../elements/Card";
import Heading from "../../elements/Heading";
import Button from "../../elements/Button";

function FamousQuotes(props) {
  return (
    <div>
      <Card big>
        <Heading h3>Famous Quotes</Heading>
        <p>{props.famousQuote}</p>
        <div>
          <i>{props.famousAuthor}</i>
        </div>

        <Button
          type="submit"
          name="btnGetFamousQuote"
          onClick={props.handleRandom}
        >
          {"Quote"}
        </Button>
      </Card>
    </div>
  );
}

export default FamousQuotes;
