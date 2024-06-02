import React, { useState } from 'react';
import './nav.css';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id="nav-bar">
            <div id="name">
                <a href="x">Vishesh Paliwal</a>
            </div>
            <div id="hamburger" onClick={toggleMenu}>
                &#9776;
            </div>
            <div id="links" className={isOpen ? 'open' : ''}>
                <a href="#page1">Home</a>
                <a href="#page2">About</a>
                <a href="#page3">Skills</a>
                <a href="x">Projects</a>
                <a href="#page4">Experience</a>
                <a href="#page5">Contact</a>
            </div>
        </div>
    );
}

export default Nav;

