import React from "react";

//Ataques
import Phishing from "./attacks/Phishing";
import DDoSYDoS from "./attacks/DDoSYDoS";
import SQLInjection from "./attacks/SQLInjection";
import FuerzaBruta from "./attacks/FuerzaBruta";
import Ransomware from "./attacks/Ransomware";
import ManInTheMiddle from "./attacks/ManInTheMiddle";
import Malware from "./attacks/Malware";
import XSS from "./attacks/XSS";

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

            <Phishing/>

            <DDoSYDoS/>

            <SQLInjection/>

            <FuerzaBruta/>

            <Ransomware/>

            <ManInTheMiddle/>

            <Malware/>

            <XSS/>

            <p>
            </p>

            <p>
                Existen muchos más <span className="span-pink">tipos de ataques,</span> pero aqui se encuentran los <span className="span-white">principales.</span>
            </p>

            <hr  className="cursor"></hr>

        </>
    );
}