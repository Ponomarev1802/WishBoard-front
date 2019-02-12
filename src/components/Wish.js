import React from 'react';
import PropTypes from 'prop-types';

import {
    Button,
    Icon
} from 'semantic-ui-react';

export const Wish = props => {

    const {onDelete} = props;
    const {id, title} = props.data;

    return (
        <div className="d-flex">
            <span className="btn btn-light flex-grow-1 mr-1">{title}</span>
            <Button
                icon
                onClick={() => { onDelete(id) }}>
                <Icon name='trash' />
            </Button>
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