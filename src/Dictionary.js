import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("rainbow");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePhotosResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://api.shecodes.io/dictionary
    let apiKey = "3f47deba7d7o337tb76d054056f8cbe1";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let apiPhotosKey = "3f47deba7d7o337tb76d054056f8cbe1";
    let photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiPhotosKey}`;
    axios.get(photosApiUrl).then(handlePhotosResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div>
        <h1>Dictionary App</h1>
        <div className="dictionary-top">
          <section>
            <h4>What word would you like to look up?</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={handleKeywordChange}
                placeholder="search for a word"
              />
            </form>
            <div className="hint">
              suggested words: sunset, happy, love, joy...
            </div>
          </section>
        </div>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
