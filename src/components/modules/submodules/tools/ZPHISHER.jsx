import React from "react";

import Comand from "../../../Comand";
import Img from "../../../Img";

//Imagenes
import Img_One from "./../../../../sources/imgs/ZPHISHER/ZPHISHER_01.png";
import Img_Two from "./../../../../sources/imgs/ZPHISHER/ZPHISHER_02.png";
import Img_Three from "./../../../../sources/imgs/ZPHISHER/ZPHISHER_03.png";
import Img_Four from "./../../../../sources/imgs/ZPHISHER/ZPHISHER_04.png";
import Img_Five from "./../../../../sources/imgs/ZPHISHER/ZPHISHER_05.png";
import Img_Six from "./../../../../sources/imgs/ZPHISHER/ZPHISHER_06.png";
import Img_Seven from "./../../../../sources/imgs/ZPHISHER/ZPHISHER_07.png";


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
                <span className="span-yellow">Zphisher</span> es una <span className="span-pink">herramienta</span> de <span className="span-white">código abierto</span> utilizada para realizar <span className="span-pink">ataques de phishing</span> simulados. Está diseñada para facilitar <span className="span-white">pruebas de ingeniería social</span> en <span className="span-blue">entornos educativos</span>, de <span className="span-blue">auditoría</span> o <span className="span-blue">pentesting ético</span>, con el fin de <span className="span-blue">concienciar</span> a los usuarios sobre la <span className="span-white">seguridad informática</span>.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Caracteristicas de ZPHISHER.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                La herramienta de <span className="span-yellow">Zphisher</span> contiene caracteristicas las cuales facilitan y permiten realizar multiples y personalizados ataques:
            </p>

            <p>
                Las caracteristicas de <span className="span-yellow">Zphisher</span>:
            </p>

            <ul className="ol-code">
                <li>
                    <p>
                        La herramienta funciona por <span className="span-pink">medio de interfaz de línea de comandos</span> (CLI).
                    </p>
                </li>
                <li>
                    <p>
                    Contiene <span className="span-pink">plantillas predefinidas de phishing</span> para sitios populares como:
                        <span className="span-blue">Facebook</span>, <span className="span-blue">Instagram</span>, <span className="span-blue">Gmail</span>, <span className="span-blue">LinkedIn</span>, <span className="span-blue">Netflix</span> o <span className="span-blue">PayPal</span>.
                    </p>
                </li>
                <li>
                    <p>
                        Soporte para <span className="span-pink">tunelización</span> con <span className="span-blue">ngrok</span>, <span className="span-blue">localhost.run</span> y <span className="span-blue">serveo</span>.
                    </p>
                </li>
                <li>
                    <p>
                        <span className="span-white">Capacidad de recopilar credenciales</span> (simuladas).
                    </p>
                </li>
            </ul>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Instalación de ZPHISHER.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                <span className="span-yellow">Zphisher</span> es una <span className="span-pink">herramienta</span> que debemos <span className="span-white">descargar</span>, veamos los <span className="span-blue">pasos</span>:
            </p>

            <p>
                <b className="span-blue">
                    1. Clonar repositorio de zphisher de GitHub.
                </b>
            </p>

            <p>
                Debemos <span className="span-white">clonar el repositorio</span> de la <span className="span-pink">herramienta</span> desde <span className="span-white">github</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "git clone https://github.com/htr-tech/zphisher.git"
            />

            <p>
                <span className="span-yellow">Nota:</span> Puedes <span className="span-white">clonar el repositorio</span> en un <span className="span-pink">directorio</span> de preferencia.
            </p>

            <p>
                <b className="span-blue">
                    2. Acceder al directorio clonado.
                </b>
            </p>

            <p>
                <span className="span-pink">Ingresar</span> al <span className="span-white">Ingresar</span> de la <span className="span-pink">herramienta</span>.
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "cd zphisher"
            />

