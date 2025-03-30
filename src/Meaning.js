import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {" "}
      <h3>{props.meaning.partOfSpeech}</h3>
      <strong>Definition:</strong> {props.meaning.definition}
      <br />
      <strong>Example: </strong>
      {props.meaning.example}
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
      <strong>Synonyms: </strong>
      {props.meaning.synonyms}
    </div>
  );
}
