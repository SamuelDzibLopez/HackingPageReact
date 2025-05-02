import React from "react";

import Comand from "../../../Comand";
import Img from "../../../Img";

//Imagenes
import Img_One from "./../../../../sources/imgs/WFUZZ/WFUZZ_01.png";
import Img_Two from "./../../../../sources/imgs/WFUZZ/WFUZZ_02.png";
import Img_Three from "./../../../../sources/imgs/WFUZZ/WFUZZ_03.png";
import Img_Four from "./../../../../sources/imgs/WFUZZ/WFUZZ_04.png";
import Img_Five from "./../../../../sources/imgs/WFUZZ/WFUZZ_05.png";
import Img_Six from "./../../../../sources/imgs/WFUZZ/WFUZZ_06.png";
import Img_Seven from "./../../../../sources/imgs/WFUZZ/WFUZZ_07.png";
import Img_Eight from "./../../../../sources/imgs/WFUZZ/WFUZZ_08.png";

import icon_directory_pink from "./../../../../sources/icons/icon-directory-pink.svg";
import icon_directory from "./../../../../sources/icons/icon-directory.svg";

export default function WFUZZ (props) {
    return (
        <>
            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                <span className="span-pink"> WFUZZ.<span className="span-pink cursor">_</span>
                </span>
            </h3>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Introducción a WFUZZ.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                <span className="span-yellow">WFuzz</span> es una <span className="span-white">herramienta de fuzzing</span> utilizada principalmente para realizar <span className="span-pink">pruebas de penetración y auditar aplicaciones web</span>. Permite realizar <span className="span">pruebas de intrusión</span> a través de técnicas de <span className="span-white">fuerza bruta</span>, enviando solicitudes HTTP con una lista de palabras o patrones para buscar vulnerabilidades como <span className="span-blue">directorios</span> y <span className="span-blue">archivos ocultos</span>, entre otros.
            </p>

            <p>
                El <span className="span-white">comando</span> base para ejecutar cualquier <span className="span-pink">instruccion</span> de WFUZZ es:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "wfuzz"
            />

            <p>
                Imagen de <span className="span-white">ejemplo</span>:
            </p>
            
            <Img
                img = {Img_One}
                alt = {"Imagen 1. WFUZZ."}
                title = {"Descripcción de imagen."}
                text = {"1. Comando principal de WFUZZ."}
            />

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Preinstalación.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                <span className="span-yellow">Wfuzz</span> es una <span className="span-pink">herramienta</span> la cual se encuentra <i className="span-white">preinstalada</i> dentro de nuestro <span className="span-white">SO Kali Linux.</span>
            </p>

            <p>
                Para <span>visualizar</span> su <span className="span-white">instalación</span> y <span className="span-white">versión</span> realizamos el siguiente <span className="span-pink">comando</span> desde <span className="span-blue">terminal:</span>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "wfuzz -V"
            />

            <p>
                Imagen de <span className="span-white">ejemplo</span>:
            </p>
            
            <Img
                img = {Img_Two}
                alt = {"Imagen 2. WFUZZ."}
                title = {"Descripcción de imagen."}
                text = {"2. Comando de versión de WFUZZ."}
            />

            <p>
                En <span className="span-">caso de no contar</span> con la <span className="span-pink">herramienta</span>, puedes descargarla <span className="span-white">ejecutando</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "pip install wfuzz"
            />

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Información y Ayuda.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Si deseamos obtener <span className="span-blue">información</span> y <span className="span-blue">documentación</span> para el uso de la herramienta, <span className="span-pink">ejecutamos</span> el comando <i className="span-white">-h</i>.
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "wfuzz -h"
            />

            <p>
                Como el siguiente <span className="span-white">ejemplo</span>:
            </p>

            <Img
                img = {Img_Three}
                alt = {"Imagen 3. WFUZZ."}
                title = {"Descripcción de imagen."}
                text = {"3. Comando de información y ayuda de WFUZZ."}
            />

            <p>
                Este <span className="span-pink">comando</span> desplegará la <span className="span-white">documentación</span> para el uso de la herramienta, tales como <span className="span-blue">parámetros</span> y <span className="span-blue">argumentos</span> a utilizar en los <span className="span-pink">comandos</span> y sus <span className="span-pink">explicaciones.</span>
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Wordlist utiles.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Para este tipo de <span className="span-pink">ataques</span> se recomienda contar con una serie de archivos de <span className="span-white">wordlist</span> a utilizar al momento de la realización del <span className="span-yellow">FUZZING</span>.
            </p>

            <p>Puedes <span className="span-pink">crear los tuyos propios</span> en un archivo <i className="span-white">.txt</i> o <span className="span-pink">descargar</span> alguna <span className="span-white">wordlist</span> de tu preferencia</p>

            <p>
                Si <span className="span-white">NO</span> cuentas con alguna, <span className="span-pink">puedes instalar</span> una llamada <span className="span-white">SecLists</span>, realizando el siguiente <span className="span-pink">comando</span> en tu terminal:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "sudo apt install seclists"
            />

            <p>
                <span className="span-yellow">Nota:</span> Este comando nos <span className="span-white">descargará</span> un directorio llamado <span className="span-pink">SecLists</span>, el cual contiene diferentes archivos <span className="span-white">wordlist</span> que podemos utilizar.
            </p>

            <p>
                El <span className="span-pink">directorio</span> se encuentra ubicado en la ruta <i className="span-white">'/usr/share/wordlists/seclists'</i>, podemos visualizarlo utilizando el <span className="span-pink">comando</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "cd /usr/share/wordlists/seclists"
            />

            <p>
                Dentro de este <span className="span-pink">directorio descargado</span> , se encuentra otros directorios que contienen <span className="span-white">wordlists</span> utiles para todo tipo de <span className="span-blue">herramientas</span> y <span className="span-blue">ataques</span>.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Comando básico de WFUZZ.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                El <span className="span-white">comando básico</span> para realizar <span className="span-yellow">fuzzing</span> con <span className="span-yellow">WFuzz</span> es el siguiente:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "wfuzz -c --hc=404 -w <url-diccionario> http://<ip-victima>/FUZZ"
            />

            <p>
                Donde:
            </p>

            <ol className="ol-code">
                <li>
                    <p>
                        <span className="span-white">-c</span> <span className="span-blue">-></span> <span className="span-pink">Activa el uso de colores para la salida, facilitando la visualización de los resultados.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">--hc=404</span> <span className="span-blue">-></span> <span className="span-pink">Filtra las respuestas HTTP con un código 404 (no encontrado), ya que normalmente no son útiles en la búsqueda de directorios o archivos.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">-w</span> <span className="span-blue">-></span> <span className="span-pink">Cabecera para colocar el parametro de <span className="span-white">wordlist</span>.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;url-diccionario&gt;</span> <span className="span-blue">-></span> <span className="span-pink">Ruta al diccionario que contiene las palabras a usar para el fuzzing. Puede ser una lista de directorios o rutas comunes.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;ip-victima&gt;</span> <span className="span-blue">-></span> <span className="span-pink">URL de victima.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">FUZZ</span> <span className="span-blue">-></span> <span className="span-pink">Palabra clave donde se ejecutará y modificará el <span className="span-yellow">fuzzing</span> de <span className="span-white">wordlist</span>.</span>
                    </p>
                </li>
            </ol>

            <p>
                Un <span className="span-white">ejemplo</span> de <span className="span-pink">comando</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "fuzz -c --hc=404 -w /usr/share/wordlists/seclists/Discovery/Web-Content/directory-list-lowercase-2.3-medium.txt http://192.168.0.110/FUZZ"
            />

            <p>
                Obteniendo:
            </p>

            <Img
                img = {Img_Four}
                alt = {"Imagen 4. WFUZZ."}
                title = {"Descripcción de imagen."}
                text = {"4. Fuzzing basico con WFUZZ."}
            />

            <p>
                <span className="span-yellow">Nota:</span> Durante el <span>fuzzing</span> se puede observar que se encontro un <span className="span-pink">subdirectorio</span> llamado <i className="span-white">webcams</i>.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">WFUZZ con dominios.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Si se necesita <span className="span-white">realizar pruebas</span> con un <span className="span-pink">nombre de dominio personalizado</span> en lugar de una <span className="span-pink">IP</span>, es necesario modificar el <span className="span-white">archivo de host</span>. Para ello:
            </p>

            <p>
                <b className="span-blue">1. Abrir archivo de <span className="span-white">host</span>:</b>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "sudo nano /etc/hosts"
            />

            <p>
                <b className="span-blue">2. Agregar <span className="span-white">ip de maquina victima</span> y <span className="span-white">host</span>:</b>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "<ip-victima> <nombre-dominio>"
            />

            <p>
                En el caso de <span className="span-white">ejemplo</span>:
            </p>

            <Img
                img = {Img_Five}
                alt = {"Imagen 5. WFUZZ."}
                title = {"Descripcción de imagen."}
                text = {"5. Abrir archivo hosts."}
            />

            <Img
                img = {Img_Six}
                alt = {"Imagen 5. WFUZZ."}
                title = {"Descripcción de imagen."}
                text = {"6. Agregado de dominio a archivo hosts."}
            />

            <p>
                <span className="span-yellow">Nota:</span> El <span className="span-pink">dominio</span> de ejemplo agregado es <i className="span-white">lost.nyx</i> de la <span className="span-pink">ip victima</span> <i className="span-white">192.168.0.112</i>.
            </p>

            <p>
                Finalmente, <span className="span-white">guardamos</span> la información del <span className="span-pink">archivo modificado</span>.
            </p>

            <p>
                Ahora, si podemos utilizar el <span className="span-pink">dominio</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = 'wfuzz -c --hc=404 -w <url-diccionario> -H "Host: FUZZ.<nombre-dominio>" -u <ip-victima>'
            />

            <p>
                Donde:
            </p>

            <ol className="ol-code">
                <li>
                    <p>
                        <span className="span-white">-H</span> <span className="span-blue">-></span> <span className="span-pink">Parametro para indicar que continua el texto del <span className="span-white">host</span>.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">"Host: FUZZ.&lt;nombre-dominio&gt;"</span> <span className="span-blue">-></span> <span className="span-pink">Modifica el encabezado Host de la solicitud HTTP, sustituyendo FUZZ por las palabras del diccionario.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">-u</span> <span className="span-blue">-></span> <span className="span-pink">Parametro para indicar que continua la <span className="span-white">IP victima</span>.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;ip-victima&gt;</span> <span className="span-blue">-></span> <span className="span-pink"><span className="span-white">IP victima</span> a atacar.</span>
                    </p>
                </li>
            </ol>

            <p>
                Realizando el <span className="span-white">ejemplo</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = 'wfuzz -c --hc=404 --hl=34 -w /usr/share/wordlists/seclists/Discovery/DNS/subdomains-top1million-110000.txt -H "Host: FUZZ.lost.nyx" -u 192.168.0.112'
            />

            <p>
                Con <span className="span-white">resultado</span>:
            </p>

            <Img
                img = {Img_Seven}
                alt = {"Imagen 7. WFUZZ."}
                title = {"Descripcción de imagen."}
                text = {"7. Fuzzing de dominios."}
            />

            <p>
                <span className="span-yellow">Nota:</span> El <span className="span-pink">parametro</span> <i className="span-white">--hl=34</i> permite <span className="span-blue">filtrar</span> y <span className="span-blue">omitir</span> aquellas respuestas con un total de <span className="span-white">34 lineas de respuesta</span>. este parametro y valor puedes <span className="span-blue">modificarlas</span> dependiendo de tus necesidades o simplemente <span className="span-blue">omitirla</span>.
            </p>

            <p>
                <span className="span-yellow">Nota:</span> El <span className="span-yellow">fuzzing</span> realizado nos encontro un subdominio llamado <i className="span-white">dev.lost.nyx</i>.
            </p>

            <p>
                No olvidemos que para entrar al <span className="span-pink">subdominio</span>, necesitamos agregar este al archivo de <span className="span-white">host</span>.
            </p>

            <p>
                Como el <span className="span-pink">siguiente</span>:
            </p>

            <Img
                img = {Img_Eight}
                alt = {"Imagen 8. WFUZZ."}
                title = {"Descripcción de imagen."}
                text = {"8. Agregado de subdominio a host."}
            />

            <p>
                <span className="span-yellow">Nota:</span> Esto es para poder acceder desde nuestro <span className="span-pink">browser</span> a <span className="span-blue">dominios</span> y <span className="span-blue">subdominios</span>.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Especificar Puertos.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Si el <span className="span-pink">servidor</span> está escuchando en un <span className="span-white">puerto no estándar</span>, puedes especificar el puerto con la <span className="span-white">URL</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = 'wfuzz -c --hc=404 -w <url-diccionario> http://<ip-victima>:<puerto>/FUZZ'
            />

            <p>
                <span className="span-white">Ejemplo</span> :
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = 'wfuzz -c --hc=404 -w /usr/share/wordlists/seclists/Discovery/Web-Content/directory-list-lowercase-2.3-medium.txt http://192.168.0.110:8080/FUZZ'
            />

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Fuzzing con Parámetros en URL.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Para realizar <span className="span-white">fuzzing en parámetros de URLs</span>, podemos agregarla de una <span className="span-pink">manera sencilla</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = 'wfuzz -c --hc=404 -w <url-diccionario> http://<ip-victima>/page.php?FUZZ=1'
            />
        </>
    );
}