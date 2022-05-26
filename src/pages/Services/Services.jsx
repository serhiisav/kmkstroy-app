import './services.scss';
import React, { useRef } from "react";
import { useInViewport } from 'react-in-viewport';
import { useTranslation } from "react-i18next";


function Services() {
    const servicesRef = useRef();
    const { inViewport } = useInViewport(servicesRef);
    const { t } = useTranslation();

    return (
        <>
            <section ref={servicesRef} className="section-services" id="services">
                <div className="container">
                    <div className={inViewport ? 'services-wrap animate__animated animate__bounceInRight animate__delay-0.5s' : 'services-wrap-none'}>
                        <h1 className="services-title">{t('services.title')}</h1>
                        <ul className='services-list'>
                            <li className='services-item'>{t('services.li1')}</li>
                            <li className='services-item'>{t('services.li2')}</li>
                            <li className='services-item'>{t('services.li3')}</li>
                            <li className='services-item'>{t('services.li4')}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;