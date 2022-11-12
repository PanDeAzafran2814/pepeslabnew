import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

AboutItem.propTypes = {
    item: PropTypes.object,
};

function AboutItem(props) {
    const [t, i18n] = useTranslation("global")

    const {item} = props;

    return (
        <div className={`box-text corner-box`}>
            <div className="h7">{t("About.PFirst")}</div>
            <p>{t("About.PSecond")}</p>
        </div>
    );
}

export default AboutItem;