import React from "react";

import icon_directory_pink from "./../../../sources/icons/icon-directory-pink.svg";

export default function Phishing () {
    return (
        <>
            <h3 className="span-blue" id="phishing">
                <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                <span className="span-pink"> Phishing.<span className="span-pink cursor">_</span>
                </span>
            </h3>
            
            <p>
                Uso de <span className="span-blue">correos electrónicos, mensajes falsificados</span> u <span className="span-blue">otro medio</span> para <span className="span-pink">engañar</span> a las víctimas y <span className="span-white">obtener credenciales</span> o <span className="span-white">datos
                sensibles.</span>
            </p>

            <p>
                <b className="span-yellow">Herramientas:</b> <a href="#" className="span-blue">Zphisher.</a>
            </p>
        </>
    );
}