import './gallery.scss'
import React, { useCallback, useEffect, useRef, useState } from "react";
import GalleryFullscreen from "../../components/GalleryFullscreen/GalleryFullscreen";
import fscreen from 'fscreen';
import { useDispatch, useSelector } from 'react-redux';
import { setIdImage } from '../../store/actions';
import Masonry from 'react-masonry-css'



export default function Gallery() {
    const galleryRef = useRef();

    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.isLoading);
    const galleryItems = useSelector(state => state.galleryItems);
    const [inFullscreenMode, setInFullscreenMode] = useState(false);

    const [numberImages, setNumberImages] = useState(9);

    const handleFullscreenChange = useCallback(() => {
        if (fscreen.fullscreenElement !== null) {
            setInFullscreenMode(true);
        } else {
            setInFullscreenMode(false);
        }
    }, []);

    const handleFullscreenError = useCallback((e) => {
        console.log('Fullscreen Error', e);
    }, []);

    const breakpointColumnsObj = {
        default: 3,
        800: 2,
        500: 1
    };

    useEffect(() => {
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
                                            onClick={() => {
                                                dispatch(setIdImage(item.id))
                                                    ;
                                                toggleFullscreen();
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
                    <div ref={appElement}>
                        {inFullscreenMode ?
                            <div className='gallery-fullscreen active'>
                                <div className='fullscreen-wrapper'>
                                    <img
                                        className='button-fullscreen-close'
                                        onClick={toggleFullscreen}
                                        src={process.env.PUBLIC_URL + '/img/gallery-minimize.svg'} alt='close'
                                    />
                                    <GalleryFullscreen />
                                </div>
                            </div> : null}
                    </div>
                    {galleryItems.length > numberImages &&
                        <button className='gallery-button-load' onClick={() => setNumberImages(numberImages + 9)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            Завантажити більше</button>}
                </div>
            </section>
        </>
    )
}