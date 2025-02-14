import React from "react";
import icon_directory_pink from "./../../sources/icons/icon-directory-pink.svg";
import icon_directory from "./../../sources/icons/icon-directory.svg";

export default function PasosHacking () {
    return (
        <>
            <h2 id="pasosHacking" className="span-blue">
                <img className="icon-title-two" src={icon_directory} alt=""/><span
                className="span-blue">Pasos del Hacking.<span className="span-blue cursor">_</span></span>
            </h2>

            <p>
                El <span className="span-yellow">hacking ético</span> es una <span className="span-white">práctica legítima</span> y <span className="span-white">autorizada</span> cuyo objetivo es <span className="span-blue">evaluarla seguridad</span> de <span className="span-pink">sistemas, redes</span> o
                <span className="span-pink">aplicaciones</span> mediante la <span className="span-white">simulación</span> de posibles <span className="span-pink">ataques cibernéticos.</span>
            </p>

            <p>
                A diferencia de los <span className="span-pink">hackers malintencionados,</span> conocidos como <i className="span-white">black hat hackers,</i> los <span className="span-white">hackers éticos</span> trabajan dentro de
                los <span className="span-white">límites legales</span> y <span className="span-white">éticos,</span> con el propósito de <span className="span-blue">identificar</span> y <span className="span-blue">solucionar vulnerabilidades</span> antes de que sean <span className="span-white">explotadas</span>
                por <span className="span-pink">actores maliciosos.</span>
            </p>

            <p>
                El <span className="span-yellow">proceso</span> de <span className="span-white">hacking ético</span> sigue una <span className="span-pink">metodología estructurada</span> y <span className="span-pink">aprobada</span> similar a la utilizada por <span className="span-white">atacantes reales,</span>
                pero con fines <span className="span-pink">constructivos.</span>
            </p>

            <p>
                A <span className="span-white">continuación</span>, se describen las <span className="span-pink">fases</span> del <span className="span-yellow">proceso de hacking ético,</span> cada una de las cuales juega un papel
                crucial en la <span className="span-white">identificación</span> y <span className="span-white">mitigación</span> de <span className="span-pink">riesgos:</span>
            </p>

            <ol className="ol-code">
                <li>
                    <p>
                        <b className="span-yellow">Fase de Reconocimiento:</b> Esta es la <span className="span-white">etapa inicial,</span> donde se <span className="span-pink">recopila</span> toda la <span className="span-pink">información posible</span> sobre el <span className="span-white">objetivo</span>. Se identifican
                        <span className="span-blue">redes, sistemas, aplicaciones, usuarios</span> y posibles <span className="span-blue">puntos de entrada.</span> El <span className="span-white">objetivo</span> es <span className="span-pink">conocer al máximo</span> el <span className="span-pink">entorno objetivo</span> para <span className="span-white">planificar los siguientes pasos.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <b className="span-yellow">Fase de Escaneo y Enumeración:</b> En esta <span className="span-white">segunda fase</span> se realiza un <span className="span-white">análisis más detallado</span> para <span className="span-pink">identificar vulnerabilidades específicas</span> en los <span className="span-blue">sistemas</span> y <span className="span-blue">redes.</span> El <span className="span-white">objetivo</span> es <span className="span-pink">encontrar puntos débiles</span> que puedan ser <span className="span-white">explotados.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <b className="span-yellow">Fase de Acceso Inicial:</b> En esta <span className="span-white">etapa,</span> se intenta <span className="span-pink">explotar las vulnerabilidades encontradas</span> para obtener <span className="span-white">acceso no autorizado</span> al
                        <span className="span-blue">sistema</span> o <span className="span-blue">red.</span> El <span className="span-white">objetivo</span> de esta fase es <span className="span-blue">acceder</span> y <span className="span-blue">demostrar</span> las <span className="span-pink">vulnerabilidades</span> permiten <span className="span-pink">comprometer el sistema.</span>
                    </p> 
                </li>

                <li>
                    <p>
                        <b className="span-yellow">Fase Mantenimiento de Acceso y Escalada de Privilegios:</b> Una vez logrado el <span className="span-white">acceso inicial</span>, en <span className="span-white">esta etapa</span> se evalúa si es posible <span className="span-pink">mantener ese acceso</span> e incluso <span className="span-pink">escalar a mejores privilegios.</span> Esto
                        ayuda a simular cómo un <span className="span-pink">atacante</span> podría establecer una <span className="span-white">presencia prolongada</span> en el <span className="span-blue">sistema.</span> El <span className="span-white">objetivo</span> es simular si existe la <span className="span-pink">posibilidad</span> y <span className="span-pink">limites</span> que un <span className="span-white">atacante</span> pueda <span className="span-pink">operar sin ser detectado.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <b className="span-yellow">Fase de Cobertura de Huellas:</b> En esta <span className="span-white">ultima fase,</span> se <span className="span-pink">simula</span> cómo un <span className="span-white">atacante</span> podría <span className="span-pink">ocultar sus actividades</span> para <span className="span-pink">evitar ser detectado.</span> Esto incluye <span className="span-blue">eliminar
                        registros</span> y <span className="span-blue">rastros</span> que podrían <span className="span-pink">delatar</span> sus <span className="span-pink">acciones</span> y <span className="span-pink">participación.</span>. El <span className="span-white">objetivo</span> es <span className="span-pink">evaluar</span> la <span className="span-blue">capacidad de detección</span> de <span className="span-blue">incidentes del sistema.</span>
                    </p> 
                </li>
            </ol>

            <p>
                Las <span className="span-yellow">fases del hacking ético</span> son un <span className="span-white">proceso clave</span> para <span className="span-pink">identificar</span> y <span className="span-pink">solucionar vulnerabilidades</span> en <span className="span-blue">sistemas, redes</span> y <span className="span-blue">aplicaciones.</span> Al seguir una <span className="span-white">metodología estructurada,</span> se pueden <span className="span-blue">simular ataques reales, proponer mejoras</span> y <span className="span-blue">fortalecer la seguridad</span> de manera proactiva, <span className="span-white">contribuyendo</span> a un entorno digital más <span className="span-pink">protegido</span> y <span className="span-pink">confiable.</span>
            </p>

            <hr className="cursor"/>
        </>
    );
}