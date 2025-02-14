import React from "react";

import icon_directory_pink from "./../../../sources/icons/icon-directory-pink.svg";

export default function XSS () {
    return (
        <>
            <h3 className="span-blue" id="xss">
                <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                <span className="span-pink"> Cross-Site Scripting (XSS).<span className="span-pink cursor">_</span>
                </span>
            </h3>
            
            <p>
                <span className="span-pink">Inyección</span> de <span className="span-white">scripts maliciosos</span> en <span className="span-pink">sitios web</span> para <span className="span-blue">robar datos</span> de usuarios o <span className="span-blue">realizar acciones no autorizadas.</span>
            </p>
            
            <p>
                <b className="span-yellow">Herramientas:</b> <a href="#"
                    className="span-blue">XSSer.</a>
            </p>
        </>
    );
}