import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Main} from "../components/Main";
import {Header} from '../components/Header';
import {getUser} from "../actions/UserActions";
import Login from './Login';

class App extends Component {

    componentDidMount() {
        const {getUser} = this.props;
        getUser();
    }

    render() {
        const  {profile} = this.props;
        return (
            <div>
                <Header />
                { Object.keys(profile).length ?
                    <Main />
                    :
                    <Login />
                }
            </div>
        );
    }
}

const mapStateToProps = store => {
	return {
		profile: store.profile
	}
};

const mapDispatchToProps = dispatch => ({
    getUser: data => dispatch(getUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);