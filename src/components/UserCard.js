import React, { Component } from 'react'
import propTypes from 'prop-types'

export class UserCard extends Component {

    render() {

        const {name, surname, following, followers, balance} = this.props.profile;

        return(
            <div id="card" className="d-flex flex-column flex-lg-row align-items-center p-3 card">
                <div className="avatar mb-3 mb-lg-0 mr-lg-5">
                    <img className="avatar__image" src="https://gamehag.com/img/avatar/481777.jpg" alt="user_avatar" />
                </div>
                <div className="text-center text-lg-left">
                    <p className="lead">{name} {surname}</p>
                    <div className="d-flex">
                        <div className="mr-3 text-center">
                            <span className="font-weight-bold">{following}</span>
                            <br />
                            <span>подписок</span>
                        </div>
                        <div className="mr-3 text-center">
                            <span className="font-weight-bold">{followers}</span>
                            <br />
                            <span>подписчиков</span>
                        </div>
                        <div className="text-center">
                            <span className="font-weight-bold">{balance}</span>
                            <br />
                            <span>баланс</span>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

UserCard.propTypes = {
    profile: propTypes.shape({
        name: propTypes.string.isRequired,
        surname: propTypes.string,
        following: propTypes.number.isRequired,
        followers: propTypes.number.isRequired,
        balance: propTypes.number.isRequired
    })
};