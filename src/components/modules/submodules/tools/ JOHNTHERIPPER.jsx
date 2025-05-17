import React from "react";

import Comand from "../../../Comand";
import Img from "../../../Img";

//Imagenes
import Img_One from "./../../../../sources/imgs/JOHNTHERIPPER/JOHN_01.png"
import Img_Two from "./../../../../sources/imgs/JOHNTHERIPPER/JOHN_02.png"
import Img_Three from "./../../../../sources/imgs/JOHNTHERIPPER/JOHN_03.png"
import Img_Four from "./../../../../sources/imgs/JOHNTHERIPPER/JOHN_04.png"


import icon_directory_pink from "./../../../../sources/icons/icon-directory-pink.svg";
import icon_directory from "./../../../../sources/icons/icon-directory.svg";

export default function JOHNTHERIPPER (props) {
    return (
        <>
            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                <span className="span-pink">JOHN THE RIPPER.<span className="span-pink cursor">_</span>
                </span>
            </h3>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Introducción a JOHN THE RIPPER.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                <span className="span-yellow">John the Ripper</span> <span className="span-white">(JtR)</span> es una <span className="span-pink">herramienta</span> de software <spab className="span-white">gratuita</spab> para <span className="span-blue">auditar</span> y <span className="span-blue">descifrar contraseñas</span>. Es muy utilizada en <span className="span-white">ciberseguridad</span> y <span className="span-white">pruebas de penetración</span> para <span className="span-pink">comprobar la seguridad</span> de las <span className="span-white">contraseñas almacenadas en hashes</span>.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Instalación de JOHN THE RIPPER.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                La mayoría de <span className="span-pink">versiones</span> de <span className="span-pink">Kali Linux</span> ya incluyen una versión básica de <span className="span-white">John</span>.
            </p>

            <p>
                Para <span className="span-pink">verificarlo</span>, puedes utilizar el <span className="span-white">comando</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "john"
            />

            <p>
                <span className="span-pink">Visualizando</span>:
            </p>

            <Img
                img = {Img_One}
                alt = {"Imagen 2. JOHN THE RIPPER."}
                title = {"Descripcción de imagen."}
                text = {"1. Comando principal de JOHN THE RIPPER."}
            />

            <p>
                <span className="span-yellow">
                    Nota:
                </span> Si ves una <span className="span-pink">versión</span> como <i className="span-white">John the Ripper 1.9.x</i>, ya lo tienes.
            </p>

            <p>
                Si no cuentas son él, puedes <span className="span-pink">instalarlo</span>, utilizando:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "sudo apt update"
            />

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "sudo apt install john"
            />

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Utilización de JOHN THE RIPPER.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                <span className="span-yellow">John</span> trabaja <span className="span-white">principalmente</span> con <span className="span-pink">archivos de hashes</span>. Por <span className="span-pink">ejemplo</span>:
            </p>

            <p>
                Supongamos que obtuvimos un <span className="span-white">archivo hash</span> con el siguiente <span className="span-pink">contenido</span>:
            </p>

            <Img
                img = {Img_Two}
                alt = {"Imagen 2. JOHN THE RIPPER."}
                title = {"Descripcción de imagen."}
                text = {"2. Archivo hash para uso de JOHN THE RIPPER."}
            />

            <p>
                Si deseas simular el <span className="span-white">archivo</span>, puedes realizarlo, <span className="span-white">ejecutando</span> el siguiente <span className="span-pink">código</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = 'echo "usuario:5f4dcc3b5aa765d61d8327deb882cf99" > hashes.txt'
            />

            <b >
                <p className="span-blue">
                    1. Descifrar hashes (modo automático)
                </p>
            </b>

                <p>
                    la manera más <span className="span-white">sencilla</span> de utilizar la herramienta <span className="span-yellow">John the Ripper</span> <i className="span-white">(modo automático)</i> seria con el <span className="span-pink">comando</span>: 
                </p>

                <Comand
                    funcionNotificacion = {props.funcionNotificacion}
                    notifications = {props.notifications}
                    code = 'john <archivo-hashes.txt>'
                />

                <p>
                    <span className="span-pink">Ejemplo</span> con <span className="span-white">archivo anterior</span>:
                </p>


                <Comand
                    funcionNotificacion = {props.funcionNotificacion}
                    notifications = {props.notifications}
                    code = 'john hashes.txt'
                />

                <p>
                    Visualizando:
                </p>

                <Img
                    img = {Img_Three}
                    alt = {"Imagen 3. JOHN THE RIPPER."}
                    title = {"Descripcción de imagen."}
                    text = {"3. Modo automático de JOHN THE RIPPER."}
                />

            <b >
                <p className="span-blue">
                    2. Utilizar un diccionario personalizado (wordlist)
                </p>
            </b>

            <p>
                Tambien podemos utilizar un <span className="span-white">diccionario personalizado</span>  para realizar. 
            </p>

            <p>
                <span className="span-yellow">Nota:</span> Podemos crear nuestras <i className="span-white">wordlist</i> en un <i className="span-white">.txt</i>
            </p>

            <Img
                img = {Img_Four}
                alt = {"Imagen 4. JOHN THE RIPPER."}
                title = {"Descripcción de imagen."}
                text = {"4. Modo automático de JOHN THE RIPPER."}
            />

            

            
        </>


    );
}