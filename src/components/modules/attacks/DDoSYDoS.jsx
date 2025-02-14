import React from "react";

import icon_directory_pink from "./../../../sources/icons/icon-directory-pink.svg";

export default function DDoSYDoS () {
    return (
        <>
            <h3 className="span-blue" id="DDoSyDoS">
                <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                <span className="span-pink"> Denegación de Servicios (DoS y DDoS).<span className="span-pink cursor">_</span>
                </span>
            </h3>
            
            <p>
                <span className="span-pink">Saturación</span> de un <span className="span-blue">servidor, red</span> o <span className="span-blue">sistema</span> con <span className="span-white">tráfico masivo</span> para hacerlo <span className="span-pink">inoperativo.</span> Ya sea desde <span className="span-yellow">un solo dispositivo atacante (DoS)</span> o <span className="span-yellow">varios (DDoS).</span>
            </p>
            
            <p>
                <b className="span-yellow">Herramientas:</b> <a href="#" className="span-blue">Metasploit</a>, <a href="#" className="span-blue">Hping3</a>, <a href="#" className="span-blue">Slowloris.</a>
            </p>
        </>
    );
}