<p>
                <b className="span-blue">
                    3. Dar permisos de ejecución.
                </b>
            </p>

            <p>
                Debemos <span className="span-white">dar permisos de ejecución</span> a la <span className="span-blue">herramienta</span> y <span className="span-blue">archivos</span>.
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "chmod +x *"
            />

            <p>
                Imagen de <span className="span-white">ejemplo</span>:
            </p>

            <Img
                img = {Img_One}
                alt = {"Imagen 1. ZPHISHER."}
                title = {"Descripcción de imagen."}
                text = {"1. Instalación de ZPHISHER."}
            />

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Ejecución de ZPHISHER.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Para la <span className="span-white">ejecución</span> de la <span className="span-pink">herramienta</span> <span className="span-yellow">Zphisher</span>, debemos ejecutar el <span className="span-pink">script</span> <i className="span-white">zphisher.sh</i>, con el siguiente <span className="span-pink">comando</span>: 
            </p>
            
            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "./zphisher.sh"
            />

            <p>Veamos:</p>

            <Img
                img = {Img_Two}
                alt = {"Imagen 2. ZPHISHER."}
                title = {"Descripcción de imagen."}
                text = {"2. Ejecución de ZPHISHER."}
            />

            <p>
                Si es la <span className="span-white">primera ocasion de ejecución</span>, se <span className="span-pink">instalaran otros herramientas</span> necesarias para su <span className="span-pink">ejecución</span>.
            </p>

            <p>
                <span className="span-yellow">Nota:</span> Para la <span className="span-pink">ejecución</span>, debemos haber ejecutado el <span className="span-white">paso 3</span> de la instalación.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Uso de ZPHISHER.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                El <span className="span-white">uso de la herramienta</span> es <span className="span-pink">intiude</span> la herramienta, veamos los <span className="span-white">pasos</span>:
            </p>

            <p>
                <b className="span-blue">
                    1. Seleccionar una plantilla de phishing.
                </b>
            </p>

            <p>
                Debemos <span className="span-white">elegir</span> una <span className="span-pink">plantilla</span> a nuestra <span className="span-blue">elección</span> o <span className="span-blue">aplicación</span> a nuestro caso.
            </p>

            <p>
                Debemos <span className="span-white">colocar</span> el <span className="span-pink">numero de la plantilla</span> elegida.
            </p>

            <Img
                img = {Img_Three}
                alt = {"Imagen 3. ZPHISHER."}
                title = {"Descripcción de imagen."}
                text = {"3. Elección de plantilla de ZPHISHER."}
            />

            <p>
                En nuestro <span className="span-pink">ejemplo</span> elegiremos la plantilla de <i className="span-white">Google</i>, por los que colocaremos el <i className="span-white">03</i>.
            </p>

            <p>
                <b className="span-blue">
                    2. Elegir una método de tunelización.
                </b>
            </p>

            <p>
                <span className="span-pink">Elegimos</span> un <span className="span-white">tipo de método</span> por el cual se desplegará el <span className="span-pink">ataque</span>.
            </p>

            <Img
                img = {Img_Four}
                alt = {"Imagen 4. ZPHISHER."}
                title = {"Descripcción de imagen."}
                text = {"4. Elección de tunelización de ZPHISHER."}
            />

            <p>
                Donde:
            </p>

            <ol className="ol-code">
                <li>
                    <p>
                        <span className="span-white">[01] Localhost</span> <span className="span-blue">-> </span> <span className="span-pink">Solo ejecuta el sitio de phishing en tu propia máquina.Donde solo tú puedes verlo desde http://localhost o 127.0.0.1.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">[02] Cloudflared</span> <span className="span-blue">-> </span> <span className="span-pink">Usa el servicio de túneles de Cloudflare para exponer tu servidor local a través de un enlace web seguro (HTTPS).Accesible desde internet, con un enlace tipo https://random-subdomain.trycloudflare.com.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">[03] LocalXpose</span> <span className="span-blue">-> </span> <span className="span-pink">Utiliza LocalXpose, una plataforma de tunelización como Ngrok, pero con un límite gratuito de 15 minutos por sesión.</span>
                    </p>
                </li>
            </ol>

            <p>
                <span className="span-yellow">Nota:</span> Tambien podemos <span className="span-pink">configurar un puerto en especifico</span>, por si deseamos una <span className="span-white">configuración personalizada</span>, colocando un <i className="span-white">Y/N</i>.
            </p>

            <p>
                Para el <span className="span-pink">ejemplo</span> elegiremos la opción <i className="span-white">02</i> con el <i className="span-white">puerto default (8080)</i>.
            </p>

            <p>
                <b className="span-blue">
                    3. Obtención de URL maliciosa.
                </b>
            </p>

            <p>
                Despues de <span className="span-white">terminar las configuraciones necesarias</span>, <span className="span-yellow">Zphisher</span> nos devolverá una <span className="span-blue">lista de URLs</span> las cuales, podremos <span className="span-pink">utilizar</span> para <span className="span-white">realizar el ataque</span>.
            </p>

            <p>
                En nuestro <span className="span-pink">ejemplo</span>:
            </p>

            <Img
                img = {Img_Five}
                alt = {"Imagen 5. ZPHISHER."}
                title = {"Descripcción de imagen."}
                text = {"5. Obtención de URL maliciosa con ZPHISHER."}
            />

            <p>
                Solo queda <span className="span-white">enviar el enlace</span> a una <span className="span-pink">victima</span> y <span className="span-blue">esperar</span>.
            </p>

            <p>
                <b className="span-blue">
                    4. Obtener credenciales de victima.
                </b>
            </p>

            <p>
                Una vez <span className="span-blue">alguna victima</span> o <span className="span-blue">varias</span> <span className="span-pink">inicien sesión</span> en nuestro panel falso de <span className="span-yellow">phishing</span>, obtendremos sus <span className="span-white">credenciales visibles</span> desde nuestra <span className="span-pink">terminal de la herramienta</span>.
            </p>

            <p>
                Veamos el <span className="span-pink">ejemplo</span>:
            </p>

            <Img
                img = {Img_Six}
                alt = {"Imagen 5. ZPHISHER."}
                title = {"Descripcción de imagen."}
                text = {"6. Obtención de credenciales de victima."}
            />

            <p>
                <span className="span-yellow">Nota:</span> Una vez <span className="span-pink">capturado</span> y <span className="span-pink">enviado</span> el formulario, a nuestra victima se le <span className="span-white">rediriguira al verdadero login</span> de la app desde <span className="span-pink">internet</span>.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory} alt=""/>
                <span className="span-blue"> Almacenamiento de credenciales.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                Tanto las <span className="span-blue">credenciales</span> como las <span className="span-blue">IPs obtenidas</span> se almacenan dentro del <span className="span-white">directorio interno</span> de la <span className="span-pink">herramienta</span>, llamado <i className="span-white">auth</i>.
            </p>

            <p>
                Podemos acceder con:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "cd auth"
            />

            <p>
                Dentro de este <span className="span-pink">directorio</span> se encuentran <span className="span-white">2 archivos</span>:
            </p>

            <ol className="ol-code">
                <li>
                    <p>
                        <span className="span-white">ip.txt</span> <span className="span-blue">-> </span> <span className="span-pink">Almacena las IPs que han accedido a la URL maliciosa</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">usernames.dat</span> <span className="span-blue">-> </span> <span className="span-pink">Almacena las credenciales capturadas</span>.
                    </p>
                </li>
            </ol>

            <p>
                Veamos:
            </p>

            <Img
                img = {Img_Seven}
                alt = {"Imagen 5. ZPHISHER."}
                title = {"Descripcción de imagen."}
                text = {"6. Obtención de credenciales de victima."}
            />

            <p>
                Para <span className="span-pink">visualizar</span> el <span className="span-white">contenido de los archivos</span>:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nano ip.txt"
            />

            <p>
                O:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "nano usernames.dat"
            />

            <p>
                <span className="span-yellow">Nota:</span> De este modo, se <span className="span-pink">almacenan</span> los <span className="span-white">datos obtenidos</span>.
            </p>













        </>
    );
}