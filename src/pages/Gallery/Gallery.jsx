import './gallery.scss'
import React, { useEffect, useRef, useState } from "react";
import GalleryFullscreen from "../../components/GalleryFullscreen/GalleryFullscreen";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useDispatch, useSelector } from 'react-redux';
import { setIdImage } from '../../store/actions';
import { isMobile } from 'react-device-detect';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { useTranslation } from "react-i18next";




export default function Gallery() {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);
    const galleryItems = useSelector(state => state.galleryItems);
    const [inModalWindow, setInModalWindow] = useState(false);
    const [numberImages, setNumberImages] = useState(6);
    const [isLoadingMore, setIsloadingMore] = useState(false);
    const [classGalleryWrapper, setClassGalleryWrapper] = useState('fullscreen');
    const [isModal, setIsModal] = useState(false);
    const handle = useFullScreenHandle();
    const { t } = useTranslation();
    const galleryRef = useRef(null);


    useEffect(() => {
        // if (!isMobile) {
        if (isMobile) {
            setClassGalleryWrapper('modal');
            setIsModal(true);
        } else return;
    }, []);


    const loadMoreImages = () => {
        setIsloadingMore(true);
        // dispatch(addImagesStarted());
        setTimeout(() => {
            setNumberImages(numberImages + 6);
            setIsloadingMore(false);

        }, 1000)
    }

    const deleteImages = () => {
        setNumberImages(6);
        window.scrollTo({ behavior: "smooth", top: galleryRef.current.offsetTop - 82 });
    }

    const handleScreenOpen = () => {
        if (!isModal) {
            handle.enter();
        } else {
            setInModalWindow(true);
        }
    }

    const handleScreenClose = () => {
        if (!isModal) {
            handle.exit();
        } else {
            setInModalWindow(false);
        }
    }

    return (
        <>
            <section ref={galleryRef} className="section-gallery" id='gallery'>
                <div className='container'>
                    <h1 className='section-gallery-title'>{t('gallery.title')}</h1>
                    <Box sx={{ width: 1, minHeight: 250, overflow: 'hidden' }}>
                        <Masonry sx={{ width: 'auto' }} columns={{ xs: 1, sm: 2, md: 3 }} spacing={{ xs: 1, sm: 2, md: 3 }}>
                            {
                                galleryItems.slice(0, numberImages).map((item, index) =>
                                    <div
                                        className='image-wrapper animate__animated animate__zoomIn animate__delay-1s'
                                        key={item.id}>
                                        <img
                                            onClick={(e) => {
                                                dispatch(setIdImage(item.id));
                                                handleScreenOpen();
                                            }}
                                            className='gallery-image'
                                            src={process.env.PUBLIC_URL + item.img540}
                                            alt={item.title}
                                            width='540'
                                        />
                                        <i className='gallery-zoomIn'>
                                            <svg className='gallery-zoomIn-svg' xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                                        </i>
                                        <div className="gallery-text-content">
                                            <p className='gallery-image-title'>{item.title}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </Masonry>
                    </Box>
                    <div className='gallery-button-wrapper'>
                        {galleryItems.length > numberImages &&
                            <button
                                className='gallery-button button-load'
                                onClick={loadMoreImages}
                                disabled={isLoadingMore}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                {isLoadingMore ? t("gallery.button-isLoading") : t("gallery.button-load")}
                            </button>
                        }
                        {numberImages > 6 &&
                            <button
                                className='gallery-button button-delete'
                                onClick={deleteImages}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                {t("gallery.button-delete")}
                            </button>}
                    </div>
                </div>
                <FullScreen className={(!handle.active && !inModalWindow) && `${classGalleryWrapper}-closed`} handle={handle}>
                    <GalleryFullscreen
                        handleScreenClose={handleScreenClose}
                        isOpen={handle.active || inModalWindow}
                        isModal={isModal}
                    />
                </FullScreen>
            </section>
        </>
    )
}