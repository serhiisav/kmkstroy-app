import './services.scss';
import React from "react";


function Services() {

    return (
        <>
            <section className="section-services" id="services">
                <div className="container">
                    <div className="services-wrap">
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