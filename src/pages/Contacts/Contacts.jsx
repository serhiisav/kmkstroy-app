import React from "react";
import './contacts.scss';
import { useTranslation } from "react-i18next";


function Contacts() {
    const { t } = useTranslation();

    return (
        <>
            <footer className="section-contacts">
                <div className="container">
                    <div className="section-contacts-wrap" >
                        <div className="contacts-logo-wrap">
                            <img
                                className="contacts-logo"
                                src={process.env.PUBLIC_URL + t('footer.logo')}
                                alt="logo"
                                height='115' />
                            <div className="contacts-logo-title-wrap">
                                <h1 className="contacts-logo-title">{t('footer.title')}</h1>
                                <p className="contacts-logo-subtitle">{t('footer.subtitle')}</p>
                            </div>
                        </div>
                        <div className="contacts-address">
                            <h2 className="contacts-address-title">{t('footer.address_title')}</h2>
                            <div className="contacts-address-content-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#9e9e9e"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" /><circle cx="12" cy="9" r="2.5" /></svg>
                                <p className="contacts-address-content">{t('footer.address_city')}<br />{t('footer.address_street')}</p>
                            </div>
                            <div className="contacts-address-content-wrap">
                                <img src={process.env.PUBLIC_URL + '/img/footer-icon-phone.svg'} alt='' />
                                <a className="contacts-link" href="tel:+380675611900">+38(067)-561-19-00</a>
                            </div>
                            <div className="contacts-address-content-wrap">
                                <img src={process.env.PUBLIC_URL + '/img/footer-icon-phone.svg'} alt='' />
                                <a className="contacts-link" href="tel:+380675746914">+38(067)-574-69-14</a>
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
                </div>
                <div className="footer-links-wrap">
                    <div>
                        <a
                            href="https://www.youtube.com/channel/UC6N0k9hxpoWZ_FxDAuBCU3g/featured"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="footer-youtube-img"
                                src={process.env.PUBLIC_URL + '/img/footer-youtube-logo.svg'}
                                alt="YouTube-Link"
                                height='15'
                            />
                        </a>
                    </div>
                </div>
                <p className="footer-copyright">Copyright &copy; 2015-{new Date().getFullYear()} KMKSTROY. All Rights Reserved</p>
            </footer>
        </>
    )
}

export default Contacts;