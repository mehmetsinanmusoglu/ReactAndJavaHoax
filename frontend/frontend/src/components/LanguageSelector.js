import React from 'react';
import { withTranslation } from 'react-i18next';
import { changeLanguage } from '../api/apiCalls';

const LanguageSelector = (props) => {
    const onChangeLanguage = language => {
        const { i18n } = props;
        i18n.changeLanguage(language);
        changeLanguage(language);
    };
    return (
        <div className='container'>
            <img src="https://www.countryflagicons.com/FLAT/24/TR.png" alt="Tusrkesh Flag" onClick={() => onChangeLanguage('tr')} style={{ cursor: 'pointer' }} />
            <img src="https://www.countryflagicons.com/FLAT/24/US.png" alt="USA Flag" onClick={() => onChangeLanguage('en')} style={{ cursor: 'pointer' }} />
        </div>
    );
};

export default withTranslation()(LanguageSelector);
