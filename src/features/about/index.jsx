import React , {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import Button from '../../components/button';
import AboutItem from './about-item';
import { useTranslation } from 'react-i18next';

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {
    const [t, i18n] = useTranslation("global")

    const {data} = props;

    const [dataBlock] = useState(
        {
            subtitle : 'About us',
            title: 'WELCOME TO PEPE’S LAB',
            desc : 'Pepe’s Lab represents a project that is building a strong NFT community within the music entertainment industry. Pepe’s Lab branded ventures will include live concerts, events, festivals, unique merchandise, and more. Pepe’s Lab will have real utilities for both the physical World and the Metaverse.'
        }
    )

    return (
        <section className="tf-section tf-about" id='About'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-md-12">
                        <div className="content-about mobie-40" data-aos="fade-up" data-aos-duration="800">
                            <div className="tf-title st2">
                                <p className="h8 sub-title">{t("About.Tittle")}</p>
                                <h4 className="title">{t("About.SubTittle")}</h4>
                            </div>
                            <p>{t("About.SubTittle2")}</p>
                                <Button title={t("About.Btn")} path='/' />
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-12">
                        <div className="wrap-about" data-aos="fade-up" data-aos-duration="800">
                            <AboutItem/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;