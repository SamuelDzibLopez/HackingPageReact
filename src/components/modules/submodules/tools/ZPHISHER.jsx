import React from "react";

import Comand from "../../../Comand";
import Img from "../../../Img";

//Imagenes
import Img_One from "./../../../../sources/imgs/NMAP/NMAP_01.png";
import Img_Two from "./../../../../sources/imgs/NMAP/NMAP_02.png";
import Img_Three from "./../../../../sources/imgs/NMAP/NMAP_03.png";
import Img_Four from "./../../../../sources/imgs/NMAP/NMAP_04.png";
import Img_Five from "./../../../../sources/imgs/NMAP/NMAP_05.png";
import Img_Six from "./../../../../sources/imgs/NMAP/NMAP_06.png";
import Img_Seven from "./../../../../sources/imgs/NMAP/NMAP_07.png";
import Img_Eight from "./../../../../sources/imgs/NMAP/NMAP_08.png";
import Img_Nine from "./../../../../sources/imgs/NMAP/NMAP_09.png";
import Img_Ten from "./../../../../sources/imgs/NMAP/NMAP_10.png";
import Img_Eleven from "../../../../sources/imgs/NMAP/NMAP_11.png";
import Img_Twelve from "../../../../sources/imgs/NMAP/NMAP_12.png";
import Img_Thirteen from "../../../../sources/imgs/NMAP/NMAP_13.png";
import Img_Fourteen from "../../../../sources/imgs/NMAP/NMAP_14.png";
import Img_Fifteen from "../../../../sources/imgs/NMAP/NMAP_15.png";
import Img_Sixteen from "../../../../sources/imgs/NMAP/NMAP_16.png";
import Img_Seventeen from "../../../../sources/imgs/NMAP/NMAP_17.png";




import icon_directory_pink from "./../../../../sources/icons/icon-directory-pink.svg";
import icon_directory from "./../../../../sources/icons/icon-directory.svg";

export default function ZPHISHER (props) {
    return (
        <>
            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                <span className="span-pink"> ZPHISHER.<span className="span-pink cursor">_</span>
                </span>
            </h3>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Introducción a ZPHISHER.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                <span className="span-yellow">Nmap</span> <i className="span-white">(Network Mapper)</i> es una <i className="span-blue">herramienta de código abierto</i> utilizada para el <span className="span-white">escaneo</span> y <span className="span-white">mapeo de redes</span>. Es ampliamente utilizada para el <span className="span-pink">hacking ético</span> y <span className="span-pink">prácticas de la ciberseguridad</span> con la finalidad de identificar <span className="span-white">dispositivos</span>, <span className="span-white">servicios</span> y <span className="span-white">puertos abiertos</span> en una <span className="span-pink">red</span>.
            </p>

            <p>
                El <span className="span-white">comando</span> base para ejecutar cualquier <span className="span-pink">instruccion</span> de NMAP es:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "zphisher"
            />

            <p>
                Imagen de <span className="span-white">ejemplo</span>:
            </p>

            <Img
                img = {Img_One}
                alt = {"Imagen 1. NMAP."}
                title = {"Descripcción de imagen."}
                text = {"1. Comando principal de NMAP."}
            />
        </>
    );
}