import React, { Component } from 'react'
import propTypes from 'prop-types'

export class UserCard extends Component {

    render() {

        const {name, surename} = this.props.profile;

        return(
            <div id="card" className="d-flex flex-column flex-lg-row align-items-center p-3 card">
                <div className="avatar mb-3 mb-lg-0 mr-lg-5">
                    <img className="avatar__image" src="https://gamehag.com/img/avatar/481777.jpg" alt="user_avatar" />
                </div>
                <div className="text-center text-lg-left">
                    <p className="lead">{name} {surename}</p>
                    <div className="d-flex">
                        <div className="mr-3 text-center">
                            <span className="font-weight-bold">{}</span>
                            <br />
                            <span>подписок</span>
                        </div>
                        <div className="mr-3 text-center">
                            <span className="font-weight-bold">{}</span>
                            <br />
                            <span>подписчиков</span>
                        </div>
                        <div className="text-center">
                            <span className="font-weight-bold">{}</span>
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
        name: propTypes.string,
        surename: propTypes.string,
        following: propTypes.number,
        followers: propTypes.number,
        balance: propTypes.number
    })
};