import React, { forwardRef, useRef } from "react";
import './contacts.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";

function Contacts() {

    return (
        <>
            <footer className="section-contacts">
                <div className="container">
                    <div className="section-contacts-wrap" >
                        <div className="contacts-logo-wrap">
                            {/* <h2 className="contacts-title">ТОВ &laquo;КМКСТРОЙ&raquo;</h2> */}
                            <img
                                className="contacts-logo"
                                src={process.env.PUBLIC_URL + '/kmk-logo.png'}
                                alt="logo"
                                height='115' />
                            <div className="contacts-logo-title-wrap">

                                <h1 className="contacts-logo-title">ТОВ &laquo;КМКСТРОЙ&raquo;</h1>
                                <p className="contacts-logo-subtitle">Будівельні роботи та промислові підлоги</p>
                                {/* <p className="contacts-logo-subtitle">Промислові підлоги</p> */}
                            </div>

                        </div>

                        <div className="contacts-address">
                            <h2 className="contacts-address-title">Офіс</h2>
                            <div className="contacts-address-content-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#9e9e9e"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" /><circle cx="12" cy="9" r="2.5" /></svg>
                                <p className="contacts-address-content"> 49044, м. Дніпро,<br />вул. Шевченка, буд. 37</p>
                            </div>
                            <div className="contacts-address-content-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#9e9e9e"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" /></svg>
                                <a className="contacts-link" href="tel:+380948854046">+38(094)-885-40-46</a>
                            </div>
                            <div className="contacts-address-content-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#9e9e9e"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" /></svg>
                                <a className="contacts-link" href="tel:+380971133045">+38(097)-113-30-45</a>
                            </div>
                            <div className="contacts-address-content-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#9e9e9e"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" /></svg>
                                <a className="contacts-link" href="mailto:kmkstroy82@gmail.com"
                                >kmkstroy82@gmail.com</a>
                            </div>

                        </div>
                        <img
                            className="footer-img"
                            src={process.env.PUBLIC_URL + '/img/footer-img.jpg'}
                            alt="img"
                            height='175'
                            width='272' />
                    </div>
                    {/* </div> */}
                </div>
                <p className="footer-copyright">Copyright &copy; 2015-{new Date().getFullYear()} KMKSTROY. All Rights Reserved</p>

            </footer>
        </>
    )
}

export default Contacts;