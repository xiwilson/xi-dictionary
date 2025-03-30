import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div>
      {" "}
      <h3>{props.meaning.partOfSpeech}</h3>
      <strong className="meaning-list">Definition:</strong>{" "}
      {props.meaning.definition}
      <br />
      <strong className="meaning-list">Example:</strong> {props.meaning.example}
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
      <strong className="meaning-list">Synonyms:</strong>{" "}
      {props.meaning.synonyms}
    </div>
  );
}
