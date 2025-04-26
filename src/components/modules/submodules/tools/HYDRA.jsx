import React from "react";

import Comand from "../../../Comand";
import Img from "../../../Img";

//Imagenes
import Img_One from "./../../../../sources/imgs/HYDRA/HYDRA_01.png";
import Img_Two from "./../../../../sources/imgs/HYDRA/HYDRA_03.png";
import Img_Three from "./../../../../sources/imgs/HYDRA/HYDRA_02.png";
import Img_Four from "./../../../../sources/imgs/HYDRA/HYDRA_06.png";
import Img_Five from "./../../../../sources/imgs/HYDRA/HYDRA_04.png";
import Img_Six from "./../../../../sources/imgs/HYDRA/HYDRA_05.png";
import Img_Seven from "./../../../../sources/imgs/HYDRA/HYDRA_07.png";
import Img_Eight from "./../../../../sources/imgs/HYDRA/HYDRA_08.png";



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
                <span className="span-blue">Diccionarios.<span className="span-blue cursor">_</span>
                </span>
            </h3>

            <p>
                <span className="span-yellow">Kali Linux</span> contiene un <span className="span-white">directorio</span> donde contiene <span className="span-pink">diccionarios</span> y <span className="span-pink">listas de palabras</span> en formato <span className="span-white">.txt</span>, para utilizar cuando se necesite:
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "cd /usr/share/wordlists/"
            />

            <p>
                Entre ellos, se <span className="span-pink">encuentra</span> el archivo <span className="span-white">rockyou.txt</span>, uno de los <span className="span-pink">diccionarios</span> más <span className="span-white">famosos</span> y <span className="span-white">utilizados</span>.
            </p>

            <Img
                img = {Img_Five}
                alt = {"Imagen 4. Diccionarios y listas de palabras."}
                title = {"Descripcción de imagen."}
                text = {"4. Diccionarios y listas de palabras."}
            />

            <p>
                <span className="span-yellow">Nota:</span> Podemos <span className="span-pink">crear nuestros propios diccionarios</span>, creando un <span className="span-white">archivo nuevo</span> y <span className="span-white">colocando las palabras</span>.
            </p>

            <p>
                Tambien podemos <span className="span-white">buscar alguna palabra</span> dentro de un <span className="span white">diccionario</span>, con ayuda del <span className="span-white">comando</span>:
            </p>
            
            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "cat <diccionario> | grep <palabra>"
            />

            <p>
                Como <span className="span-white">ejemplo</span>:
            </p>
            
            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "cat rockyou.txt | grep admin"
            />

            <p>
                De la siguiente manera:
            </p>

            <Img
                img = {Img_Six}
                alt = {"Imagen 5. Busqueda de palabras en listas y diccionarios"}
                title = {"Descripcción de imagen."}
                text = {"5. Busqueda de palabras en listas y diccionarios."}
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
                code = "hydra -l <usuario> -P <diccionario> -s <puerto> ftp://<objetivo>"
            />

            <p>
                <span className="span-white">Ejemplo:</span>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "hydra -l msfadmin -P /usr/share/wordlists/rockyou.txt -s 21 ftp://192.168.0.105"
            />

            <p>
                Donde:
            </p>

            <ul className="ol-code">
                <li>
                    <p>
                        <span className="span-white">-l msfadmin</span> <span className="span-blue">-></span> <span className="span-pink">Intentará autenticarse con el usuario <span className="span-white">admin</span>.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">-P /usr/share/wordlists/rockyou.txt</span> <span className="span-blue">-></span> <span className="span-pink">Utilizará una <span className="span-white">lista de contraseñas</span> (con su ruta).</span>
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">-s 21</span> <span className="span-blue">-></span> <span className="span-pink">Ataque a servicio corriendo en puerto: <span className="span-white">21</span></span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">ftp://192.168.0.105</span> <span className="span-blue">-></span> <span className="span-pink">Dirección IP del <span className="span-white">servidor</span> y ataque de servicio <span className="span-white">FTP</span></span>.
                    </p>
                </li>
            </ul>

            <p>Realizandose:</p>

            <Img
                img = {Img_Seven}
                alt = {"Imagen 6. Busqueda de palabras en listas y diccionarios"}
                title = {"Descripcción de imagen."}
                text = {"6. Ataque FTP."}
            />

            <p>
                <b className="span-blue">2. Ataques SSH:</b>
            </p>

            <p>Si planeamos atacar un servicio <span className="span-white">SSH</span>, la sintaxis seria algo similar a:</p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "hydra -L <diccionario> -P <diccionario> -s <puerto> ssh://<objetivo>"
            />

            <p>
                <span className="span-white">Ejemplo:</span>
            </p>

            <Comand
                funcionNotificacion = {props.funcionNotificacion}
                notifications = {props.notifications}
                code = "hydra -L usuarios.txt -P claves.txt -s 22 ftp://192.168.0.105"
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
                        <span className="span-white">-s 22</span> <span className="span-blue">-></span> <span className="span-pink">Ataque a servicio corriendo en puerto: <span className="span-white">22</span></span>.
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
                code={`hydra -l <usuario> -P <diccionario> -s <puerto> <protocolo>://<objetivo><direccion-pagina-web>:'<consulta>':'<texto-error>'`}
            />

            <p>
                Para este tipo de <span className="span-pink">ataques HTTP</span>, necesitaremos la ayuda de la herramienta <span className="span-white">Burp Suite</span>, para capturar <span className="span-pink">peticiones HTTP</span> del navegador.
            </p>

            <p>
                Como el <span className="span-white">siguiente ejemplo</span>:
            </p>

            <Img
                img = {Img_Four}
                alt = {"Imagen 7. Captura de petición con Burp Suite."}
                title = {"Descripcción de imagen."}
                text = {"7. Captura de petición con Burp Suite."}
            />

            <p>Donde podemos obtener los siguientes <span className="span-white">datos utiles</span>:</p>

            <ul className="ol-code">
                <li>
                    <p>
                        <span className="span-white">&lt;Puerto&gt;</span> <span className="span-blue">-></span> <span className="span-pink">Basandonos del escaneo de objetivo, obtenemos este dato</span>. En nuestro caso es: <span className="span-white">80</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;Protocolo&gt;</span> <span className="span-blue">-></span> <span className="span-pink">El método es: POST</span> Debido a eso, colocamos: <span className="span-white">http-post-form</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;Objetivo&gt;</span> <span className="span-blue">-></span> <span className="span-pink">La IP del objetivo es: </span><span className="span-white">192.168.0.105</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;Direccion-pagina-web&gt;</span> <span className="span-blue">-></span> <span className="span-pink">La dirección de la pagina web, donde es encuentra el formulario es: </span><span className="span-white">/dvwa/login.php</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;Consulta&gt;</span> <span className="span-blue">-></span> <span className="span-pink">La consulta dentro de la petición es: username=canario&password=canario&Login=Login</span>. De esta manera, colocamos <span className="span-white">username=^USER^&password=^PASS^&Login=Login</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">&lt;Texto-error&gt;</span> <span className="span-blue">-></span> <span className="span-pink">El texto de error que aparece en el form es: </span><span className="span-white">Login failed</span>.
                    </p>
                </li>
            </ul>

            <p>
                <span className="span-white">Quedando el comando final:</span>
            </p>

            <Comand
                funcionNotificacion={props.funcionNotificacion}
                notifications={props.notifications}
                code={`hydra -l admin -P /usr/share/wordlists/rockyou.txt -s 80 http-post-form://192.168.0.105/dvwa/login.php:'username=^USER^&password=^PASS^&Login=Login':'Login failed'`}
             />


            <p>
                Donde:
            </p>

            <ul className="ol-code">
                <li>
                    <p>
                        <span className="span-white">-l admin</span> <span className="span-blue">-></span> <span className="span-pink">Utilizará como usuario <span className="span-white">admin</span></span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">-P /usr/share/wordlists/rockyou.txt</span> <span className="span-blue">-></span> <span className="span-pink">Utilizará el diccionario <span className="span-white">rockyou.txt</span>, ubicado en <span className="span-white">/usr/share/wordlists/rockyou.txt</span> como lista de <span className="span-white">contraseñas</span></span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">-s 80</span> <span className="span-blue">-></span> <span className="span-pink">Realizará el ataque buscando en el puerto <span className="span-white">80</span></span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">http-post-form</span> <span className="span-blue">-></span> <span className="span-pink">Indica que la petición se realiza en método <span className="span-white">POST</span></span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">//192.168.0.105/dvwa/login.php</span> <span className="span-blue">-></span> <span className="span-pink">Indica la dirección del formulario al cual atacar</span>.
                    </p>
                </li>

                <li>
                    <p>
                        <span className="span-white">'username=^USER^&password=^PASS^&Login=Login':'Login failed'</span> <span className="span-blue">-></span> <span className="span-pink">Indica los parametros y variables necesarios</span>.
                    </p>
                </li>
            </ul>

            <p>
                Realizando el ataque:
            </p>

            <Img
                img = {Img_Eight}
                alt = {"Imagen 8. Obtención de credenciales de formulario con Hydra."}
                title = {"Descripcción de imagen."}
                text = {"8. Obtención de credenciales de formulario con Hydra."}
            />

            <p>
                <span className="span-yellow">Nota:</span> Donde obtenemos que la contreña encontrada es <span className="span-white">password</span>.
            </p>
        </>
    );
}