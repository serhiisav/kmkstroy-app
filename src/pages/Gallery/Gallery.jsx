import './gallery.scss'
import React, { useEffect, useRef, useState } from "react";
import GalleryFullscreen from "../../components/GalleryFullscreen/GalleryFullscreen";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useDispatch, useSelector } from 'react-redux';
import { setIdImage } from '../../store/actions';
import Masonry from 'react-masonry-css';

import { isFirefox, isOpera, isEdge, isChrome, isSamsungBrowser } from 'react-device-detect';


export default function Gallery() {
    const galleryRef = useRef();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);
    const galleryItems = useSelector(state => state.galleryItems);
    const [isSupportFullscreen, setIsSupportFullscreen] = useState(true);
    const [inModalWindow, setInModalWindow] = useState(false);
    const [numberImages, setNumberImages] = useState(8);
    const [classGalleryWrapper, setClassGalleryWrapper] = useState('fullscreen');

    const handle = useFullScreenHandle();

    const breakpointColumnsObj = {
        default: 3,
        800: 2,
        500: 1
    };

    useEffect(() => {
        // if (isFirefox || isOpera || isEdge || isChrome || isSamsungBrowser) {
        if (!isFirefox && !isOpera && !isEdge && !isChrome && !isSamsungBrowser) {
            setClassGalleryWrapper('modal');
            setIsSupportFullscreen(false);
        } else return;
    }, []);

    const handleScreenOpen = () => {
        if (isSupportFullscreen) {
            handle.enter();
        } else {
            setInModalWindow(true);
        }
    }

    const handleScreenClose = () => {
        if (isSupportFullscreen) {
            handle.exit();
        } else {
            setInModalWindow(false);
        }
    }

    return (
        <>
            <section ref={galleryRef} className="section-gallery" id='gallery'>
                <div className='container'>
                    <h1 className='section-gallery-title'>Наші роботи</h1>
                    {isLoading ? <div className="lds-dual-ring"></div> :
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                        >
                            {
                                galleryItems.map((item, index) => ((index < numberImages) &&
                                    <div
                                        className='image-wrapper animate__animated animate__zoomIn animate__delay-1s'
                                        key={item.id}>
                                        <img
                                            onClick={(e) => {
                                                dispatch(setIdImage(item.id));
                                                handleScreenOpen();
                                            }}
                                            className='gallery-image'
                                            src={process.env.PUBLIC_URL + item.img}
                                            alt={item.title}
                                        />
                                        <i className='gallery-zoomIn'>
                                            <svg className='gallery-zoomIn-svg' xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                                        </i>
                                        <div className="gallery-text-content">
                                            <p className='gallery-image-title'>{item.title}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </Masonry>
                    }
                    {galleryItems.length > numberImages &&
                        <button className='gallery-button-load' onClick={() => setNumberImages(numberImages + 8)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            Завантажити більше</button>}
                </div>
                <FullScreen className={handle.active || inModalWindow ? 'fullscreen-active' : null} handle={handle}>
                    <GalleryFullscreen handleScreenClose={handleScreenClose} classGalleryWrapper={classGalleryWrapper} isOpen={handle.active || inModalWindow} isSupportFullscreen={isSupportFullscreen} />
                </FullScreen>
            </section>
        </>
    )
}