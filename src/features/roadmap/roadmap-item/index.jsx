import React from 'react';
import PropTypes from 'prop-types';

RoadMapItem.propTypes = {
    item: PropTypes.object,
};

function RoadMapItem(props) {
    const {item} = props;
    return (
        <div className={`rm-box`} data-aos="zoom-in" data-aos-duration="1200">
            <div className={`corner-box`}>
                <h5>{props.title}</h5>
                <ul>
                    <li>{props.subtitle}</li>
                </ul>
            </div>
        </div>
    );
}

export default RoadMapItem;