import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'react-bootstrap-accordion';

AccordionItem.propTypes = {
    item: PropTypes.object,
};

function AccordionItem(props) {
    const {item} = props;

    return (
        <Accordion title={props.tittle} show={props.show}>
            <p className="toggle-content">{props.content}</p>
        </Accordion>
    );
}

export default AccordionItem;