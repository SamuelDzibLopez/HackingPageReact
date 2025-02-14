import React from "react";

import icon_directory_pink from "./../../../sources/icons/icon-directory-pink.svg";

export default function Ransomware () {
    return (
        <>
            <h3 className="span-blue" id="ransomware">
                <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                <span className="span-pink"> Ransomware.<span className="span-pink cursor">_</span>
                </span>
            </h3>
            
            <p>
                <span className="span-pink">Secuestro de datos</span> mediante <span className="span-white">cifrado,</span> exigiendo un <span className="span-pink">rescate</span> para <span className="span-pink">restaurar el acceso.</span>
            </p>
            
            <p>
                <b className="span-yellow">Herramientas:</b> <a href="#" className="span-blue">Scripts de JavaScript.</a>
            </p>
        </>
    );
}