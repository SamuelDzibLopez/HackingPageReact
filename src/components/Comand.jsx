import React from "react";

import icon_copy from "./../sources/icons/icon-copy.svg";

export default function Comand (props) {
    
    const copyCode = () => {
        // Copiar el contenido al portapapeles
        navigator.clipboard.writeText(props.code)
            .then(() => {
                // createNotification("Texto copiado al portapapeles.");
                props.funcionNotificacion([...props.notifications, "Texto copiado al portapapeles."]);
                console.log("Success");
            })
            .catch(() => {
                // createNotification("Error al copiar al portapapeles.");
                props.funcionNotificacion([...props.notifications, "Error al copiar al portapapeles."]);
                console.log("Error");
            });
    };

    return (
        <div className="div-code">
            <div className="div-icon-copy">
                <img 
                    src={icon_copy} 
                    alt="Copiar código" 
                    className="icon-copy label-mode" 
                    title="Copiar"
                    onClick={copyCode}
                />
            </div>
            <div className="div-comand">
                <pre>{props.code}</pre>
            </div>
        </div>
    );
}