import React from "react";

// Notificación
import Notification from "./Notification";

export default function DivNotifications (props) {
    return (
        <div className="div-notifications" id="divNotifications">
            {props.arrayNotifications.map((turno, index) => (
                <Notification
                    key={index}  // Usar el índice como key
                    text={turno}  // Pasar el turno directamente como texto
                />
            ))}
        </div>
    );
}
