import './gallery.scss'
import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Controller, FreeMode, Navigation, Thumbs, EffectFade } from "swiper";

import "swiper/css";
import 'swiper/css/bundle'

import { axios } from 'axios';
import { getGallery } from '../../api/getGallery';


// const SwiperButtonNext = ({ children }) => {
//     const swiper = useSwiper();

//     return <button onClick={() => swiper.slideTo(5, 300, true)}>{children}</button>;
// };

export default function Gallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    const [galleryItems, setGalleryItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [swiper, setSwiper] = useState(null);


    useEffect(() => {
        getGallery().then(res => {
            setGalleryItems(res.data);
            setIsLoading(false);

        })

    }, [])



    // console.log(galleryItems);
    const slideTo = (index) => {
        if (swiper) {
            swiper.slideTo(index, 1000, true);
        }
        return;
    };
    return (
        <>
            <button onClick={() => slideTo(2)}>change slide</button>
            <section className='section-gallery'>
                <div className="container">
                    {isLoading ? <div className="lds-dual-ring"></div> :
                        <div className='gallery-wrapper'>
                            <Swiper
                                style={{
                                    "--swiper-navigation-color": "#fff",
                                    "--swiper-pagination-color": "#fff",
                                    "--swiper-navigation-size": "24px",
                                }}
                                loop={true}
                                // onSwiper={setFirstSwiper}
                                onSwiper={setSwiper}
                                speed={600}
                                // controller={{ control: secondSwiper }}
                                spaceBetween={10}
                                navigation={true}
                                effect="fade"
                                // height={300}

                                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                modules={[FreeMode, Navigation, Thumbs, Controller, EffectFade]}
                                className="mySwiper2"
                            >
                                {galleryItems.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div>
                                            <img
                                                className='gallery-image'
                                                src={process.env.PUBLIC_URL + item.img}
                                                // width="300"
                                                // srcSet={`${item.img}}`}
                                                alt={item.title}
                                            // loading="lazy"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                // controller={{ control: firstSwiper }}
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={5}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs, Controller]}
                                className="mySwiper"
                            >
                                {galleryItems.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div>
                                            <img
                                                className='gallery-thumbs'
                                                src={process.env.PUBLIC_URL + item.thumbs}
                                                // width="300"
                                                // height="200"
                                                // srcSet={`${item.img}}`}
                                                alt={item.title}
                                            // loading="lazy"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    }
                </div>
            </section>
        </>
    );
}



// export default Projects;