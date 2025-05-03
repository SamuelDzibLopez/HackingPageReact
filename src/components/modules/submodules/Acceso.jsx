import React, {useState} from "react";

import icon_directory from "./../../../sources/icons/icon-directory.svg";
import icon_directory_pink from "./../../../sources/icons/icon-directory-pink.svg";

//Herramientas
import HYDRA from "./tools/HYDRA.jsx";
import SQLMAP from "./tools/SQLMAP.jsx";
import ZPHISHER from "./tools/ZPHISHER.jsx";

export default function Escaneo (props) {

    const [herramienta, setHerramienta] = useState(1)
    

    return (
        <>
            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Fase de Acceso Inicial.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                A <span className="span-white">continuacion,</span> se muestra la <span className="span-white">lista</span> de <span className="span-pink">herramientas</span> para el  <span className="span-white">Paso del Haking </span> <span className="span-yellow">Fase de Escaneo y Enumeración:</span>
            </p>

            <p>
                (<i className="span-yellow">Selecciona</i> una <span className="span-white">herramienta</span> para <span className="span-white">visualizar</span> su <span className="span-pink">documentación</span> e <span className="span-pink">información</span>).
            </p>

            <div className="div-structure-row">
                <a className="a-structure" onClick={() => setHerramienta(1)}>
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                        <span className="span-pink"> HYDRA.<span className="span-pink cursor">_</span>
                        </span>
                    </h3>
                </a>

                <a className="a-structure" onClick={() => setHerramienta(2)}>
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                        <span className="span-pink"> SQLMAP.<span className="span-pink cursor">_</span>
                        </span>
                    </h3>
                </a>

                <a className="a-structure" onClick={() => setHerramienta(3)}>
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                        <span className="span-pink"> ZPHISHER.<span className="span-pink cursor">_</span>
                        </span>
                    </h3>
                </a>
            </div>

            <hr className="cursor"/>

            <p>
                A <span className="span-pink">continuación</span>, la <span className="span-white">documentación</span> e <span className="span-white">información</span> de la <i className="span-yellow">herramienta</i>:
            </p>

            {(() => {
                if (herramienta === 1) {
                    return <HYDRA
                        funcionNotificacion = {props.funcionNotificacion}
                        notifications = {props.notifications}
                    />;
                } else if (herramienta === 2) {
                    return <SQLMAP
                    funcionNotificacion = {props.funcionNotificacion}
                    notifications = {props.notifications}
                    />;
                } else if (herramienta === 3) {
                    return <ZPHISHER
                    funcionNotificacion = {props.funcionNotificacion}
                    notifications = {props.notifications}
                    />;
                } else {
                    return <HYDRA
                        funcionNotificacion = {props.funcionNotificacion}
                        notifications = {props.notifications}
                    />;
                }
            })()}
        </>
    );
}