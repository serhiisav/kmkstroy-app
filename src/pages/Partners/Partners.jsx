import React, { useRef } from 'react';
import './partners.scss'

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


export default function Partners() {
    const partnersRef = useRef();
    const partners = [
        {
            name: 'fibermix',
            src: '/img/partner-fibermix-black.svg',
            width: '328',
            height: '50'
        },
        {
            name: 'lotosbeton',
            src: '/img/partner-lotosbeton.png',
            width: '150',
            height: '70'
        },
        {
            name: 'remmers',
            src: '/img/partner-remmers.svg',
            width: '165',
            height: '52'
        },
        {
            name: 'sika',
            src: '/img/partner-sika.svg',
            width: '120',
            height: '110'
        },
        {
            name: 'spektrum',
            src: '/img/partner-spektrum_ua.png',
            width: '216',
            height: '36'
        },
        {
            name: 'sgpenetron',
            src: '/img/partner-sgpenetron.png',
            width: '127',
            height: '50'
        },
    ]

    return (
        <>
            <section ref={partnersRef} className="section-partners" id='partners'>
                <h1 className='section-partners-title'>Наші Партнери</h1>
                <div className='partners-wrapper'>
                    <Swiper
                        loop={true}
                        speed={400}
                        spaceBetween={4}
                        slidesPerView={2}
                        grabCursor
                        freeMode
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            480: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            735: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1100: {
                                slidesPerView: 5,
                                spaceBetween: 40
                            }
                        }}
                        modules={[Navigation, Thumbs, Autoplay, FreeMode]}
                        className="partners-mySwiper"
                    >
                        {partners.map(item =>
                            <SwiperSlide key={item.name}>
                                <div>
                                    <img
                                        key={item.name}
                                        src={process.env.PUBLIC_URL + item.src}
                                        alt={'logo ' + item.name}
                                        height={item.height}
                                        width={item.width}
                                    >
                                    </img>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </section>
        </>
    )
}