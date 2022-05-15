import './intro.scss'
import React, { useRef } from "react";
import { useInViewport } from 'react-in-viewport';



function Intro() {
    const introRef = useRef();
    const { inViewport } = useInViewport(introRef);

    const styleBackground = {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background-header-1-min.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        // backgroundSize: '100% auto',
        backgroundSize: 'cover',
        minHeight: '100vh',
        backgroundAttachment: 'fixed'
    }
    return (
        <section ref={introRef} className="section-intro" id="home"
            style={styleBackground}
        >
            <div className={inViewport ? 'section-intro-wrap animate__animated animate__bounceInLeft animate__delay-0.5s' : 'section-intro-wrap-none'}>
                <h1 className="section-intro-title">ТОВ &laquo;КМКСТРОЙ&raquo;</h1>
                <p className="section-intro-subtitle">Будівельні роботи та</p>
                <p className="section-intro-subtitle">Промислові підлоги</p>
            </div>
        </section>
    )
}

export default Intro;