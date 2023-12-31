import React from "react";
import "./Meaning";
import Meaning from "./Meaning";

export default function Results (props) {
    if (props.results) {
        return  (
            <div>
                <h2>{props.results.word}</h2>
                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return null ;
    }
    
}