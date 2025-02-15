import React from "react";

import Comand from "../../../Comand";
import Img from "../../../Img";

//Imagenes
import Img_One from "./../../../../sources/imgs/imgKali.PNG"

import icon_directory_pink from "./../../../../sources/icons/icon-directory-pink.svg";

export default function NMAP (props) {
    return (
        <>
            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                <span className="span-pink"> NMAP.<span className="span-pink cursor">_</span>
                </span>
            </h3>

            <p>
                Lorem <span className="span-white">ipsum</span> dolor sit amet consectetur adipisicing elit. <span
                    className="span-yellow">Totam voluptates</span> ipsum placeat earum unde inventore <span className="span-pink">quidem
                    sed</span> facilis nemo sunt!.
            </p>
            
            <p>
                A <span className="span-white">continuacion,</span> el <span className="span-pink">comando:</span>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "whoami"
            />

            <p>
                Para visualizar:
            </p>

            <Img
                img = {Img_One}
                alt = {"Imagen 1. NMAP."}
                title = {"Descripcción de imagen."}
                text = {"1. Lorem ipsum dolor sit, amet consectetur adipisicing."}
            />

        </>
    );
}