
import React from 'react';

import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();

    return (
        <div>
            <p>{t('home_txt1')}</p>
        </div>
    );
}

export default Home;