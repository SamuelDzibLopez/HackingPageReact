import React from "react";

import icon_directory_pink from "./../../../sources/icons/icon-directory-pink.svg";

export default function SQLInjection () {
    return (
        <>
            <h3 className="span-blue" id="SQLInjection">
                <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                <span className="span-pink"> SQL Injection.<span className="span-pink cursor">_</span>
                </span>
            </h3>
        
            <p>
                <span className="span-yellow">Inserción</span> de <span className="span-white">código malicioso</span> en <span className="span-white">bases de datos</span> a través de <span className="span-pink">formularios</span> para <span className="span-pink">acceder a información no autorizada.</span>
            </p>
            
            <p>
                <b className="span-yellow">Herramientas:</b> <a href="#" className="span-blue">SQLMap.</a>
            </p>
        </>
    );
}