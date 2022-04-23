import React from "react";
import './about.scss';

function About() {

    return (
        <>
            <section className="section-about" id="about">
                <div className="container">
                    <div className="about-wrap">
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