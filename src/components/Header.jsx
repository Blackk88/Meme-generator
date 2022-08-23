import React from "react";
import trollface from "../assets/trollface.svg"

function Header() {
    return (
        <header>
            <img src={trollface} className="trollface-img"/>
            <h2 className="title">Meme Generator</h2>
            <p className="project-description">React Course - Project 3</p>
        </header>
    )
}

export default Header