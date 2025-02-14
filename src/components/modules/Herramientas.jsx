import React from "react";

//Herramientas
import NMAP from "./tools/NMAP";

import icon_directory from "./../../sources/icons/icon-directory.svg";

export default function Herramientas (props) {
    return (
        <>
            <h2 id="herramientas" className="span-blue">
                <img className="icon-title-two" src={icon_directory} alt=""/><span className="span-blue">Herramientas.<span
                        className="span-blue cursor">_</span>
                </span>
            </h2>
            
            <p>
                En este <span className="span-white">apartado</span> se encuentran <span className="span-yellow">herramientas</span> esenciales utilizadas en el <i className="span-pink">hacking ético,</i> organizadas según su propósito.
            </p>

            <p>
                Cada una incluye <span className="span-blue">explicaciones detalladas</span> de su uso, <span className="span-blue">comandos clave, pasos prácticos</span> e <span className="span-blue">imagenes</span> para ejecutarlas de
                manera
                efectiva. Estas <span className="span-yellow">herramientas</span> son fundamentales para realizar pruebas de <span className="span-pink">seguridad</span> y <span className="span-pink">análisis de vulnerabilidades</span> de
                forma responsable y profesional.
            </p>

            <p>
                La mayoria de estas <span className="span-yellow">herramientas</span> se encuentran <span className="span-pink">preinstaladas</span> en el <span className="span-yellow">SO Kali-Linux</span> o listas para <span className="span-pink">descargarse</span> en este. 
            </p>

            <p>
                <span className="span-yellow">Nota:</span> Para estas <span className="span-yellow">herramientas</span> necesitas conocimientos basicos sobre <span className="span-pink">comandos de Linux.</span>
            </p>

            <NMAP
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}

            />
        </>
    );
}