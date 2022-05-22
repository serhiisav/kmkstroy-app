import './header.scss';
import React, { useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useDispatch, useSelector } from 'react-redux';
import { setHamburgerOpen } from '../../store/actions';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


function Header() {
    const dispatch = useDispatch();
    const hamburgerOpen = useSelector(state => state.hamburgerOpen);
    const hamburgerRef = useRef(null)

    // useEffect(() => {
    //     if (hamburgerOpen) {
    //         document.body.style.overflowY = 'hidden';
    //     } else {
    //         document.body.style.overflowY = 'auto';
    //     }
    // }, [hamburgerOpen]);

    useEffect(() => {
        if (hamburgerOpen) {
            disableBodyScroll(hamburgerRef);
        }
        return () => {
            clearAllBodyScrollLocks();
        }
    }, [hamburgerOpen])

    const toggleHamburger = (e) => {
        if (e.target.className === 'header-nav-link' ||
            e.target.className === 'check' ||
            e.target.className === 'check-span') {
            dispatch(setHamburgerOpen(!hamburgerOpen));
        } else if (hamburgerOpen) {
            dispatch(setHamburgerOpen(false));
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
                        <Link
                            to="home"
                            onClick={e => {
                                scroll.scrollToTop();
                                toggleHamburger(e)
                            }}
                        >
                            <img
                                className="header-logo"
                                src={process.env.PUBLIC_URL + '/kmk-logo.png'}
                                onMouseOver={e => e.currentTarget.src = process.env.PUBLIC_URL + "/kmk-logo-hover.png"}
                                onMouseOut={e => e.currentTarget.src = process.env.PUBLIC_URL + "/kmk-logo.png"}
                                alt="logo"
                                height='75' />
                        </Link>
                        <nav ref={hamburgerRef} className="header-nav-list-wrap">
                            <ul className={!hamburgerOpen ? "header-nav-list" : "header-nav-list active"}>
                                <li className="header-nav-item item-home">
                                    <Link
                                        activeClass="active"
                                        smooth={true}
                                        offset={-84}
                                        duration={500}
                                        delay={200}
                                        to="home"
                                        className="header-nav-link"
                                        onClick={e => {
                                            toggleHamburger(e);
                                        }}
                                    >
                                        <img className="header-nav-item-icon" src={process.env.PUBLIC_URL + '/img/icon-home.svg'} alt="icon-home" />
                                        Головна
                                    </Link>
                                </li>
                                <li className="header-nav-item">
                                    <Link
                                        activeClass="active"
                                        smooth={true}
                                        offset={-115}
                                        duration={500}
                                        delay={200}
                                        to="about"
                                        className="header-nav-link"
                                        onClick={e => {
                                            toggleHamburger(e)

                                        }}
                                    >
                                        <img className="header-nav-item-icon" src={process.env.PUBLIC_URL + '/img/icon-about.svg'} alt="icon-about" />
                                        Про нас
                                    </Link>
                                </li>
                                <li className="header-nav-item">
                                    <Link
                                        activeClass="active"
                                        smooth={true}
                                        offset={-84}
                                        duration={500}
                                        delay={200}
                                        to='services'
                                        className="header-nav-link"
                                        onClick={e => {
                                            toggleHamburger(e);
                                        }}
                                    >
                                        <img className="header-nav-item-icon" src={process.env.PUBLIC_URL + '/img/icon-services.svg'} alt="icon-services" />
                                        Послуги
                                    </Link>
                                </li>
                                <li className="header-nav-item"
                                >
                                    <Link
                                        activeClass="active"
                                        smooth={true}
                                        offset={-84}
                                        duration={500}
                                        delay={200}
                                        to='gallery'
                                        className="header-nav-link"
                                        onClick={e => {
                                            toggleHamburger(e);
                                        }}
                                    >
                                        <img className="header-nav-item-icon" src={process.env.PUBLIC_URL + '/img/icon-gallery.svg'} alt="icon-gallery" />
                                        Галерея
                                    </Link>
                                </li>
                                <li className="header-nav-item"
                                >
                                    <Link
                                        activeClass="active"
                                        smooth={true}
                                        offset={-84}
                                        duration={500}
                                        delay={200}
                                        to='partners'
                                        className="header-nav-link"
                                        onClick={e => {
                                            toggleHamburger(e);
                                        }}
                                    >
                                        <img className="header-nav-item-icon" src={process.env.PUBLIC_URL + '/img/icon-partners.svg'} alt="icon-partners" />
                                        Партнери
                                    </Link>
                                </li>
                                <li className="header-nav-item"
                                >
                                    <Link
                                        activeClass="active"
                                        smooth={true}
                                        offset={-84}
                                        duration={500}
                                        delay={200}
                                        to='contacts'
                                        className="header-nav-link"
                                        onClick={e => {
                                            toggleHamburger(e);
                                        }}
                                    >
                                        <img className="header-nav-item-icon" src={process.env.PUBLIC_URL + '/img/icon-contacts.svg'} alt="icon-contacts" />
                                        Контакти
                                    </Link>
                                </li>
                            </ul>
                            <div className="header-contacts">
                                <div className="header-contacts-link-wrap">
                                    <img src={process.env.PUBLIC_URL + '/img/icon-phone.svg'} alt="icon-phone" />
                                    <a className="header-contacts-link" href="tel:+380971133045"
                                        onClick={e => toggleHamburger(e)}>+38(097)-113-30-45</a>
                                </div>
                                <div className="header-contacts-link-wrap">
                                    <img src={process.env.PUBLIC_URL + '/img/icon-email.svg'} alt="icon-email" />
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