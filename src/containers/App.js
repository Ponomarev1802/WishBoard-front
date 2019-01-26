import React, { Component } from 'react';
import {Header} from '../components/Header'
import {Nav} from '../components/Nav'
import {UserCard} from '../components/UserCard'
import Wishes from '../components/Wishes'
import { connect } from 'react-redux'
import { getProfile } from "../actions/Actions";
import SignInForm from "../components/Forms/SignIn"

class App extends Component {
    componentDidMount(){
        let options = {
            method: "GET",
        };
        fetch("/getUser", options)
            .then(res => {return (res.json())})
            .then(res => {this.props.getProfile(res)})
    }
    render() {
        const profile = this.props.profile;
        const wishes = this.props.wishes;
        const status = this.props.status;
        const delWishAction = this.props.delWishAction;
        return (
            <div>
                <Header />
                {status.auth?
                <section className="container pt-4">
                    <div className="row">
                        <section className="col-lg-10" id="main">
                            <UserCard profile={profile}/>
                            <Wishes wishes = {wishes} delWishAction = {delWishAction}/>
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
                :<SignInForm/>}
                <footer>
                </footer>
            </div>
        );
    }
}

const mapStateToProps = store =>{
	return {
		profile: store.profile,
        status: store.status,
	}
};

const mapDispatchToProps = {
    getProfile: getProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
