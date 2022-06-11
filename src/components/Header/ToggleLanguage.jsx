import React, { useState, useEffect } from 'react';
import './toggleLanguage.scss';
import { useTranslation } from 'react-i18next';


export default function ToggleLanguage() {
    const [isChecked, setIsChecked] = useState(false);
    const { i18n } = useTranslation();

    const setLanguage = (e) => {
        setIsChecked(!isChecked);
        if (e.target.checked) {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('ua');
        }
    }

    useEffect(() => {
        if (i18n.resolvedLanguage === 'en') {
            setIsChecked(true);
        }
    }, []);


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