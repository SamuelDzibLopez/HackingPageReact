import React from "react";
import icon_directory from "./../sources/icons/icon-directory.svg";

export default function NavMovile (props) {
    return (
        <nav className="div-1200 nav" id="nav-desktop">
            <ul className="ul-nav">
                <li className="icon-nav">
                    <a className="a-icon-nav" onClick={() => props.funcionModulo(1)} href="#start">
                        &lt;DZEL/&gt;
                    </a>
                </li>
                <li className="icon-nav">
                    <a className="a-icon-nav" onClick={() => props.funcionModulo(2)} href="#start">
                        <img className="img-icon-nav" src={icon_directory} alt=""/>
                        <span className="span-blue">Introducción</span>
                    </a>
                </li>
                <li className="icon-nav">
                    <a className="a-icon-nav" onClick={() => props.funcionModulo(3)} href="#start">
                        <img className="img-icon-nav" src={icon_directory} alt=""/>
                        <span className="span-blue">Pasos del Hacking</span>
                    </a>
                </li>
                <li className="icon-nav">
                    <a className="a-icon-nav" onClick={() => props.funcionModulo(4)} href="#start">
                        <img className="img-icon-nav" src={icon_directory} alt=""/>
                        <span className="span-blue">Ataques</span>
                    </a>
                </li>
                <li className="icon-nav">
                    <a className="a-icon-nav" onClick={() => props.funcionModulo(5)} href="#start">
                        <img className="img-icon-nav" src={icon_directory} alt=""/>
                        <span className="span-blue">Herramientas</span>
                    </a>
                </li>
            </ul>
            <ul className="ul-mode">
                <li>
                    <input type="checkbox" name="mode" id="mode-desktop"className="input-mode"/>
                </li>
                <label htmlFor="mode-desktop" className="label-mode" onClick={() => props.funcionMode()}>
                    {
                        props.mode ? 
                            <span className="span-pink">Ligth</span> 
                        :
                            <span className="span-green">Dark</span>
                    }
                </label>
            </ul>
        </nav>
    );
}