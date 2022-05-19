import './scrollToTop.scss';
import { useEffect, useState } from 'react';
import { animateScroll as scroll } from "react-scroll";
import { useSelector } from 'react-redux';


const ScrollToTop = () => {
    const [visibility, setVisibility] = useState(false);
    const hamburgerOpen = useSelector(state => state.hamburgerOpen);

    const onScroll = () => {
        if (window.scrollY > 500) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);


    return (
        <>
            {!hamburgerOpen &&
                <svg
                    onClick={() => {
                        scroll.scrollToTop();
                    }}
                    className={visibility ? 'button-scrollToTop active' : 'button-scrollToTop'}
                    xmlns="http://www.w3.org/2000/svg"
                    height="48px"
                    viewBox="0 0 24 24"
                    width="48px"
                    fill="#ffffffcc">
                    <path d="M0 0h24v24H0V0z" fill="none" /><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" />
                </svg>
            }
        </>
    )

}

export default ScrollToTop;