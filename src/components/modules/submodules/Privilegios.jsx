import React from "react";

import icon_directory from "./../../../sources/icons/icon-directory.svg";


export default function Provilegios () {
    return (
        <>
            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Fase Mantenimiento de Acceso y Escalada de Privilegios.<span className="span-blue cursor">_</span>
                </span>
            </h3>
        </>
    );
}