import './about.scss';
import React, { useRef } from "react";
import { useInViewport } from 'react-in-viewport';

function About() {
    const aboutRef = useRef();
    const { inViewport } = useInViewport(aboutRef);

    return (
        <>
            <section ref={aboutRef} className="section-about" id="about">
                <div className="container">
                    <div className={inViewport ? 'about-wrap animate__animated animate__bounceInLeft animate__delay-0.5s' : 'about-wrap-none'}>
                        <h1 className="about-title">Про нас</h1>
                        <h3 className="about-subtitle">LLC KMKSTROY <br />на будівельному ринку України з 2015 року</h3>
                        <p className="about-description">Підприємство має ліцензію з класом відповідальності  СС2, СС3, та дозвіл для виконання  робіт підвищеної небезпеки.</p>
                        <p className="about-description">Наш штат складається з кваліфікованих спеціалістів, які володіють досвідом роботи більше 10 років</p>
                        <p className="about-description">Підприємство має матеріально-технічну базу, обладнання, інструменти, машини та механізми, необхідні для надання послуг на високому рівні.</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About;