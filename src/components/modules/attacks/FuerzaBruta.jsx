import React from "react";

import icon_directory_pink from "./../../../sources/icons/icon-directory-pink.svg";

export default function FuerzaBruta () {
    return (
        <>
            <h3 className="span-blue" id="fuerzaBruta">
                <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                <span className="span-pink"> Fuerza Bruta.<span className="span-pink cursor">_</span>
                </span>
            </h3>
            
            <p>
                <span className="span-pink">Intento</span> de <span className="span-white">adivinar credenciales</span> probando <span className="span-pink">múltiples combinaciones posibles.</span>
            </p>
            
            <p>
                <b className="span-yellow">Herramientas:</b> <a href="#" className="span-blue">Hidra.</a>
            </p>
        </>
    );
}