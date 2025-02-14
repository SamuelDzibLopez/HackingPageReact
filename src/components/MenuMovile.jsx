
import React from "react";

import icon_directory from "./../sources/icons/icon-directory.svg";
import icon_close from "./../sources/icons/icon-close.svg";

export default function MenuMovile (props) {
    return (
        <div className="menu-movile" id="menuMovile">
            <img src={icon_close} alt="" className="icon-close" title="Cerrar" id="btnClose" onClick={() => props.funcionMenu(false)}/>
        <h2>ls<span className="span-green cursor">_</span></h2>
        <ul className="ul-menu-movile">
            <li className="li-menu-movile">
                <a className="a-nav-movile" onClick={() => props.funcionModulo(1)} href="#start">
                    <span className="span-blue">&lt;DZEL/&gt;</span>
                </a>
            </li>
            <li className="li-menu-movile">
                <a className="a-nav-movile" onClick={() => props.funcionModulo(2)} href="#start">
                    <img src={icon_directory} alt=""/>
                    <span className="span-blue">Introducción</span>
                </a>
            </li>
            <li className="li-menu-movile">
                <a className="a-nav-movile" onClick={() => props.funcionModulo(3)} href="#start">
                    <img src={icon_directory} alt=""/>
                    <span className="span-blue">Pasos del Hacking</span>
                </a>
            </li>
            <li className="li-menu-movile">
                <a className="a-nav-movile" onClick={() => props.funcionModulo(4)} href="#start">
                    <img src={icon_directory} alt=""/>
                    <span className="span-blue">Ataques</span>
                </a>
            </li>
            <li className="li-menu-movile">
                <a className="a-nav-movile" onClick={() => props.funcionModulo(5)} href="#start">
                    <img src={icon_directory} alt=""/>
                    <span className="span-blue">Herramientas</span>
                </a>
            </li>
        </ul>
    </div>
    );
}