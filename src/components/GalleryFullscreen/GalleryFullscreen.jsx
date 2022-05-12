import './galleryFullscreen.scss'
import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectFade } from "swiper";

import "swiper/css";
import 'swiper/css/bundle'
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useSelector } from 'react-redux';


export default function GalleryFullscreen() {
    const isLoading = useSelector(state => state.isLoading);
    const galleryItems = useSelector(state => state.galleryItems);
    const idImage = useSelector(state => state.idImage);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [swiper, setSwiper] = useState(null);


    const getIndexSlide = (id) => {
        if (!isNaN(id) && typeof id === "number" && Number.isInteger(id) && Number.isFinite(id) && id >= 0) {
            const indexSlide = parseInt(Math.abs(id - galleryItems.length - 1), 10);
            return indexSlide;
        } else {
            console.log('incorrect id item');
        }
    }

    useEffect(() => {
        if (swiper) {
            swiper.slideTo(getIndexSlide(idImage), 700, true);
        }
        return;
    }, [swiper, idImage]);


    return (
        <>
            {isLoading ? <div className="lds-dual-ring"></div> :
                <>
                    <Swiper
                        style={{
                            //     "--swiper-navigation-color": "#fff",
                            //     "--swiper-pagination-color": "#fff",
                            "--swiper-navigation-size": "60px",
                        }}
                        loop={true}
                        onSwiper={setSwiper}
                        speed={400}
                        spaceBetween={10}
                        navigation
                        effect="fade"
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        modules={[Navigation, Thumbs, EffectFade]}
                        className="mySwiper"
                    >
                        {galleryItems.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div>
                                    <img
                                        className='fullscreen-gallery-image'
                                        src={process.env.PUBLIC_URL + item.img}
                                        alt={item.title}
                                    />
                                    <div className="mySwiper-text-content">
                                        <p className='mySwiper-image-title'>{item.title}</p>
                                        <p className='mySwiper-image-description'>{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className='fullscreen-gallery-thumbs-up'>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper-thumbs"
                            breakpoints=
                            {
                                {
                                    835: { slidesPerView: 5 }
                                }
                            }
                        >
                            {
                                galleryItems.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div>
                                            <img
                                                className='thumbs-image'
                                                src={process.env.PUBLIC_URL + item.thumbs}
                                                alt={item.title}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </>
            }
        </>
    );
}

