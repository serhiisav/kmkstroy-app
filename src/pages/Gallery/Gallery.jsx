import './galleryFullscreen.scss'
import React, { useState, useEffect, useCallback, useRef } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import 'swiper/css/bundle'
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { getGallery } from '../../api/getGallery';
import fscreen from 'fscreen';


export default function Gallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [galleryItems, setGalleryItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [swiper, setSwiper] = useState(null);
    const [inFullscreenMode, setInFullscreenMode] = useState(false);

    useEffect(() => {
        getGallery().then(res => {
            setGalleryItems(res.data);
            setIsLoading(false);
        })
    }, [])

    const slideTo = (index) => {
        if (thumbsSwiper) {
            thumbsSwiper.slideTo(index, 1000, true);
        }
        return;
    };

    // useEffect(() => {
    //     if (swiper) {
    //         swiper.slideTo(index, 1000, true);
    //     }
    //     return;
    // }, [])

    const handleFullscreenChange = useCallback((e) => {
        if (fscreen.fullscreenElement !== null) {
            setInFullscreenMode(true);
        } else {
            setInFullscreenMode(false);
        }
    }, []);

    const handleFullscreenError = useCallback((e) => {
        console.log('Fullscreen Error', e);
    }, []);

    React.useEffect(() => {
        if (fscreen.fullscreenEnabled) {
            fscreen.addEventListener(
                'fullscreenchange',
                handleFullscreenChange,
                false,
            );
            fscreen.addEventListener('fullscreenerror', handleFullscreenError, false);
            return () => {
                fscreen.removeEventListener('fullscreenchange', handleFullscreenChange);
                fscreen.removeEventListener('fullscreenerror', handleFullscreenError);
            };
        }
    });

    const appElement = useRef(null);

    const toggleFullscreen = useCallback(() => {
        if (inFullscreenMode) {
            fscreen.exitFullscreen();
        } else {
            fscreen.requestFullscreen(appElement.current);
        }
    }, [inFullscreenMode]);

    return (
        <>
            <button onClick={() => { slideTo(2); toggleFullscreen(); }}>FullScreen</button>
            <section className='section-gallery'>

                {/* <div className="container"> */}
                {isLoading ? <div className="lds-dual-ring"></div> :
                    <div ref={appElement} className='gallery-wrapper'>
                        <img
                            className='button-fullscreen-close'
                            onClick={toggleFullscreen}
                            src={process.env.PUBLIC_URL + '/img/gallery-minimize.svg'} alt='close'
                        />
                        <Swiper
                            style={{
                                //     "--swiper-navigation-color": "#fff",
                                //     "--swiper-pagination-color": "#fff",
                                "--swiper-navigation-size": "60px",
                            }}
                            loop={true}
                            onSwiper={setSwiper}
                            speed={600}
                            spaceBetween={10}
                            navigation
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            modules={[FreeMode, Navigation, Thumbs, Controller]}
                            className="mySwiper2"
                        >
                            {galleryItems.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div>
                                        <img
                                            className='gallery-image'
                                            src={process.env.PUBLIC_URL + item.img}
                                            alt={item.title}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className='gallery-thumbs-up'>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={3}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs, Controller]}
                                className="mySwiper"
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
                                                    className='gallery-thumbs'
                                                    src={process.env.PUBLIC_URL + item.thumbs}
                                                    alt={item.title}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                }
                {/* </div> */}
            </section>
        </>
    );
}

