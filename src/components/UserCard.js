import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import {
    Image,
    Statistic
} from 'semantic-ui-react';

import { getUser } from "../actions/UserActions";

class UserCard extends Component {

    render() {

        const {name, surname, follows, followers} = this.props.profile;

        return (
            <React.Fragment>
                <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                       size='tiny'
                       circular
                       centered
                       bordered />
                <p>{name} {surname}</p>
                <Statistic.Group size='mini'>
                    <Statistic>
                        <Statistic.Value>{followers}</Statistic.Value>
                        <Statistic.Label>Followers</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>{follows}</Statistic.Value>
                        <Statistic.Label>Following</Statistic.Label>
                    </Statistic>
                </Statistic.Group>
                    {/*<div className="d-flex">*/}
                        {/*<div className="mr-3 text-center">*/}
                            {/*<Statistic size='mini'>*/}
                                {/*<Statistic.Value>{follows}</Statistic.Value>*/}
                                {/*<Statistic.Label>Followers</Statistic.Label>*/}
                            {/*</Statistic>*/}
                        {/*</div>*/}
                        {/*<div className="mr-3 text-center">*/}
                            {/*<span className="font-weight-bold">{followers}</span>*/}
                            {/*<br />*/}
                            {/*<span>подписчиков</span>*/}
                        {/*</div>*/}
                        {/*<div className="text-center">*/}
                            {/*<span className="font-weight-bold">0</span>*/}
                            {/*<br />*/}
                            {/*<span>желаний</span>*/}
                        {/*</div>*/}
                    {/*</div>*/}
            </React.Fragment>
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