import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Main} from "../components/Main";
import {Header} from '../components/Header';
import {regUser, getUser, authUser} from "../actions/UserActions";
import {SignInForm} from "../components/Forms/SignIn";

class App extends Component {

    componentDidMount() {
        const {getUser} = this.props;
        getUser();
    }

    render() {
        const  {profile, wishes, authUser} = this.props;
        return (
            <div>
                <Header />
                { Object.keys(profile).length ? <Main profile={profile} wishes={wishes} /> : <SignInForm onSubmit={authUser} /> }
            </div>
        );
    }
}

const mapStateToProps = store => {
	return {
		profile: store.profile
	}
};

const mapDispatchToProps = dispatch => {
    return {
        regUser: profile => dispatch(regUser(profile)),
        authUser: data => dispatch(authUser(data)),
        getUser: data => dispatch(getUser(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);