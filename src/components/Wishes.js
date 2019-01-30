import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Wish} from './Wish'
import {delWish} from "../actions/Actions";

function Wishes(props) {

    const {wishes, delWishAction} = props;

    const delWish = id => {
        console.log(id);
        fetch('/delWish', {
            method: 'POST',
            body: JSON.stringify({id: id})
        })
            .then(res => res.json())
            .then(res => {
                if (!res.status.err) {
                    console.log('Wishes', wishes);
                    let newWishes = wishes.filter(item => item.id !== id);
                    console.log('nextWishes', newWishes);
                    delWishAction(newWishes);
                } else {
                    alert('Ошибка!');
                }
            })
    };

    const wishesList = wishes.map(item => (
        <Wish key={item.id} data={item} onDelete={delWish} />
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