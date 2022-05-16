import './services.scss';
import React, { useRef } from "react";
import { useInViewport } from 'react-in-viewport';


function Services() {
    const servicesRef = useRef();
    const { inViewport } = useInViewport(servicesRef);

    return (
        <>
            <section ref={servicesRef} className="section-services" id="services">
                <div className="container">
                    <div className={inViewport ? 'services-wrap animate__animated animate__bounceInRight animate__delay-0.5s' : 'services-wrap-none'}>
                        <h1 className="services-title">Основні види діяльності підприємства</h1>
                        <ul className='services-list'>
                            <li className='services-item'>Повний комплекс робіт з влаштування бетонних підлог</li>
                            <li className='services-item'>Влаштування  полімерних наливних підлог (поліуретанові, епоксидні, поліуретан-цементні)</li>
                            <li className='services-item'>Виконання будівельно-монтажних, фасадних, покрівельних та оздоблювальних робіт</li>
                            <li className='services-item'>Влаштування інженерних  мереж</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;