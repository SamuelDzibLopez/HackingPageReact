import React from "react";

import Comand from "../../../Comand";
import Img from "../../../Img";

//Imagenes
import Img_One from "./../../../../sources/imgs/HYDRA/HYDRA_01.png";
import Img_Two from "./../../../../sources/imgs/HYDRA/HYDRA_03.png";
import Img_Three from "./../../../../sources/imgs/HYDRA/HYDRA_02.png";



import icon_directory_pink from "./../../../../sources/icons/icon-directory-pink.svg";
import icon_directory from "./../../../../sources/icons/icon-directory.svg";

export default function HYDRA (props) {
    return (
        <>
            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                <span className="span-pink"> HYDRA.<span className="span-pink cursor">_</span>
                </span>
            </h3>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Introducción a Hydra.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                <span className="span-yellow">Hydra</span> es una <span className="span-white">herramienta de código abierto</span> utilizada para realizar <span className="span-pink">ataques de fuerza bruta</span> contra múltiples <span className="span-blue">protocolos de autenticación</span>. Es muy popular en <span className="span-pink">pruebas de penetración</span> debido a su <span className="span-white">rapidez</span> y <span className="span-white">compatibilidad</span> con una <span className="span-pink">gran variedad de servicios</span>.
            </p>

            <ul className="ol-code">
                <li>
                    <p>
                        Soporta <span className="span-pink">múltiples protocolos</span> como <i className="span-white">SH, FTP, HTTP, MySQL, SMB, RDP,</i> entre otros.
                    </p>
                </li>

                <li>
                    <p>
                        Puede realizar <span className="span-pink">ataques con listas</span> de <span className="span-white">usuarios</span> y <span className="span-white">contraseñas</span>.
                    </p>
                </li>

                <li>
                    <p>
                        Permite <span className="span-pink">ataques distribuidos</span> en múltiples máquinas.
                    </p>
                </li>

                <li>
                    <p>
                        Ofrece <span className="span-pink">opciones de personalización</span> y <span className="span-pink">optimización</span> en los <span className="span-white">intentos de autenticación</span>.
                    </p>
                </li>                
            </ul>

            <p>
                El <span className="span-white">comando</span> base para ejecutar cualquier <span className="span-pink">instruccion</span> de HYDRA es:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "hydra"
            />

            <p>
                Imagen de <span className="span-white">ejemplo</span>:
            </p>

            <Img
                img = {Img_One}
                alt = {"Imagen 1. Hydra."}
                title = {"Descripcción de imagen."}
                text = {"1. Comando principal de Hydra."}
            />

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Instalación a Hydra.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                En <span className="span-yellow">Kali Linux</span>, <span className="span-yellow">Hydra</span> generalmente viene <span className="span-white">preinstalado</span>. Para <span className="span-white">verificarlo</span>, usa el comando <i className="span-white">`-h`</i> para obtener <span className="span-pink"> ayuda de información de la herramienta</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "hydra -h"
            />

            <p>
                Imagen de <span className="span-white">ejemplo</span>:
            </p>

            <Img
                img = {Img_Two}
                alt = {"Imagen 2. Hydra."}
                title = {"Descripcción de imagen."}
                text = {"2. Comando de informacion de Hydra."}
            />

            <p>
                Si por algún motivo <span className="span-yellow">Hydra</span> NO se encuentra instalado, puede hacerlo con:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "sudo apt update && sudo apt install hydra"
            />

            <p>
                Verifica la <span className="span-white">instalación</span> con:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "hydra -v"
            />

            <p>
                Imagen de <span className="span-white">ejemplo</span>:
            </p>

            <Img
                img = {Img_Three}
                alt = {"Imagen 3. Hydra."}
                title = {"Descripcción de imagen."}
                text = {"3. Comando de versión de Hydra."}
            />

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Uso de Hydra.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                La <span className="span-white">sintaxis</span> básica de <span className="span-yellow">Hydra</span> es:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "hydra -l usuario -P <diccionario> -s <puerto> <protocolo>://<objetivo>"
            />

            <p>
                Donde:
            </p>

            <ul className="ol-code">
                <li>
                    <p>
                        <span className="span-white">-l</span> <span className="span-blue">-></span> <span className="span-pink">Define el parametro para el usuario</span> (si se piensa utilizar un <span className="span-pink">diccionario</span> debe colocarse <span className="span-white">-L</span>).
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">usuario</span> <span className="span-blue">-></span> <span className="span-pink">Define el usuario</span> (Si se utilizo el <span className="span-white">-L</span>, colocamos la <span className="span-white">ruta y diccionario</span> a utilizar).
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">-P</span> <span className="span-blue">-></span> <span className="span-pink">Define el parametro para la contraseña</span> (si se sabe la <span className="span-pink">contraseña</span> debe colocarse <span className="span-white">-p</span>).
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;diccionario&gt;</span> <span className="span-blue">-></span> <span className="span-pink">Define la ruta y nombre de diccionario</span> (Si se utilizo el <span className="span-white">-p</span>, colocamos la <span className="span-white">contraseña</span> a utilizar).
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">-s</span> <span className="span-blue">-></span> <span className="span-pink">Define el parametro para el puerto</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;puerto&gt;</span> <span className="span-blue">-></span> <span className="span-pink">Define el puerto por el cual se encuentra activo el servicio</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;protocolo&gt;</span> <span className="span-blue">-></span> <span className="span-pink">Define el protocolo y servicio a atacar</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;objetivo&gt;</span> <span className="span-blue">-></span> <span className="span-pink">Define el objetivo a atacar</span>.
                    </p>
                </li>
            </ul>

            <p>
                Dependiendo del <span className="span-pink">servicio</span> y <span className="span-pink">tipo de ataque</span>, los datos pueden cambiar.
            </p>

            <p>
                <b className="span-blue">1. Ataques FTP:</b>
            </p>

            <p>Si planeamos atacar un servicio <span className="span-white">FPT</span>, deberiamos colocar algo similar a:</p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "hydra -l <usuario> -P <diccionario> ftp://<objetivo>"
            />

            <p>
                <span className="span-white">Ejemplo:</span>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "hydra -l admin -P rockyou.txt ftp://192.168.0.105"
            />

            <p>
                Donde:
            </p>

            <ul className="ol-code">
                <li>
                    <p>
                        <span className="span-white">-l admin</span> <span className="span-blue">-></span> <span className="span-pink">Intentará autenticarse con el usuario <span className="span-white">admin</span>.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">-P rockyou.txt</span> <span className="span-blue">-></span> <span className="span-pink">Utilizará una <span className="span-white">lista de contraseñas</span>.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">ftp://192.168.0.105</span> <span className="span-blue">-></span> <span className="span-pink">Dirección IP del <span className="span-white">servidor</span> y ataque de servicio <span className="span-white">FTP</span></span>.
                    </p>
                </li>
            </ul>

            <p>
                <b className="span-blue">2. Ataques SSH:</b>
            </p>

            <p>Si planeamos atacar un servicio <span className="span-white">SSH</span>, la sintaxis seria algo similar a:</p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "hydra -L <diccionario> -P <diccionario> ssh://<objetivo>"
            />

            <p>
                <span className="span-white">Ejemplo:</span>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "hydra -L usuarios.txt -P claves.txt ftp://192.168.0.105"
            />

            <p>
                Donde:
            </p>

            <ul className="ol-code">
                <li>
                    <p>
                        <span className="span-white">-L usuarios.txt</span> <span className="span-blue">-></span> <span className="span-pink">Utilizará una <span className="span-white">lista de usuarios</span></span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">-P claves.txt</span> <span className="span-blue">-></span> <span className="span-pink">Utilizará una <span className="span-white">lista de contraseñas</span></span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">ssh://192.168.0.105</span> <span className="span-blue">-></span> <span className="span-pink">Dirección IP del <span className="span-white">servidor</span> y ataque de servicio <span className="span-white">SSH</span></span>.
                    </p>
                </li>
            </ul>

            <p>
                <b className="span-blue">3. Ataques HTTP (Formularios web):</b>
            </p>

            <p>
                <span className="span-yellow">Hydra</span> tambien permite realizar ataques a paginas web, las cuales utilizan el protocolo HTTP y HTTPS, pero en esta ocasion, la sintaxis cambia un poco:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code={`hydra -l usuario -P <diccionario> -s <puerto> <protocolo>://<objetivo>/<ruta-pagina>:\\"<consulta>":\\"<texto-error>`}
            />

            <p>
                <span className="span-white">Ejemplo:</span>
            </p>

            <Comand
                funcionNotificacion={props.funcionNotificacion}
                notifications={props.notifications}
                code={`hydra -l admin -P rockyou.txt -s 8080 http-post-form://192.168.0.105/<dvwa/login.php>:\\"username=^USER^&password=^PASS^&Login=Login\\":\\"Login failed\\"`}
             />


            <p>
                Donde:
            </p>

            <ul className="ol-code">
                <li>
                    <p>
                        <span className="span-white">-l admin</span> <span className="span-blue">-></span> <span className="span-pink">Utilizará como contraseña <span className="span-white">admin</span></span>.
                    </p>
                </li>
            </ul>
        </>
    );
}