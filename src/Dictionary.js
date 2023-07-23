import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState("");

    function handleResponse (response) {
        console.log(response.data);
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        //let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}` ;
       let apiUrl= `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=e8b0a10cf3eacat9055e9544c4bb244o` ;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange (event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}/>
            </form>
            <Results results={results}/>
        </div>
    );
}