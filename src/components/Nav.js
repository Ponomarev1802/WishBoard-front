import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWish } from "../actions/Actions";

export class Nav extends Component {
    render() {
        const {addWish} = this.props;
        return (
            <aside>
                <nav className="d-none d-lg-block flex-column nav">
                    <a className="nav-link active" href="#mypage">Моя Страница</a>
                    <a className="nav-link" href="#messages">Сообщения</a>
                    <a className="nav-link" href="#news">Новости</a>
                    <a className='nav-link' href='#newWish' onClick={addWish}>Добавить желание</a>
                </nav>
            </aside>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addWish: data => dispatch(addWish(data))
});

export default connect(() => {}, mapDispatchToProps)(Nav);