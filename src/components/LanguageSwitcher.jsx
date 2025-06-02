import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div classname = "language-switcher-wrapper" >
            <button onClick={() => changeLanguage('no')} aria-label="Norsk">NO</button>
            <button onClick={() => changeLanguage('en')} aria-label="English">EN</button>
        </div>
    );
}

export default LanguageSwitcher;
