import React, { Component } from 'react';
import {connect} from 'react-redux';

import {authUser, regUser} from "../../actions/UserActions";

import { Grid } from 'semantic-ui-react';
import SignInForm from "../../components/Forms/SignIn";
import SignUpForm from "../../components/Forms/SignUp";

const { Column } = Grid;

class Login extends Component {

    state = {
        registered: true
    };

    changeForm = () => {
        this.setState({
            registered: !this.state.registered
        })
    };

    render() {

        const {registered} = this.state;
        const {authUser, regUser} = this.props;

        return (
            <Grid centered>
                <Column width={4}>
                    { registered ?
                        <React.Fragment>
                            <SignInForm onSubmit={authUser} />
                            <p className="wrapper__small-text">
                                Нет учётной записи? <a href="#register" onClick={this.changeForm}>Зарегистрироваться</a>
                            </p>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <SignUpForm onSubmit={regUser} />
                            <p className="wrapper__small-text">
                                Есть учётная запись? <a href="#login" onClick={this.changeForm}>Войти</a>
                            </p>
                        </React.Fragment>
                    }
                </Column>
            </Grid>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    authUser: data => dispatch(authUser(data)),
    regUser: data => dispatch(regUser(data))
});

export default connect(() => ({}), mapDispatchToProps)(Login);