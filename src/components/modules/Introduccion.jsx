import React from "react";
import icon_directory_pink from "./../../sources/icons/icon-directory-pink.svg";
import icon_directory from "./../../sources/icons/icon-directory.svg";

export default function Introduccion () {
    return (
        <>
            <h2 id="introduccion" className="span-blue">
                <img className="icon-title-two" src={icon_directory} alt=""/><span className="span-blue">Introducción.<span className="span-blue cursor">_</span></span>
            </h2>

            <p>
                En un <span className="span-yellow">mundo</span> cada vez más <span className="span-pink">conectado,</span> la <span className="span-pink">seguridad digital</span> se ha convertido en una <span className="span-white">preocupación central.</span> Cada día,
                <span className="span-blue">personas</span> y <span className="span-blue">organizaciones</span> enfrentan <span className="span-pink">riesgos</span> relacionados con el uso de la <span className="span-white">tecnología,</span> desde el <span className="span-pink">robo de datos </span>hasta la
                <span className="span-pink">interrupción de servicios esenciales.</span> <span className="span-yellow">Proteger la información</span> y <span className="span-yellow">garantizar la confianza</span>  en los <span className="span-pink">sistemas digitales</span> son
                desafíos <span className="span-white">fundamentales</span> en la actualidad.
            </p>

            <p>
                A medida que la <span className="span-pink">tecnología avanza,</span> también lo hacen las formas en que puede ser utilizada de manera <span className="span-pink">malintencionada</span>.
                Desde <span className="span-white">correos engañosos</span> hasta <span className="span-white">ataques complejos</span> dirigidos a sistemas críticos, los <span className="span-pink">riesgos</span> son tan variados como las <span className="span-yellow">herramientas</span> que tenemos para <span className="span-blue">prevenirlos.</span> Ante esta realidad, surge la necesidad de comprender cómo funcionan estos <span className="span-pink">riesgos</span> y qué medidas pueden tomarse para protegernos en un entorno digital en constante evolución.
            </p>

            <p>
                Solo entendiendo las <span className="span-pink">amenazas</span> y el <span className="span-pink">impacto</span> que pueden generar, es posible <span className="span-white">desarrollar estrategias efectivas</span> para <span className="span-white">reducir</span> los <span className="span-pink">riesgos</span> y <span className="span-pink">garantizar</span> un <span className="span-white">entorno más seguro</span> tanto para <span className="span-blue">individuos</span> como para <span className="span-blue">organizaciones.</span>
            </p>

            <p>
                Para entender <span className="span-pink">mejor,</span> aprendamos algunos <span className="span-white">conceptos basicos</span> y <span className="span-white">conocidos</span> en el ambito de la <span className="span-yellow">Ciberseguridad.</span>
            </p>

            <ul className="ol-code">
                <li>
                    <p>
                        <b className="span-yellow">Ciberseguridad:</b> Es la <span className="span-yellow">práctica</span> de <span className="span-white">proteger sistemas, redes</span> y <span className="span-white">datos</span> frente a <span className="span-pink">accesos no autorizados, ataques maliciosos </span>
                        o <span className="span-pink">daños.</span> Su <span className="span-blue">objetivo principal</span> es <span className="span-pink">garantizar</span> la <span className="span-white">confidencialidad, integridad</span> y <span className="span-white">disponibilidad</span> de la información, <span className="span-blue">previniendo amenazas</span> que provienen del entorno digital.
                    </p>
                </li>

                <li>
                    <p>
                        <b className="span-yellow">Hacker Ético:</b> Un <i className="span-yellow">hacker ético</i> es un <span className="span-white">profesional autorizado</span> que utiliza las mismas <span className="span-blue">herramientas</span> y <span className="span-blue">técnicas</span> que un <span className="span-pink">atacante
                        malintencionado,</span> pero con el <span className="span-yellow">propósito</span> de <span className="span-white">identificar</span> y <span className="span-white">corregir vulnerabilidades</span> en <span className="span-pink">sistemas</span> o <span className="span-pink">redes.</span> Su trabajo se
                        realiza dentro de un <span className="span-blue">marco legal</span> y <span className="span-blue">ético,</span> y busca <span className="span-yellow">mejorar la seguridad</span> de las organizaciones para <span className="span-white">protegerlas</span> de
                        posibles <span className="span-pink">ataques.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <b className="span-yellow">Pentesting:</b> El <i className="span-yellow">pentesting</i> (o <span className="span-yellow">prueba de penetración</span>) es un <span className="span-white">proceso sistemático</span> que consiste en <span className="span-pink">simular ataques reales</span> a <span className="span-pink">sistemas, aplicaciones</span> o <span className="span-pink">redes</span> para <span className="span-white">identificar vulnerabilidades explotables.</span> Este método incluye <span className="span-blue">varias etapas.</span>
                    </p>
                </li>
            </ul>

            <p>
                Ahora <span className="span-white">conceptos</span> relacionados a <span className="span-pink">ataques:</span>
            </p>

            <ul className="ol-code">
                <li>
                    <p>
                        <b className="span-yellow">Vulnerabilidad:</b> Una <span className="span-yellow">vulnerabilidad</span> es una <span className="span-white">debilidad</span> o <span className="span-white">fallo</span> en un <span className="span-pink">sistema, red, aplicación</span> o <span className="span-pink">proceso</span> que puede ser <span className="span-blue">explotado por un
                        atacante</span> para <span className="span-pink">comprometer su seguridad.</span> Estas pueden ser causadas por <span className="span-white">errores de diseño, configuraciones incorrectas</span> o <span className="span-white">falta de actualizaciones,</span> y representan un <span className="span-blue">punto de entrada</span> para <span className="span-pink"> posibles ataques.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <b className="span-yellow">Ataque:</b> Un <span className="span-yellow">ataque</span> es cualquier <span className="span-pink">acción maliciosa</span> dirigida a <span className="span-white">explotar vulnerabilidades</span> de un <span className="span-pink">sistema, red</span> o <span className="span-pink">aplicación</span> con el
                        objetivo de <span className="span-white">comprometer su funcionamiento, acceder a información sensible</span> o <span className="span-white">causar daños.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <b className="span-yellow">Malware:</b> El <span className="span-yellow">malware</span> (del inglés <i className="span-yellow">malicious software</i>) es un <span className="span-pink">software malicioso</span> diseñado para <span className="span-white">infiltrarse, dañar</span> o <span className="span-white">interrumpir</span>
                        sistemas o redes <span className="span-pink">sin el consentimiento</span> del usuario. Existen <span className="span-blue">diferentes tipos</span> de estos, entre algunos se encuentran: <span className="span-blue">virus, gusanos, troyanos, spywares,</span> etc.         
                    </p>
                </li>

                <li>
                    <p>
                        <b className="span-yellow">Ingenieria Social:</b> Es una <span className="span-yellow">técnica de manipulación psicológica</span> utilizada por <span className="span-pink">atacantes</span> para <span className="span-white">engañar</span> a las personas y hacer que <span className="span-blue">revelen
                        información confidencial</span> o <span className="span-blue">realicen acciones</span> que <span className="span-white">comprometan la seguridad.</span> Este tipo de <span className="span-pink">ataque</span> se basa en <span className="span-pink">explotar</span> la
                        <span className="span-white">confianza, miedo</span> o <span className="span-white">curiosidad</span> de las víctimas.
                    </p>
                </li>
            </ul>

            <p>
                Tambien <span className="span-white">algunos conceptos</span> sobre como <span className="span-pink">medir cuantitativamente ciberataques:</span>
            </p>

            <ul className="ol-code">
                <li>
                    <p>
                        <b className="span-yellow">Riesgo:</b> Un <span className="span-yellow">riesgo</span> es la <span className="span-white">posibilidad</span> de que una <span className="span-yellow">amenaza explote una vulnerabilidad</span> en un <span className="span-blue">sistema, red</span> o <span className="span-blue">proceso.</span>
                    </p>
                </li>

                <li>
                    <p>
                        <b className="span-yellow">Amenaza:</b> Las <span className="span-yellow">amenazas</span> son cualquier <span className="span-white">evento, condición</span> o <span className="span-white">entidad</span> capaz de <span className="span-pink">explotar una vulnerabilidad</span> y <span className="span-pink">causar daño</span> a <span className="span-blue">sistemas,
                        datos</span> o <span className="span-blue">redes.</span> Estas pueden ser de <span className="span-yellow">origen interno</span> (<span className="span-white">errores humanos, accesos malintencionados</span>) o <span className="span-yellow">externo</span> (<span className="span-white">ciberataques,
                        desastres naturales</span>).
                    </p>
                </li>

                <li>
                    <p>
                        <b className="span-yellow">Mitigación:</b> La <span className="span-yellow">mitigación</span> se refiere a las <span className="span-white">acciones</span> y <span className="span-white">medidas implementadas</span> para <span className="span-pink">reducir</span> o <span className="span-pink">eliminar el riesgo</span> asociado con una
                        <span className="span-blue">vulnerabilidad</span> o <span className="span-blue">amenaza.</span> Esto incluye controles <span className="span-blue">técnicos, procedimientos</span> y <span className="span-blue">políticas</span> que <span className="span-white">disminuyen la probabilidad</span> de
                        que un <span className="span-pink">ataque tenga éxito</span> o el <span className="span-pink">impacto de un incidente.</span>
                    </p>
                </li>
                <li>
                    <p>
                        <b className="span-yellow">Impacto:</b> El <span className="span-yellow">impacto</span> es la <span className="span-pink">consecuencia</span> o <span className="span-pink">efecto negativo</span> que un <span className="span-white">riesgo materializado</span>  puede tener sobre los <span className="span-blue">sistemas, la
                        información, las operaciones</span> o la <span className="span-blue">reputación de una organización.</span> El <span className="span-yellow">impacto</span> puede ser <span className="span-blue">financiero, operativo, legal</span> o
                        <span className="span-blue">relacionado con la pérdida de confianza</span> de los usuarios.
                    </p>
                </li>
            </ul>

            <p>
                Conociendo estos <span className="span-white">conceptos</span>, podemos entender de una manera mas amplia como <span className="span-white">funciona</span> y cual es el <span className="span-white">objetivo</span> de la <span className="span-yellow">Ciberseguridads</span> y sus <span className="span-pink">difentes enemigos.</span>
            </p>

            <hr className="cursor"/>

        </>
    );
}