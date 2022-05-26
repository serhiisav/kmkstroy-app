import React, { useState, useEffect } from 'react';
import './toggleLanguage.scss';
import { useTranslation } from 'react-i18next';
// import i18next from 'i18next';
// import i18n from '../../i18n';


export default function ToggleLanguage() {
    const [isChecked, setIsChecked] = useState(false);
    const { i18n } = useTranslation();

    const setLanguage = (e) => {
        // localStorage.setItem('isChecked', JSON.stringify(e.target.checked));
        setIsChecked(!isChecked);
        if (e.target.checked) {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('ua');
        }
    }

    useEffect(() => {
        // let localLang = JSON.parse(localStorage.getItem('isChecked'));
        // if (localLang !== null && localLang !== isChecked) {
        //     // console.log(i18n.resolvedLanguage);
        //     setIsChecked(localLang);

        if (i18n.resolvedLanguage === 'en') {
            setIsChecked(true);
            // console.log('en ', i18n.resolvedLanguage);
        }
    }, []);

    // useEffect(() => {
    //     if (isChecked && i18n.resolvedLanguage !== 'en') {
    //         i18n.changeLanguage('en');
    //         console.log('en');
    //     }
    //     if (!isChecked && i18n.resolvedLanguage !== 'ua') {
    //         i18n.changeLanguage('ua');
    //         console.log('ua');

    //     }
    // }, [isChecked])

    return (
        <>
            <label className='switch'>
                <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={setLanguage}
                />
                <span className='slider' />
            </label>
        </>
    );
}