import React from "react";

import icon_directory from "./../../../sources/icons/icon-directory.svg";


export default function Acceso () {
    return (
        <>
            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Fase de Acceso Inicial.<span className="span-blue cursor">_</span>
                </span>
            </h3>
        </>
    );
}