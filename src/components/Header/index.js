import React, { useState, useEffect } from "react";
import "./header.css";
import { CSSTransition } from "react-transition-group";

export default function Header() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1000px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="header">
            <img src={require("../../images/logo_topo.png")} className="logo" alt="logo" />
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="navanimation"
                unmountOnExit
            >
                <nav className="nav">
                    <a href="/">Home</a>
                    <a href="/">Quem Somos ?</a>
                    <a href="/">Templates</a>
                    <a href="/">Solicite o seu</a>
                    <a href="/">Fale Conosco</a>
                </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="burger">
                <span className="hamburguer"></span>
            </button>
        </header>
    );
}