import './about.scss';
import React, { useRef } from "react";
import { useInViewport } from 'react-in-viewport';
import { useTranslation } from "react-i18next";

function About() {
    const aboutRef = useRef();
    const { inViewport } = useInViewport(aboutRef);
    const { t } = useTranslation();

    return (
        <>
            <section ref={aboutRef} className="section-about" id="about">
                <div className="container">
                    <div className={inViewport ? 'about-wrap animate__animated animate__bounceInLeft animate__delay-0.5s' : 'about-wrap-none'}>
                        <h1 className="about-title">{t("about.title")}</h1>
                        <h3 className="about-subtitle">{t("about.subtitle-p1")}<br />{t("about.subtitle-p2")}</h3>
                        <p className="about-description">{t("about.description-p1")}</p>
                        <p className="about-description">{t("about.description-p2")}</p>
                        <p className="about-description">{t("about.description-p3")}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;