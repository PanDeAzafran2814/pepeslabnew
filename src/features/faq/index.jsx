import React , {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import AccordionItem from './accordion-item';

import { useTranslation } from 'react-i18next';


FAQ.propTypes = {
    data: PropTypes.array,
};

function FAQ(props) {

    const {data} = props;
    const [t, i18n] = useTranslation("global")

    const [dataBlock] = useState({
        subtitle: 'FAQs',
        title: 'Looking for answers?'
    })

    return (
        <section className="tf-section faq" id='Faq'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title mb-58" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub-title">{dataBlock.subtitle}</p>
                            <h4 className="title">{t("Faq.Tittle")}</h4>
                        </div>
                    </div>
                    <div className="col-md-12">
                        
                        <div className="flat-accordion" data-aos="fade-up" data-aos-duration="800">

                            <AccordionItem tittle={t("Faq.Question1")} content={t("Faq.Anw1")} show/>
                            <AccordionItem tittle={t("Faq.Question2")} content={t("Faq.Anw2")}/>
                            <AccordionItem tittle={t("Faq.Question3")} content={t("Faq.Anw3")}/>
                            <AccordionItem tittle={t("Faq.Question4")} content={t("Faq.Anw4")}/>
                            <AccordionItem tittle={t("Faq.Question5")} content={t("Faq.Anw5")}/>
                            <AccordionItem tittle={t("Faq.Question6")} content={t("Faq.Anw6")}/>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;