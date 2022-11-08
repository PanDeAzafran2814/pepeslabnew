import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

ProjectItem.propTypes = {
    item: PropTypes.object,
};

function ProjectItem(props) {

    const {item} = props;

    return (
        <div className="img-box">
            <img src={item.media[0].gateway} alt="crybox" />
            <div className="content">
                <a href={`https://opensea.io/assets/ethereum/0x0046ac5ad2de7d5c9aebecf67751cb7e0865a0eb/${(item.tokenUri.raw).substr(54,54)}/`}>{item.title}</a>
            </div>
        </div>
    );
}

export default ProjectItem;