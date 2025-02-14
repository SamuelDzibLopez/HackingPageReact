import React from "react";
import NavMovile from "./NavMovile";
import NavDesktop from "./NavDesktop";

export default function Navs (props) {
    return (
        <div className="div-1200">
            <NavDesktop
                funcionModulo = {props.funcionModulo}
            />
            <NavMovile
                funcionMenu = {props.funcionMenu}
            />
        </div>
    );
}