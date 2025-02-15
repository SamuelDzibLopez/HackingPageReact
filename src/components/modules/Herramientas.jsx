import React, {useState} from "react";

//Submodulos
import Reconocimiento from "./submodules/Reconocimiento";
import Escaneo from "./submodules/Escaneo";
import Acceso from "./submodules/Acceso";
import Provilegios from "./submodules/Privilegios";
import Huellas from "./submodules/Huellas";

import icon_directory from "./../../sources/icons/icon-directory.svg";

export default function Herramientas (props) {

    const [submodulo, setSubmodulo] = useState(1)

    return (
        <>
            <h2 id="herramientas" className="span-blue">
                <img className="icon-title-two" src={icon_directory} alt=""/><span className="span-blue">Herramientas.<span
                        className="span-blue cursor">_</span>
                </span>
            </h2>
            
            <p>
                En este <span className="span-white">apartado</span> se encuentran <span className="span-yellow">herramientas</span> esenciales utilizadas en el <i className="span-pink">hacking ético,</i> organizadas según su propósito y <i className="span-pink">Pasos del Hacking</i>.
            </p>

            <p>
                Cada una incluye <span className="span-blue">explicaciones detalladas</span> de su <span className="span-blue">uso, instalación, configuración, comandos clave, pasos prácticos</span> e <span className="span-blue">imagenes</span> para ejecutarlas de
                manera
                efectiva. Estas <span className="span-yellow">herramientas</span> son fundamentales para realizar pruebas de <span className="span-pink">seguridad</span> y <span className="span-pink">análisis de vulnerabilidades</span> de
                forma responsable y profesional.
            </p>

            <p>
                La mayoria de estas <span className="span-yellow">herramientas</span> se encuentran <span className="span-pink">preinstaladas</span> en el <span className="span-yellow">SO Kali-Linux</span> o listas para <span className="span-pink">descargarse</span> en este, por lo que esta <span className="span-white">guia</span> esta enfocada a dicha <span className="span-yellow">distribucion Linux.</span> 
            </p>

            <p>
                <span className="span-yellow">Nota:</span> Para estas <span className="span-yellow">herramientas</span> necesitas conocimientos basicos sobre <span className="span-pink">comandos de Linux.</span> (Existe un subapartado para que los aprendas tambien.)
            </p>

            <p>
                A <span className="span-white">continuacion,</span> se muestra la <span className="span-white">lista</span> de <span className="span-pink">clasificación</span> por medio de los <i className="span-pink">Pasos del Haking</i>:
            </p>

            <p>
                (<i className="span-yellow">Selecciona</i> una <span className="span-white">opción</span> para <span className="span-white">visualizar</span> las <span className="span-pink">herramientas</span>).
            </p>

            <div className="div-structure">
                <a className="a-structure" onClick={() => setSubmodulo(1)}>
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory} alt=""/>
                        <span className="span-blue"> Fase de Reconocimiento.<span className="span-blue cursor">_</span>
                        </span>
                    </h3>
                </a>

                <a className="a-structure" onClick={() => setSubmodulo(2)}>
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory} alt=""/>
                        <span className="span-blue"> Fase de Escaneo y Enumeración.<span className="span-blue cursor">_</span>
                        </span>
                    </h3>
                </a>

                <a className="a-structure" onClick={() => setSubmodulo(3)}>
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory} alt=""/>
                        <span className="span-blue"> Fase de Acceso Inicial.<span className="span-blue cursor">_</span>
                        </span>
                    </h3>
                </a>

                <a className="a-structure" onClick={() => setSubmodulo(4)}>
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory} alt=""/>
                        <span className="span-blue"> Fase Mantenimiento de Acceso y Escalada de Privilegios.<span className="span-blue cursor">_</span>
                        </span>
                    </h3>
                </a>

                <a className="a-structure" onClick={() => setSubmodulo(5)}>
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory} alt=""/>
                        <span className="span-blue"> Fase de Cobertura de Huellas.<span className="span-blue cursor">_</span>
                        </span>
                    </h3>
                </a>
            </div>

            <hr className="cursor"/>

            <p>A <span className="span-pink">continuación</span>, la <span className="span-white">Fase de:</span></p>

            {(() => {
                if (submodulo === 1) {
                    return <Reconocimiento
                        funcionNotificacion = {props.funcionNotificacion}
                        notifications = {props.notifications}
                    />;
                } else if (submodulo === 2) {
                    return <Escaneo
                        funcionNotificacion = {props.funcionNotificacion}
                        notifications = {props.notifications}
                    />;
                } else if (submodulo === 3) {
                    return <Acceso
                        funcionNotificacion = {props.funcionNotificacion}
                        notifications = {props.notifications}
                    />;
                } else if (submodulo === 4) {
                    return <Provilegios
                        funcionNotificacion = {props.funcionNotificacion}
                        notifications = {props.notifications}
                    />;
                } else {
                    return <Huellas
                        funcionNotificacion = {props.funcionNotificacion}
                        notifications = {props.notifications}
                    />;
                }
            })()}
        </>
    );
}