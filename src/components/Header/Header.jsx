import React, { useEffect, useState } from "react";
// import { ReactDOM } from "react";
import './header.scss';
// import { Link, NavLink, Outlet } from 'react-router-dom';
// import { useSelector } from "react-redux";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { grey } from '@mui/material/colors';

function Header({ scrollToRef }) {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const styleBackground = {
        backgroundImage: `url(/img/background-header-1.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundSize: 'auto 100%',
        // backgroundSize: 'cover',
        height: '100vh',
        backgroundAttachment: 'fixed'
    }

    const color = grey[500];

    const toggleHamburger = (e) => {
        if (e.target.className === 'header-nav-hamburger' ||
            e.target.className === 'check' ||
            e.target.className === 'check-span') {
            setHamburgerOpen(!hamburgerOpen);
        } else if (hamburgerOpen) {
            setHamburgerOpen(false);
        }
        console.log(e.target.className);
    }

    // useEffect(() => {
    //     console.log(hamburgerOpen);
    // }, [hamburgerOpen])

    return (
        <>
            <div className="header-nav-wrap">
                <div className={hamburgerOpen ? "blur active" : "blur"} onClick={e => {
                    e.stopPropagation();
                    toggleHamburger(e)
                }} />
                <div className="container">
                    <div className="header-nav">
                        <div className="logo-wrap">
                            {/* <NavLink style={({ isActive }) => isActive ? { borderBottom: "3px solid #ffffff" } : undefined} to='/'> */}
                            <img className="logo-header"
                                src="./kmk-logo.png"
                                onMouseOver={e => e.currentTarget.src = "./kmk-logo-hover.png"}
                                onMouseOut={e => e.currentTarget.src = "./kmk-logo.png"}
                                onClick={(e) => {
                                    window.scrollTo({ behavior: 'smooth', top: 0 })
                                    toggleHamburger(e)
                                }}
                                alt="logo"
                                height='75' />
                            {/* </NavLink> */}
                        </div>

                        <nav className="header-nav-list-wrap">
                            <ul className={!hamburgerOpen ? "header-nav-list" : "header-nav-list active"}>
                                {/* <li className="header-nav-item" id="header-nav-home" onClick={
                                    (e) => {
                                        window.scrollTo({ behavior: 'smooth', top: 0 })
                                        toggleHamburger(e)
                                    }}>Головна</li> */}
                                <li className="header-nav-item item__about"
                                    // id="header-nav-about"
                                    onClick={
                                        (e) => {
                                            // e.preventDefault()
                                            // e.stopPropagation()
                                            scrollToRef(e)
                                            toggleHamburger(e)
                                        }}>
                                    {/* <InfoOutlinedIcon htmlColor={color} /> */}
                                    Про нас</li>
                                <li className="header-nav-item item__services"
                                    // id="header-nav-services" 
                                    onClick={
                                        (e) => {
                                            scrollToRef(e)
                                            toggleHamburger(e)
                                        }}>Послуги</li>
                                <li className="header-nav-item item__projects"
                                    // id="header-nav-projects" 
                                    onClick={
                                        (e) => {
                                            scrollToRef(e)
                                            toggleHamburger(e)
                                        }}>Проекти</li>
                                <li className="header-nav-item item__contacts"
                                    // id="header-nav-contacts" 
                                    onClick={
                                        (e) => {
                                            scrollToRef(e)
                                            toggleHamburger(e)
                                        }}>Контакти</li>
                            </ul>
                            <div className="header-contacts">
                                <div className="header-contacts-link-wrap">
                                    <PhoneAndroidIcon htmlColor={color} />
                                    <a className="header-contacts-link" href="tel:+380971133045"
                                        onClick={e => toggleHamburger(e)}>+38(097)-113-30-45</a>
                                </div>
                                <div className="header-contacts-link-wrap">
                                    <MailOutlineIcon htmlColor={color} />
                                    <a className="header-contacts-link" href="mailto:kmkstroy82@gmail.com"
                                        onClick={e => toggleHamburger(e)}>kmkstroy82@gmail.com</a>
                                </div>
                            </div>

                            <label htmlFor="check" className="header-nav-hamburger">
                                <input
                                    onClick={e => toggleHamburger(e)} className="check"
                                    type="checkbox"
                                    id="check"
                                    checked={hamburgerOpen}
                                    onChange={e => { }} />
                                <span className="check-span"></span>
                                <span className="check-span"></span>
                                <span className="check-span"></span>
                            </label>

                        </nav>
                    </div>
                </div>
            </div>
            <header className="header" style={styleBackground}>
                <div className="header-hero-wrap">
                    <h1 className="header-hero-title">ТОВ &laquo;КМКСТРОЙ&raquo;</h1>
                    <p className="header-hero-subtitle">Будівельні роботи та</p>
                    <p className="header-hero-subtitle">Промислові підлоги</p>
                </div>
            </header>
        </>
    )
}

export default Header;