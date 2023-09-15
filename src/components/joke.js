import React from "react";
import { connect } from "react-redux";
import { getJoke } from "../actions/action";


const joke = props => {
    const fetchJoke = e => {
        e.preventDefault();
        props.getJoke();
    };

    return (
        <>
            <h2>Chuck Norris Jokes</h2>
            <div>
                
            </div>
        
        </>
    )
}