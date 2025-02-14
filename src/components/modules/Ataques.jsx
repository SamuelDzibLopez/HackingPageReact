import React from "react";
import icon_directory_pink from "./../../sources/icons/icon-directory-pink.svg";
import icon_directory from "./../../sources/icons/icon-directory.svg";

export default function Ataques () {
    return (
        <>
            <h2 id="ataques" className="span-blue">
                <img className="icon-title-two" src={icon_directory} alt=""/><span
                    className="span-blue">Ataques.<span className="span-blue cursor">_</span>
                </span>
            </h2>

            <p>
                Existen <span className="span-yellow">diversos tipos de ataques cibernéticos,</span> cada uno con <span className="span-pink">características específicas</span> y <span className="span-pink">objetivos distintos.</span>
            </p>

            <p>
                Estas <span className="span-white">amenazas</span> comprometen
                <span className="span-blue">datos, sistemas</span> y <span className="span-blue">operaciones.</span> En esta <span className="span-pink">sección</span> se describen las <span className="span-blue">categorías de ataques, cómo operan</span> y los
                <span className="span-blue">métodos</span> que los <span className="span-pink">atacantes</span> emplean para llevarlos a cabo.
            </p>

            <p>
                A <span className="span-white">continuacion,</span> muestra la <span className="span-white">lista</span> de los <span className="span-pink">diferentes tipos</span> de <span className="span-pink">ataques:</span>
            </p>

            <div className="div-structure-row">
                <a href="#phishing" className="a-structure">
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory} alt=""/>
                        <span className="span-blue"> Phishing.<span className="span-blue cursor">_</span>
                        </span>
                    </h3>
                </a>

                <a href="#DDoSyDoS" className="a-structure">
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory} alt=""/>
                        <span className="span-blue">DoS y DDoS.<span className="span-blue cursor">_</span>
                        </span>
                    </h3>
                </a>

                <a href="#SQLInjection" className="a-structure">
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory} alt=""/>
                        <span className="span-blue">SQL Injection.<span className="span-blue cursor">_</span>
                        </span>
                    </h3>
                </a>

                <a href="#fuerzaBruta" className="a-structure">
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory} alt=""/>
                        <span className="span-blue">Fuerza Bruta.<span className="span-blue cursor">_</span>
                        </span>
                    </h3>
                </a>

                <a href="#ransomware" className="a-structure">
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory} alt=""/>
                        <span className="span-blue">Ransomware.<span className="span-blue cursor">_</span>
                        </span>
                    </h3>
                </a>

                <a href="#mintm" className="a-structure">
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory} alt=""/>
                        <span className="span-blue">Man-in-the-Middle.<span className="span-blue cursor">_</span>
                        </span>
                    </h3>
                </a>

                <a href="#malware" className="a-structure">
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory} alt=""/>
                        <span className="span-blue">Malware.<span className="span-blue cursor">_</span>
                        </span>
                    </h3>
                </a>

                <a href="#xss" className="a-structure">
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory} alt=""/>
                        <span className="span-blue">XSS.<span className="span-blue cursor">_</span>
                        </span>
                    </h3>
                </a>
            </div>

            <p>
                A <span className="span-white">continuación</span>, se describe <span className="span-pink">información</span> de cada uno de los <span className="span-pink">ataques</span> listados:
            </p>


            <h3 className="span-blue" id="phishing">
                <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                <span className="span-pink"> Phishing.<span className="span-pink cursor">_</span>
                </span>
            </h3>
            
            <p>
                Uso de <span className="span-blue">correos electrónicos, mensajes falsificados</span> u <span className="span-blue">otro medio</span> para <span className="span-pink">engañar</span> a las víctimas y <span className="span-white">obtener credenciales</span> o <span className="span-white">datos
                sensibles.</span>
            </p>

            <p>
                <b className="span-yellow">Herramientas:</b> <a href="#" className="span-blue">Zphisher.</a>
            </p>


            <h3 className="span-blue" id="DDoSyDoS">
                <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                <span className="span-pink"> Denegación de Servicios (DoS y DDoS).<span className="span-pink cursor">_</span>
                </span>
            </h3>
            
            <p>
                <span className="span-pink">Saturación</span> de un <span className="span-blue">servidor, red</span> o <span className="span-blue">sistema</span> con <span className="span-white">tráfico masivo</span> para hacerlo <span className="span-pink">inoperativo.</span> Ya sea desde <span className="span-yellow">un solo dispositivo atacante (DoS)</span> o <span className="span-yellow">varios (DDoS).</span>
            </p>
            
            <p>
                <b className="span-yellow">Herramientas:</b> <a href="#" className="span-blue">Metasploit</a>, <a href="#" className="span-blue">Hping3</a>, <a href="#" className="span-blue">Slowloris.</a>
            </p>
        </>
    );
}