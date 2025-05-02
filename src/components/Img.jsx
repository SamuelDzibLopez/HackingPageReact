import React from "react";

export default function Img (props) {
    return (
        <>
            <div className="div-img">
                <img className="img" src={props.img} alt={props.text} title={props.text}/>
                <p> <span className="span-blue span-text-img">// {props.text}</span>
                </p>
            </div>
        </>
    );
}