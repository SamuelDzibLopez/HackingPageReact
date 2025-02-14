import React from "react";
import NavMovile from "./NavMovile";
import NavDesktop from "./NavDesktop";

export default function Navs (props) {
    return (
        <div className="div-1200" id="start">
            <NavDesktop
                funcionModulo = {props.funcionModulo}
                funcionMode = {props.funcionMode}
                mode = {props.mode}
            />
            <NavMovile
                funcionMenu = {props.funcionMenu}
                funcionMode = {props.funcionMode}
                mode = {props.mode}
            />
        </div>
    );
}