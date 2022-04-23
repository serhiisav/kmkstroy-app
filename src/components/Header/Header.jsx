import './header.scss';
import React, { useState } from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { grey } from '@mui/material/colors';
import { HashLink as Link } from 'react-router-hash-link';


function Header() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const color = grey[500];

    const toggleHamburger = (e) => {
        if (e.target.className === 'header-nav-link' ||
            e.target.className === 'check' ||
            e.target.className === 'check-span') {
            setHamburgerOpen(!hamburgerOpen);
        } else if (hamburgerOpen) {
            setHamburgerOpen(false);
        }
    }

    return (
        <>
            <div className="header">
                <div className={hamburgerOpen ? "blur active" : "blur"} onClick={e => {
                    e.stopPropagation();
                    toggleHamburger(e)
                }} />
                <div className="container">
                    <div className="header-wrap">
                        <img
                            className="header-logo"
                            src={process.env.PUBLIC_URL + '/kmk-logo.png'}
                            onMouseOver={e => e.currentTarget.src = process.env.PUBLIC_URL + "/kmk-logo-hover.png"}
                            onMouseOut={e => e.currentTarget.src = process.env.PUBLIC_URL + "/kmk-logo.png"}
                            onClick={(e) => {
                                window.scrollTo({ behavior: 'smooth', top: 0 });
                                toggleHamburger(e)
                            }}
                            alt="logo"
                            height='75' />

                        <nav className="header-nav-list-wrap">
                            <ul className={!hamburgerOpen ? "header-nav-list" : "header-nav-list active"}>
                                <li className="header-nav-item item-home">
                                    <Link smooth to="#home"
                                        className="header-nav-link"
                                        onClick={e => toggleHamburger(e)}
                                        scroll={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
                                    >
                                        <img className="header-nav-item-icon" src={process.env.PUBLIC_URL + '/img/icon-home.svg'} alt="icon-home" />
                                        Головна
                                    </Link>
                                </li>
                                <li className="header-nav-item">
                                    <Link smooth to="#about"
                                        className="header-nav-link"
                                        onClick={e => toggleHamburger(e)}
                                        scroll={(el) => window.scrollTo({ behavior: 'smooth', top: el.offsetTop - 115 })}
                                    >
                                        <img className="header-nav-item-icon" src={process.env.PUBLIC_URL + '/img/icon-about.svg'} alt="icon-about" />
                                        Про нас
                                    </Link>
                                </li>
                                <li className="header-nav-item">
                                    <Link smooth to='#services'
                                        className="header-nav-link"
                                        onClick={e => toggleHamburger(e)}
                                        scroll={(el) => window.scrollTo({ behavior: 'smooth', top: el.offsetTop - 85 })}
                                    >
                                        <img className="header-nav-item-icon" src={process.env.PUBLIC_URL + '/img/icon-services.svg'} alt="icon-services" />
                                        Послуги
                                    </Link>
                                </li>
                                <li className="header-nav-item"
                                >
                                    <Link smooth to='#projects'
                                        className="header-nav-link"
                                        onClick={e => toggleHamburger(e)}
                                        scroll={(el) => window.scrollTo({ behavior: 'smooth', top: el.offsetTop - 90 })}
                                    >
                                        <img className="header-nav-item-icon" src={process.env.PUBLIC_URL + '/img/icon-projects.svg'} alt="icon-projects" />
                                        Проекти
                                    </Link>
                                </li>
                                <li className="header-nav-item"
                                >
                                    <Link smooth to='#contacts'
                                        className="header-nav-link"
                                        onClick={e => toggleHamburger(e)}
                                        scroll={(el) => window.scrollTo({ behavior: 'smooth', top: el.offsetTop - 90 })}
                                    >
                                        <img className="header-nav-item-icon" src={process.env.PUBLIC_URL + '/img/icon-contacts.svg'} alt="icon-contacts" />
                                        Контакти
                                    </Link>
                                </li>
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

        </>
    )
}

export default Header;