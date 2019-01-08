import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {delWish} from '../actions/wishesActions'


 export class Wish extends React.Component{
	onBtnClick = e => {
		this.props.delWish(this.props.id);	
	};
    render(){
        const {id, name} = this.props;
        return(
            <div className="d-flex">
                <span className="btn btn-light flex-grow-1 mr-1">{name}</span>
                <span className="btn btn-light mr-1"><i className="far fa-trash-alt" onClick = {this.onBtnClick}/></span>
                <span className="btn btn-light"><i className="fas fa-ellipsis-h"/></span>
            </div>
        );
    }
}
Wish.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	delWish: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    delWish: delWish,
}

export default connect (null, mapDispatchToProps)(Wish)