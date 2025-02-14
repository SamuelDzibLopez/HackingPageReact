import React from "react";

import icon_close from "./../sources/icons/icon-close.svg";

export default function Notification (props) {
    return (
        <div className="notification">
            <p>
                {props.text}
            </p>
            <img src={icon_close} alt="" title="Cerrar" className="icon-close-notification"/>
        </div>
    );
}