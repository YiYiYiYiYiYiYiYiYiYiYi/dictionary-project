import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);


    function handleResponse(response){
        setResults(response.data[0])
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos)

    }

    function search (event){
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f9170000100000166047a025d8c423ea4fc127878ff3b4d";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers:headers}).then(handlePexelsResponse);
    }

    function handleKeywordChange (event){
        setKeyword(event.target.value);
    }


    return (
        <div className="Dictionary">
            <section>
            <h1>What word do you want to look up?</h1>
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
            </form>
            <div className="hint">
                suggested words: sunset, apple etc.
            </div>
            </section>
            <Results results={results}/>
            <Photos photos={photos} />
        </div>
    );
}