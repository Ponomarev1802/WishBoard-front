import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Profile from './Profile';

import { getUser } from "../actions/UserActions";

class UserCard extends Component {

    render() {

        const {profile} = this.props;

        return (
            <Profile name={profile.name}
                     surname={profile.surname}
                     photo='https://react.semantic-ui.com/images/wireframe/square-image.png'
                     follows={profile.follows}
                     followers={profile.followers}
            />
        );

    }

}

const mapStateToProps = store => ({
    profile: store.user.profile
});

const mapDispatchToProps = dispatch => ({
    getUser: data => dispatch(getUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);

UserCard.propTypes = {
    profile: propTypes.shape({
        name: propTypes.string.isRequired,
        surname: propTypes.string,
        following: propTypes.number,
        followers: propTypes.number,
        balance: propTypes.number
    })
};