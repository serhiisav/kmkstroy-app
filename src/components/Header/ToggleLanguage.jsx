import React, { useState, useEffect } from 'react';
import './toggleLanguage.scss';
import i18next from 'i18next';


export default function ToggleLanguage() {
    const [isChecked, setIsChecked] = useState(false);

    const setLanguage = () => {
        setIsChecked(!isChecked);
        localStorage.setItem('isChecked', JSON.stringify(!isChecked));
    }

    useEffect(() => {
        let localLang = JSON.parse(localStorage.getItem('isChecked'));
        if (localLang !== null) {
            setIsChecked(localLang);
        }
    }, []);

    useEffect(() => {
        if (isChecked) {
            i18next.changeLanguage('en');
        } else {
            i18next.changeLanguage('ua');
        }
    }, [isChecked])

    return (
        <>
            <label className='switch'>
                <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={() => {
                        setLanguage();
                    }}
                />
                <span className='slider' />
            </label>
        </>
    );
}