import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "3f47deba7d7o337tb76d054056f8cbe1";

    // documentation: https://api.shecodes.io/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="app-container">
      <div className="Dictionary">
        <h1>Dictionary App</h1>
        <div className="search">
          <form onSubmit={search}>
            <input
              type="search"
              onChange={handleKeywordChange}
              placeholder="type any word"
            />
          </form>
        </div>
      </div>
      <div>
        <Results results={results} />
      </div>
    </div>
  );
}
