import React from "react";

import icon_directory_pink from "./../../../sources/icons/icon-directory-pink.svg";

export default function ManInTheMiddle () {
    return (
        <>
            <h3 className="span-blue" id="mintm">
                <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                <span className="span-pink"> Man-in-the-Middle (Hombre en el Medio).<span className="span-pink cursor">_</span>
                </span>
            </h3>
            
            <p>
                <span className="span-pink">Intercepción de comunicaciones</span> entre dos partes para <span className="span-white">espiar</span> o <span className="span-white">modificar la información</span> transmitida.
            </p>
            
            <p>
                <b className="span-yellow">Herramientas:</b> <a href="#" className="span-blue">Bettercap</a>, <a href="#" className="span-blue">WireShark.</a>
            </p>
        </>
    );
}