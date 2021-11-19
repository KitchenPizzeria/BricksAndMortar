import React from "react";

function Property(props) {
    return (
        <>
            <img alt="property image" src={props.url}></img>
            <p>
                {props.name} {props.price}
            </p>
        </>
    );
}

export default Property;
