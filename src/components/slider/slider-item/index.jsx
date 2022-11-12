import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss' ;
// import { Modal } from "react-bootstrap";
import './styles.scss'
import { useTranslation } from 'react-i18next';

import bgImg1 from '../../../assets/images/background/bg-1.jpg';
import img1 from '../../../assets/images/common/itemslider.png';


SliderItem.propTypes = {
    item : PropTypes.object,
};

function SliderItem(props) {
    const {item} = props;
    const [t, i18n]= useTranslation("global")
    const [isOpen, setOpen] = useState(false)

    // const [modalShow, setModalShow] = useState(false);

    return (
        <div className={`box-slider`}>
            <img className='bg-slider' src={bgImg1} alt="EMPIRE" />
            <div className="box-slider__main">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="content-box">
                                <h1 className="title">{t("Home.Welcome")}</h1>
                                <p className="sub-title">{t("Home.Message")}</p>
                                <div className="wrap-btn">
                                    <Link to="#" className="tf-button-st2 btn-effect" data-toggle="modal" data-target="#popup_bid"><span className="effect">{t("Home.Btn")}</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="image">
                                <img src={img1} alt="EMPIRE" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="i7EMACWuErA" onClose={() => setOpen(false)} />
        </div>
    );
}

export default SliderItem;