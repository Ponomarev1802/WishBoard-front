import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import Main from "../../pages/Main";
import {getUser} from "../../actions/UserActions";
import Login from '../../pages/Login';
import { Loader } from 'semantic-ui-react';

import './App.css'

class App extends Component {

    componentDidMount() {
        if (!this.props.init) {
            const {getUser} = this.props;
            getUser();
        }
    }

    render() {
        const {authStatus} = this.props;
        return (
            <Fragment>
                { !this.props.init ? (!authStatus ? <Main /> : <Login />) : <Loader active /> }
            </Fragment>
        );
    }

}

const mapStateToProps = store => ({
    init: store.app.init,
    authStatus: store.user.authStatus
});

const mapDispatchToProps = dispatch => ({
    getUser: data => dispatch(getUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);