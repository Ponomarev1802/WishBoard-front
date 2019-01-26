import React, { Component } from 'react';
import {Header} from '../components/Header';
import {Nav} from '../components/Nav';
import {UserCard} from '../components/UserCard';
import Wishes from '../components/Wishes';
import { connect } from 'react-redux';
import { SignUpForm } from "../components/Forms/SignUp";
import { SignInForm } from "../components/Forms/SignIn";
import { regUser, authUser } from "../actions/UserActions";

class App extends Component {

    componentDidMount() {

    }

    render() {
        const  {profile, wishes, regUserAction, authUserAction} = this.props;
        //const delWishAction = this.props.delWishAction;
        return (
            <div>
                <Header />
                <section className="container pt-4">
                    <div className="row">
                        <section className="col-lg-10" id="main">
                            <UserCard profile={profile}/>
                            <Wishes wishes = {wishes} />
                        </section>
                        <nav className="navbar navbar-light bg-white fixed-bottom d-lg-none" id="nav">
                            <a className="nav-link active" href="#profile"><i className="far fa-user fa-lg" /></a>
                            <a className="nav-link" href="#add-wish"><i className="far fa-plus-square fa-lg" /></a>
                            <a className="nav-link" href="#chat"><i className="far fa-comment fa-lg" /></a>
                            <a className="nav-link" href="#feed"><i className="far fa-newspaper fa-lg" /></a>
                        </nav>
                        <div className="col-lg-2">
                            <Nav />
                        </div>
                    </div>
                </section>
                <footer>
                    <SignUpForm onSubmit={regUserAction} />
                    <SignInForm onSubmit={authUserAction} />
                </footer>
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
        regUserAction: profile => dispatch(regUser(profile)),
        authUserAction: data => dispatch(authUser(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);