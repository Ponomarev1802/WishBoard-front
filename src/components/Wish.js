import React from 'react';
import PropTypes from 'prop-types';

export const Wish = (props) => {

    const {name, onDelete} = props;

    return (
            <div className="d-flex">
                <span className="btn btn-light flex-grow-1 mr-1">{name}</span>
                <span className="btn btn-light mr-1" onClick={() => { onDelete(props.id) }}><i className="far fa-trash-alt"/></span>
                <span className="btn btn-light"><i className="fas fa-ellipsis-h"/></span>
            </div>
    );

};

Wish.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired
};