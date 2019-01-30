import React, { Component } from 'react';
import {connect} from 'react-redux';
import {SignInForm} from "../../components/Forms/SignIn";
import {authUser} from "../../actions/UserActions";

class Login extends Component {
    render() {
        const {authUser} = this.props;
        return (
            <div className='container text-center'>
                <h1>Please LogIn</h1>
                <div className='row justify-content-center'>
                    <div className='col-lg-6'>
                        <SignInForm onSubmit={authUser}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    authUser: data => dispatch(authUser(data))
});

export default connect(() => ({}), mapDispatchToProps)(Login);