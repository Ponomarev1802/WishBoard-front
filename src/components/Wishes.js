import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Wish } from './Wish'
import { connect } from 'react-redux'
import { delWish } from "../actions/Actions";


class Wishes extends Component {

    render() {

        const { delWishAction } = this.props;

        const wishesList = this.props.wishes.map((item)=>(
			<Wish key={item.id} id={item.id} name={item.name} onDelete={delWishAction} />
		));

        return (
            <div id="wishes" className="p-3 bg-white card">
                <div className="nav nav-tabs">
                    <div className="nav-item">
                        <a className="nav-link active" href="#latest">Последние</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link" href="#active">Активные</a>
                    </div>
                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#dropdown">Категории</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#action">Action</a>
                            <a className="dropdown-item" href="#another-action">Another action</a>
                            <a className="dropdown-item" href="#something">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#separated-link">Separated link</a>
                        </div>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link" href="#completed">Завершенные</a>
                    </div>
                </div>
                {wishesList}
            </div>
        );
    }

}

const mapStateToProps = store => {
	return {
		wishes: store.wishes
	}
};

const mapDispatchToProps = dispatch => {
    return {
        delWishAction: id => dispatch(delWish(id))
    }
};

Wishes.propTypes = {
	wishes: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishes);
