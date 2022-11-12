import React , { useState , useEffect } from 'react';

import {  NavLink } from 'react-router-dom';
import menus from '../../pages/menu';

import './styles.scss';
import logo from '../../assets/images/logo/EMPIRE-NFT-small.png'
import { ConnectWallet } from "@thirdweb-dev/react";


import { Link, animateScroll as scroll } from "react-scroll";
import { useTransition } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const [t, i18n] = useTranslation("global")
    const [scroll, setScroll] = useState(false);
        useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
        });
        return () => {
            setScroll({});
        }
    }, []);

    const [menuActive, setMenuActive] = useState(null);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
      };

    
    const [activeIndex, setActiveIndex] = useState(null);
    const handleDropdown = index => {
        setActiveIndex(index); 
    };

    return (
        
        <header id="header_main" className={`header ${scroll ? 'is-fixed' : ''}`}>
            <div className="container">
                <div id="site-header-inner">
                    <div className="header__logo">
                        <NavLink to="/"><img src={logo} alt="EMPIRE Digital Collectibles"/></NavLink>
                    </div>
                    <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`} >
                        <ul id="menu-primary-menu" className="menu">
                            <li className={`menu-item `} >
                                <Link
                                    activeClass="active"
                                    to={"Home"}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                            
                                >{t("Nav.Home")}</Link>
                            </li>
                            <li className={`menu-item `} >
                                <Link
                                    activeClass="active"
                                    to={"About"}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                            
                                >{t("Nav.About")}</Link>
                            </li>
                            <li className={`menu-item `} >
                                <Link
                                    activeClass="active"
                                    to={"RoadMap"}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                            
                                >{t("Nav.RoadMap")}</Link>
                            </li>
                            <li className={`menu-item `} >
                                <Link
                                    activeClass="active"
                                    to={"Team"}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                            
                                >{t("Nav.Team")}</Link>
                            </li>
                            <li className={`menu-item `} >
                                <Link
                                    activeClass="active"
                                    to={"Nft"}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                            
                                >{t("Nav.Nft")}</Link>
                            </li>
                            <li className={`menu-item `} >
                                <Link
                                    activeClass="active"
                                    to={"Faq"}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                            
                                >{t("Nav.Faq")}</Link>
                            </li>
                            <li className={`menu-item `} >
                                <Link>
                                    lng
                                </Link>
                                <ul className="sub-menu">
                                    <li onClick={()=>{i18n.changeLanguage("es")}} className="menu-item">
                                            <Link onClick={()=>{i18n.changeLanguage("es")}}>Español</Link>
                                    </li>
                                    <li onClick={()=>{i18n.changeLanguage("en")}} className="menu-item">
                                            <Link onClick={()=>{i18n.changeLanguage("en")}}>Ingles</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="main-web3">
                        <ConnectWallet />

                    </div>

                    <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
                </div>
            </div>
        </header>
    );
}

export default Header;