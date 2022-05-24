import './galleryFullscreen.scss'
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { disableBodyScroll, clearAllBodyScrollLocks, enableBodyScroll } from 'body-scroll-lock';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, FreeMode, Navigation, Thumbs, } from "swiper";
import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styled from 'styled-components';


const ThumbsStyled = styled.div`
    & .mySwiper-thumbs{
        top:${props => props.top}px;
    }
    &::after {
    content: "";
    position: absolute;
    top: ${props => props.top}px;
    left: 50%;
    transform: translate(-50%,-65%);
    width: 260px;
    height: 15px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    background-color: #ffffff90;
  };
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: ${props => props.top}px;
    transform: translate(-50%, -105%);
    background-image: url(${process.env.PUBLIC_URL + "/img/gallery-chevron-up.svg"});
    width: 60px;
    height: 60px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
    `;

export default function GalleryFullscreen({ handleScreenClose, isOpen, isModal }) {
    const isLoading = useSelector(state => state.isLoading);
    const galleryItems = useSelector(state => state.galleryItems);
    const idImage = useSelector(state => state.idImage);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [swiper, setSwiper] = useState(null);
    const [indexSlide, setIndexSlide] = useState(0);
    const [topThumbs, setTopThumbs] = useState(0);
    const modalRef = useRef(null);
    const thumbsRef = useRef(null);


    useEffect(() => {
        if (swiper && isOpen) {
            if (!isNaN(idImage) && typeof idImage === "number" && Number.isInteger(idImage) && Number.isFinite(idImage) && idImage >= 0) {
                setIndexSlide(parseInt(Math.abs(idImage - galleryItems.length), 10));
            } else {
                console.log('incorrect id item');
            }
            swiper.slideTo(indexSlide, 700, true);
        }
        return;
    }, [swiper, idImage, indexSlide, galleryItems, isOpen]);

    const getHeightAddressBar = () => {
        let elHeight = modalRef.current.offsetHeight;
        if (elHeight) {
            setTimeout(() => {
                setTopThumbs(elHeight - window.innerHeight);
            }, 0)
        }
    }

    useEffect(() => {
        if (isOpen) {
            disableBodyScroll(modalRef);
        } else {
            enableBodyScroll(modalRef);
        }
        if (isOpen && isModal) {
            getHeightAddressBar();
            window.addEventListener("resize", getHeightAddressBar);
        }
        return () => {
            clearAllBodyScrollLocks();
            window.removeEventListener("resize", getHeightAddressBar);
        }
    }, [isOpen])

    return (
        <>
            {isLoading ? <div className="lds-dual-ring"></div> :
                <>
                    <div ref={modalRef} className={isModal ? 'gallery-modal' : 'gallery-fullscreen'}>
                        <img
                            className={`button-swiper-close`}
                            onClick={handleScreenClose}
                            src={process.env.PUBLIC_URL + '/img/gallery-minimize.svg'} alt='close'
                        />
                        <Swiper
                            style={{
                                "--swiper-navigation-size": "60px",
                            }}
                            loop={true}
                            onSwiper={setSwiper}
                            speed={800}
                            slidesPerView={1}
                            loopedSlides={galleryItems.length}
                            maxBackfaceHiddenSlides={5}
                            navigation
                            effect='fade'
                            fadeEffect={{
                                crossFade: true
                            }}
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
                        <ThumbsStyled
                            ref={thumbsRef} className='fullscreen-gallery-thumbs-up'
                            top={-topThumbs}
                        >
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={3}
                                freeMode={true}
                                grabCursor
                                loopedSlides={galleryItems.length}
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
                        </ThumbsStyled>
                    </div>
                </>
            }
        </>
    );
}

