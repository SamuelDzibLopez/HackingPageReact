import React from "react";
import icon_directory from "./../sources/icons/icon-directory.svg";

export default function NavMovile (props) {
    return (
        <nav className="div-1200 nav" id="nav-movile">
            <ul className="ul-nav">
                <li className="icon-nav">
                    <a className="a-icon-nav" onClick={() => props.funcionMenu(true)}>
                        <img className="img-icon-nav" src={icon_directory} alt=""/>
                        <span className="span-blue">Menú</span>
                    </a>
                </li>
            </ul>
            <ul className="ul-mode">
                <li>
                    <input type="checkbox" name="mode" id="mode-movile" className="input-mode"/>
                </li>
                <label htmlFor="mode-movile" className="label-mode" onClick={() => props.funcionMode()}>
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