import React from "react";
import icon_directory_pink from "./../../sources/icons/icon-directory-pink.svg";
import icon_directory from "./../../sources/icons/icon-directory.svg";

export default function Principal (props) {
    return (
        <>
            <h1>
                Página de <span className="span-pink">información</span> para <span className="span-white">Hacking Ético.<span className="span-white cursor">_</span></span>
            </h1>

            <p>
                <i className="span-white">"Quien quiera paz, que se prepare para la guerra". (Qui desiderat pacem praeparet bellut).</i>
            </p>
            <p>
                <i className="span-white">—Vegecio, siglo IV d.C.</i>
            </p>

            <p>
                <b className="span-yellow">Interpretación General:</b> Para <span className="span-white">mantener</span> un <span className="span-pink">estado de tranquilidad o estabilidad,</span> es necesario estar <span className="span-white">preparado para enfrentar</span> <span className="span-pink">conflictos o
                adversidades.</span> La <span className="span-white">preparación</span> actúa como una forma de <span className="span-white">prevención y disuasión</span> frente a <span className="span-pink">posibles amenazas.</span>
            </p>

            <p>
                <b className="span-yellow">Interpretación en Ciberseguridad:</b> En la <span className="span-yellow">Ciberseguridad</span>, para <span className="span-white">garantizar</span> la protección de los <span className="span-pink">sistemas y datos,</span> es fundamental <span className="span-white">anticiparse</span> a <span className="span-pink">posibles ataques</span> mediante <span className="span-blue">estrategias preventivas, entrenamiento constante, monitoreo activo</span> y <span className="span-blue">planes de respuesta efectivos. </span>La <span className="span-white">preparación</span> es clave para <span className="span-white">evitar o mitigar los daños</span> en un entorno digital lleno de <span className="span-pink">riesgos.</span>
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                <span className="span-pink"> Objetivo.<span className="span-pink cursor">_</span>
                </span>
            </h3>

            <p>
                El contenido de este <span className="span-yellow">sitio web</span> está <span className="span-pink">diseñado</span> para <span className="span-white">personas que deseen profundizar en sus conocimientos</span> teórico-prácticos sobre <span className="span-pink">Ciberseguridad</span>, así como
                para <span className="span-white">quienes no poseen experiencia</span> previa pero tienen <span className="span-pink">interés en el tema.</span>
            </p>

            <p>
                <span className="span-pink">Dentro</span> contenido de este sitio podras encontrar, tanto, <span className="span-white">información</span> sobre <span className="span-blue">conceptos, definiciónes, metodologia del proceso de Hacking Ético, métodos para <span><i className="span-blue">pentesting</i></span></span>, asicomo a su vez, <span className="span-blue">aprendizaje de uso de herramientas practicas</span> para <span className="span-pink">hacking.</span>
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                <span className="span-pink"> Estructura del sitio.<span className="span-pink cursor">_</span>
                </span>
            </h3>

            <p>
                El <span className="span-yellow">sitio</span> esta distribuido en <span className="span-pink">diferentes apartados</span> para su <span className="span-white">aprendizaje</span> y <span className="span-white">navegacíon:</span>
            </p>

            <div className="div-structure">
                <a className="a-structure" onClick={() => props.funcionModulo(1)} href="#start">
                    <h3 className="span-blue" href="#start">
                        <img className="icon-subtitle" src={icon_directory} alt=""/>
                        <span className="span-blue"> Inicio.<span className="span-blue cursor">_</span>
                        </span>
                    </h3>
                </a>

                <a className="a-structure" onClick={() => props.funcionModulo(2)} href="#start">
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory} alt=""/>
                        <span className="span-blue"> Introducción.<span className="span-blue cursor">_</span>
                        </span>
                    </h3>
                </a>

                <a className="a-structure" onClick={() => props.funcionModulo(3)} href="#start">
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory} alt=""/>
                        <span className="span-blue"> Pasos del Hacking.<span className="span-blue cursor">_</span>
                        </span>
                    </h3>
                </a>

                <a className="a-structure" onClick={() => props.funcionModulo(4)} href="#start">
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory} alt=""/>
                        <span className="span-blue">Ataques.<span className="span-blue cursor">_</span>
                        </span>
                    </h3>
                </a>

                <a className="a-structure" onClick={() => props.funcionModulo(5)} href="#start">
                    <h3 className="span-blue">
                        <img className="icon-subtitle" src={icon_directory} alt=""/>
                        <span className="span-blue">Herramientas.<span className="span-blue cursor">_</span>
                        </span>
                    </h3>
                </a>
            </div>

            <p>
                Cada <span className="span-pink">apartado</span> contiene <span className="span-white">información</span> sobre:
            </p>

            <ol className="ol-code">
                <li>
                    <p>
                        <b className="span-blue">Inicio:</b> Información sobre la <span className="span-white">página,</span> tales como <a href="" className="span-yellow">objetivo,</a> <a href="" className="span-yellow">Estructura de sitio</a> e <a href="" className="span-yellow">Información general de sitio.</a>
                    </p>
                </li>

                <li>
                    <p>
                        <b className="span-blue">Introducción:</b> <span className="span-white">Conceptos basicos</span> e <span className="span-white">importantes</span> de la <span className="span-yellow">Ciberseguridad</span>, asi tambien como <span className="span-pink">información</span> para <span className="span-pink">ampliar conocimientos</span> de <i className="span-blue">pentesting.</i>
                    </p>
                </li>

                <li>
                    <p>
                        <b className="span-blue">Pasos del Hacking:</b> <span className="span-white">Información</span> y <span className="span-white">explicación</span> de la <span className="span-pink">métodologia util</span> y <span className="span-pink">pasos</span> para el proceso de <i className="span-blue">Hacking ético.</i>
                    </p>
                </li>

                <li>
                    <p>
                        <b className="span-blue">Ataques:</b> <span className="span-white">Listado,</span> <span className="span-white">explicación</span> y <span className="span-white">funcionamiento</span> de diferentes tipos de <span className="span-pink">vectores de ataques,</span> cada apartado contiene enlaces a hacia las diferentes <b className="span-yellow">Herramientas</b> (del apartado de <span className="span-blue">Herramientas</span>) para cada <span className="span-pink">ataque.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <b className="span-blue">Herramientas:</b> <span className="span-white">Listado,</span> <span className="span-white">recopilación de información</span>  y <span className="span-white">explicación</span> para utilizar <span className="span-pink">diferentes herramientas,</span> incluyendo <span className="span-yellow">comandos,</span> <span className="span-yellow">capturas</span> y <span className="span-yellow">códigos de programación</span> utiles. Estas <span className="span-pink">herramientas</span> son utiles durante alguno o varios de los <i className="span-blue">Pasos del Hacking.</i>
                    </p>
                </li>
            </ol>

            <p className="span-yellow">
                ¡Puedes visitar los apartados en el orden de tu gusto!.
            </p>

            <h3 className="span-blue">
                <img className="icon-subtitle" src={icon_directory_pink} alt=""/>
                <span className="span-pink"> Información General de sitio.<span className="span-pink cursor">_</span></span>
            </h3>

            <p>
                Este <span className="span-yellow">sitio</span> esta desarrollado son la finalidad de <span className="span-white">ayudar a personas</span> que deseen <span className="span-pink">adquirir nuevos conocimientos</span> en el ambito de la <i className="span-yellow">Ciberseguridad</i> y el <i className="span-yellow">Hacking Ético</i>. La visualización de esta pagina el <span className="span-blue">gratuita,</span> <span className="span-blue">NO requiere permisos</span> de usos <span className="span-pink">externos,</span> <span className="span-blue">NI almacena información</span> sobre los <span className="span-pink">visitantes,</span> asi como tambien, esta página fue <span className="span-white">desarrollada</span> y <span className="span-white">desplegada</span> <span className="span-blue">SIN fines de lucro.</span>
            </p>

            <p className="span-pink">
                Espero que esta información sea util para su aprendizaje y conocimiento.
            </p>

            <p>
                <i className="span-white">— Responable de sitio: Samuel Dzib López (DZEL). Diseñador, desarrollador e información.</i>
            </p>

            <hr className="cursor"/>
        </>
    );
}