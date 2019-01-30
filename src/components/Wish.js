import React from 'react';
import PropTypes from 'prop-types';

export const Wish = props => {

    const {onDelete} = props;
    const {id, title} = props.data;

    return (
        <div className="d-flex">
            <span className="btn btn-light flex-grow-1 mr-1">{title}</span>
            <span className="btn btn-light mr-1" onClick={() => { onDelete(id) }}><i className="far fa-trash-alt"/></span>
            <span className="btn btn-light"><i className="fas fa-ellipsis-h"/></span>
        </div>
    );

};

Wish.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
    }),
	onDelete: PropTypes.func.isRequired
};