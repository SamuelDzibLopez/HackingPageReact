import React from "react";

import Comand from "../../../Comand";
import Img from "../../../Img";

//Imagenes
import Img_One from "./../../../../sources/imgs/imgKali.PNG"

import icon_directory_pink from "./../../../../sources/icons/icon-directory-pink.svg";
import icon_directory from "./../../../../sources/icons/icon-directory.svg";

export default function NMAP (props) {
    return (
        <>
            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                <span className="span-pink"> NMAP.<span className="span-pink cursor">_</span>
                </span>
            </h3>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Introducción a NMAP.<span className="span-blue cursor">_</span>
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
                code = "nmap"
            />

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Preinstalación.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                <span className="span-yellow">Nmap</span> es una <span className="span-pink">herramienta</span> que se encuentra <i className="span-white">preinstalada</i> dentro de nuestro <span className="span-white">SO Kali Linux.</span>
            </p>

            <p>
                Podemos <span>visualizar</span> su <span className="span-white">instalación</span> y <span className="span-white">versión</span> con el siguiente <span className="span-pink">comando</span> desde <span className="span-blue">terminal:</span>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -v"
            />

            <p>
                <span className="span-yellow">Nota:</span> Este <span className="span-pink">comando</span> nos mostrará la <span className="span-white">versión instalada</span> en nuestro <span className="span-blue">equipo.</span>
            </p>

            <p>
                En <span className="span-yellow">caso de no contar</span> con la <span className="span-pink">herramienta</span> por algún motivo, puedes <span className="span-white">descargarla</span> ejecutando el <span className="span-pink">comando:</span>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "sudo apt update -y && sudo apt install nmap -y"
            />

            <p>
                <span className="span-yellow">Nota:</span> Esto <span className="span-white">utilizando</span> sistemas basados en <span className="span-pink">Linux Debian.</span>
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Información y Ayuda.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Podemos obtener y <span className="span-white">visualizar</span> <span className="span-pink">información</span> y <span className="span-pink">ayuda</span> para el uso de NMAP ejecutando el <span className="span-pink">comando:</span>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -h"
            />

            <p>
                Este <span className="span-pink">comando</span> desplegará la <span className="span-white">documentación</span> para el uso de la herramienta, tales como <span className="span-blue">parámetros</span> y <span className="span-blue">argumentos</span> a utilizar en los <span className="span-pink">comandos</span> y sus <span className="span-pink">explicaciones.</span>
            </p>

            <p>
                <span className="span-yellow">Nota:</span> El <span className="span-blue">parámetro</span> <span className="span-white">-h</span> es común para consultar ayuda en <span className="span-pink">diferentes herramientas de terminal</span>, deberías intentar ejecutarlo en algunas otras.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Escaneo de redes y segmentos de red.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
            <span className="span-yellow">NMAP</span> nos permite <span className="span-white">escanear una red o segmento</span> de esta en busca de <span className="span-pink">dispositivos</span> y sus <span className="span-pink">IPs</span> para una enumeración.
            </p>

            <p>
                Para ello, debemos colocar el <span className="span-pink">comando:</span>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -sn <dirección-red>/<máscara-red>"
            />

            <p>
            <span className="span-yellow">Nota:</span> Utilizando el parámetro <span className="span-white">-sn</span> podemos definir un <span className="span-blue">rango</span> o <span className="span-blue">segmento de red</span> a escanear.
            </p>

            <p>
                Un <span className="span-white">ejemplo:</span>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -sn 192.168.0.0/24"
            />

            <p>
                Donde, este <span className="span-pink">comando</span> buscará todos los <span className="span-white">dispositivos</span> que se <span className="span-blue">encuentren</span> en la red <i className="span-white">192.168.0.0</i> con máscara de red <span className="span-white">24</span> (es decir, <i className="span-white">255.255.255.0</i>).
            </p>

            <p>
                Es decir, desde <i className="span-white">192.168.0.0</i> hasta la <i className="span-white">192.168.0.255</i>.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Escaneos de dominios o IPs.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                La herramienta <span className="span-yellow">NMAP</span> permite recibir como <span className="span-blue">argumento</span>, tanto el <span className="span-white">ombre de dominio</span> como la <span className="span-white">IP de un servidor</span>.
            </p>

            <p>
                Utilizando el <span className="span-pink">comando:</span>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap <dominio-o-ip>"
            />

            <p>
                <span className="span-white">Ejemplo:</span>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap scanme.nmap.org"
            />

            <p>
                O <span className="span-white">tambien:</span>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap 45.33.32.156"
            />

            <p>
            <span className="span-yellow">Nota:</span> Lo que <span className="span-white">NO</span> es <span className="span-pink">válido</span> es colocar el <span className="span-white">protocolo de la URL:</span>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap https://scanme.nmap.org"
            />

            <p>
                Debido a que <span className="span-yellow">NMAP</span> no trabaja sobre protocolos de estas capas superiores, por consiguiente, no las reconoce.
            </p>


            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Escaneo con versiones de servicio.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Una mejora para escaneo de <span className="span-pink">IPs</span> y <span className="span-pink">dominios</span> puede ejecutarse con ayuda del parámetro <span className="span-white">-sV</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -sV <dominio-o-ip>"
            />

            <p>
                Como <span className="span-white">ejemplo:</span>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -sV 192.168.0.1"
            />

            <p>
                <span className="span-yellow">Nota:</span> Este comando permitirá <span className="span-white">visualizar</span>, no solo el <span className="span-pink">tipo de servicio</span> corriendo en un puerto, sino también la <span className="span-pink">versión</span> de este; <span className="span-white">información</span> útil para detección de posibles <span className="span-blue">vulnerabilidades</span> o <span className="span-blue">errores</span>.
            </p>

            <p>
                Existe un <span className="span-blue">parametro extra</span> acompañado de <span className="span-white">-sV</span>, el cual es <span className="span-white">--version-intensity</span> y es acompanado de un argumento <span className="span-white">0</span> a <span className="span-white">9</span>:
            </p>

            <p>
                Permitiendo ajustar la <span className="span-white">intensidad de detección de version</span>.
            </p>

            <p>
                Con la <span className="span-white">sintaxis</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -sV --version-intensity <intensidad> <dominio-o-ip>"
            />

            <p>
                O:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -sV --version-intensity 8 192.168.0.1"
            />

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Escaneo de puertos específicos.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                <span className="span-yellow">NMAP</span> también nos permite escanear un puerto específico o varios de un <span className="span-white">dispositivo</span>.
            </p>

            <p>
                Para ello, utilizamos el parámetro <span className="span-white">-p</span>.
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -p<num-puerto> <dominio-o-ip>"
            />

            <p>
                Como los <span className="span-pink">siguientes comandos</span> de <span className="span-white">ejemplo</span>:
            </p>

            <p>
                <b className="span-blue">1. Escaneo de puerto específico:</b>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -p80 192.168.0.1"
            />

            <p>
                Escaneo de puerto <span className="span-white">80</span> del dispositivo <span className="span-white">192.168.0.1</span>.
            </p>

            <p>
                <span className="span-yellow">Nota:</span> El número de puerto se coloca seguido del <span className="span-white">-p</span>.
            </p>

            <p>
                <b className="span-blue">2. Escaneo de múltiples puertos:</b>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -p80,22 192.168.0.1"
            />

            <p>
                Escaneo de varios puertos (<span className="span-white">80</span> y <span className="span-white">22</span>) del dispositivo <span className="span-white">192.168.0.1</span>.
            </p>

            <p>
                <span className="span-yellow">Nota:</span> No olvidemos las <span className="span-white">,</span>.
            </p>

            <p>
                <b className="span-blue">3. Escaneo de rango de puertos:</b>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -p1-100 192.168.0.1"
            />

            <p>
                Escaneo del rango de puertos del <span className="span-white">1</span> hasta el <span className="span-white">100</span>, del dispositivo <span className="span-white">192.168.0.1</span>.
            </p>

            <p>
                <span className="span-yellow">Nota:</span> Los rangos van acompañados del <span className="span-white">-</span>.
            </p>

            <p>
                <b className="span-blue">4. Escaneo por protocolos de puertos:</b>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -sU -sT -pU:111,T:22,80 192.168.0.1"
            />

            <p>
                También podemos especificar el tipo de protocolo con el cual deseamos escanear el puerto o puertos. Podemos variar y personalizar el comando con ayuda de los parámetros:
            </p>

            <ul className="ol-code">
                <li>
                    <p>
                        <span className="span-white">-sU</span> <span className="span-blue">-></span> <span className="span-pink">Permite utilizar el protocolo UDP</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">-sT</span> <span className="span-blue">-></span> <span className="span-pink">Permite utilizar el protocolo TCP</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">U:</span> <span className="span-blue">-></span> <span className="span-pink">Permite especificar los puertos a escanear por UDP</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">T:</span> <span className="span-blue">-></span> <span className="span-pink">Permite especificar los puertos a escanear por TCP</span>.
                    </p>
                </li>

                <p>
                    <span className="span-yellow">Nota:</span> También podemos utilizar <span className="span-white">puertos específicos</span>, <span className="span-white">varios puertos</span> o <span className="span-white">rango de puertos</span>.
                </p>                
            </ul>

            <p>
                <b className="span-blue">5. Escaneo de TODOS los puertos existentes:</b>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -sU -sT -p- 192.168.0.1"
            />

            <p>
                Con ayuda del <span className="span-white">parámetro -</span> en lugar de algún puerto, podemos definir que el escaneo se llevará a cabo en <span className="span-pink">todos los puertos del dispositivo</span>.
            </p>

            <p>
                <span className="span-white">-p-</span> <span className="span-blue">-></span> <span className="span-pink">-p1-65535</span>.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Escaneo con exclusión de puertos.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Tambien <span className="span-yellow">NMAP</span> nos permite realizar escaneos con <span className="span-white">exclusion de puertos</span>; para ellos utilizamos el comando con el parametro <span className="span-white">--exclude-port</span>.
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap --exclude-ports <puerto-excluido> <dominio-o-ip>"
            />

            <p>
                Como <span className="span-white">ejemplos</span>: 
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap --exclude-ports 1900 192.168.0.1"
            />

            <p>
                Donde <span className="span-pink">excluimos</span> el puerto <span className="span-white">1900</span> del escaneo
            </p>

            <p>
                O:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap --exclude-ports 1900,80 192.168.0.1"
            />            

            <p>
                <span className="span-pink">Excluyendo</span> los puertos <span className="span-white">1900</span> y <span className="span-white">80</span> en el escaneo.
            </p>

            <p>
                O:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap --exclude-ports 1-50 192.168.0.1"
            />

            <p>
                <span className="span-pink">Excluyendo</span> los puertos del rango del <span className="span-white">1-50</span>.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Escaneo con puertos mas comunes.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Tambien con ayuda del parametro <span className="span-white">--top-ports</span> podemos definir el numero de puertos a <span className="span-white">escanear</span>, tomando como base el <span className="span-pink">TOP de puertos más comunes</span>.
            </p>

            <p>
                Para ello utilizamos el <span className="span-pink">comando</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap --top-ports <num-top-ports> <dominio-o-ip>"
            />

            <p>
                Un <span className="span-white">ejemplo</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap --top-ports 200 192.168.0.1"
            />

            <p>
                Donde escaneamos solo los <span className="span-pink">top 200 puertos más comunes</span>.
            </p>

            <p>
                <span className="span-yellow">Nota:</span> <span className="span-pink">NO</span> los 200 primeros puertos, sino los 200 <span className="span-white">famosos</span> y <span className="span-white">más utilizados</span>.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Escaneo de puertos mas posibles.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Con ayuda de <span className="span-white">--port-ratio</span> podemos <span className="span-pink">escanear</span> los <span className="span-blue">numeros de puertos que más posiblemente</span> se encuentren <span className="span-white">abiertos</span> o <span className="span-white">disponibles</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap --port-ratio <porcentaje-abierto> <dominio-o-ip>"
            />

            <p>
                Donde el argumento puede ir desde:
            </p>

            <p>
                Mas del <span className="span-white">0.0</span> <span className="span-blue">-></span> hasta <span className="span-white">1.0</span>.
            </p>

            <p>
                Por <span className="span-white">ejemplo</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap --port-ratio 0.4 192.168.0.1"
            />

            <p>
                Donde expecificamos que buscaremos <span className="span-pink">puertos que tengan una probabilidad </span> del <span className="span-white">40%</span> de encontrarse <span className="span-blue">abiertos</span>.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Escaneo de manera sigilosa.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Si deseamos utilizar el protocolo <span className="span-white">TCP/SYN</span> , el cual es mas sigiloso que el <span className="span-white">TPC</span>, podemos egregar a nuestro comando de escaneo el parametro <span className="span-white">-sS</span>.
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -sS <dominio-o-ip>"
            />

            <p>
                Aqui la diferencia de comunicación entre los diferentes <span className="span-white">protocolos</span>:
            </p>

            <p>
                <span className="span-white">TCP:</span> SYN (envia) <span className="span-blue">-></span> ACK (recibe) <span className="span-blue">-></span> ACK (envia)
            </p>

            <p>
                <span className="span-white">TCP/SYN:</span> SYN (envia) <span className="span-blue">-></span> SYN/ACK (recibe) <span className="span-blue">-></span> RST (envia)
            </p>

            <p>
                El envio de <span className="span-white">RST</span> en lugar de <span className="span-white">ACK</span> permite <span className="span-blue">evadir</span> algunos <span className="span-pink">metodos de seguridad</span> y <span className="span-pink">filtrado</span> de puertos. 
            </p>

            <p>
                <span className="span-yellow">Nota:</span> Recordemos que al ejecutar <span className="span-yellow">NMAP</span> con permisos <span className="span-pink">root</span> este es el <span className="span-blue">protocolo utilizado</span> pero si no lo realizar con este usuario, puedes optar por utilizar <span className="span-white">-sS</span>.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Escaneo con protocolo UDP<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Los <span className="span-pink">escaneos</span> por protocolo <span className="span-white">UDP</span> permitien identificar <span className="span-blue">puertos con servicios</span> de protocolo <span className="span-white">UDP</span>.
            </p>

            <p>
                Para realizar este <span className="span-pink">escaneo</span>, basta con ejecutar un comando con el parametro <span className="span-white">-sU</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -sU -p<argumento> <dominio-o-ip>"
            />

            <p>
                Por <span className="span-white">ejemplo</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -sU -p1-100 192.168.0.1"
            />

            <p>
                Donde se <span className="span-blue">escanearan</span> los <span className="span-pink">primeros 100 puertos</span> por medio de protocolo <span className="span-white">UDP</span>.
            </p>

            <p>
                <span className="span-yellow">Nota:</span> Recuerda que <span className="span-yellow">NMAP</span> realiza escaneos por <span className="span-white">TCP</span> y <span className="span-white">TCP/SYN</span> asi que solo podemos <span className="span-pink">encontrar puertos</span> que utilicen <span className="span-white">UDP</span> con ayuda de este parametro <span className="span-white">-sU</span>.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Escaneo para detección de SO<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Tambien <span className="span-yellow">NMAP</span> nos permite <span className="span-pink">(o al menos tratar)</span> identificar el <span className="span-blue">SO</span> del <spans className="span-white">dispositivo</spans> a escanear:
            </p>

            <p>
                Para ello, <span className="span-pink">ejecutamos</span> el <span className="span-white">comando</span> con el parametro <span className="span-white">-O</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -O <dominio-o-ip>"
            />

            <p>
                Un <span className="span-white">ejemplo</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -O 192.168.1"
            />

            <p>
                Este <span className="span-pink">parametro</span> a su vez, va acompañado de otros 2, utiles al momento de escaneo de segmentos de red:
            </p>

            <p>
                <span className="span-white">--osscan-limit</span> <span className="span-blue">-></span> <span className="span-pink">Limita el numero de identificaciones de SO de los dispositivos.</span>
            </p>

            <p>
                <span className="span-white">--osscan-guess</span> <span className="span-blue">-></span> <span className="span-pink">Intenta a toda consta identificar el SO de los dispositivos.</span>
            </p>

            <p>
                Algunos <span className="span-white">ejemplos</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -O --osscan-limit 192.168.0.0/24"
            />

            <p>
                Y:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -O --osscan-guess 192.168.0.0/24"
            />

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Escaneos con velocidad
                <span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                <span className="span-yellow">NMAP</span> permite modificar el <span className="span-pink">tiempo de escaneos</span> y <span className="span-pink">velocidad</span> de estos.
            </p>

            <p>
                Para esto, utilizamos el parametro <span className="span-white">-T</span> acompanado de un argumento que va de <i className="span-white">0</i> a <i className="span-white">5</i>.
            </p>

            <p>
                La sintaxis del <span className="span-pink">comando</span> es la siguiente:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -T<velocidad> <dominio-o-ip>"
            />

            <p>
                Como <span className="span-white">ejemplo</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap -T4 192.168.0.1"
            />

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Escaneos con tiempo
                <span className="span-blue cursor">_</span>
                </span>
            </h3>
            
            <p>
                Tambien podemos obligar a <span className="span-yellow">NMAP</span> a realizar un tiempo maximo para escaneo.
            </p>

            <p>
                Con ayuda del parametro <span className="span-white">--host-timeout</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap --host-timeout <tiempo-maximo> <dominio-o-ip>"
            />

            <p>
                Como <span className="span-white">ejemplo</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap --host-timeout 30m 192.168.0.1"
            />

            <p>
                O:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap --host-timeout 1h 192.168.0.1"
            />

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap --host-timeout 50s 192.168.0.1"
            />

            <p>
                <span className="span-yellow">Nota:</span> Esto es muy util para <span className="span-pink">auditorias</span> o <span className="span-pink">tiempos cortos</span>.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Escaneos con rango de paquetes
                <span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Con ayuda de los parametros <span className="span-white">--min-rate</span> y <span className="span-white">--max-rate</span> podemos <span className="span-pink">personalizar</span> un <span className="span-blue">rango de envio de paquetes</span> entre el escaneo.
            </p>

            <p>
                La <span className="span-white">sintaxis</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap --min-rate <rango-minimo> --max-rate <rango-maximo> <dominio-o-ip>"
            />

            <p>
                Como el <span className="span-white">ejemplo siguiente</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nmap --min-rate 30 --max-rate 300 192.168.0.1"
            />

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue">Exportacion de resultados de escaneos.
                <span className="span-blue cursor">_</span>
                </span>
            </h3>

            {/* <p>
                Para visualizar:
            </p>

            <Img
                img = {Img_One}
                alt = {"Imagen 1. NMAP."}
                title = {"Descripcción de imagen."}
                text = {"1. Lorem ipsum dolor sit, amet consectetur adipisicing."}
            /> */}
        </>
    );
}