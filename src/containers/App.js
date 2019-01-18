import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import {Header} from '../components/Header'
import {Nav} from '../components/Nav'
import {UserCard} from '../components/UserCard'
import Wishes from '../components/Wishes'
import { connect } from 'react-redux'
import {delWish} from "../actions/wishesActions";
import {getUser} from "../actions/actions"

        class App extends React.Component{
            componentDidMount(){
                fetch('/getUser')
                    .then(response => response.json())
                    .then(res => getUser(res))
            };
            render(){
				console.log(this.props)
				const profile = this.props.profile
				const wishes = this.props.wishes
				const delWishAction = this.props.delWishAction
				console.log(profile)
                return(
                    <div>
                        <Header />
                        <section className="container pt-4">
                            <div className="row">
                                <section className="col-lg-10" id="main">
                                    <UserCard profile={profile}/>
                                    <Wishes wishes = {wishes} delWishAction = {delWishAction}/>
                                </section>
                                <Nav/>
                            <nav className="navbar navbar-light bg-white fixed-bottom d-lg-none" id="nav">
                                <a className="nav-link active" href="#"><i className="far fa-user fa-lg"></i></a>
                                <a className="nav-link" href="#"><i className="far fa-plus-square fa-lg"></i></a>
                                <a className="nav-link" href="#"><i className="far fa-comment fa-lg"></i></a>
                                <a className="nav-link" href="#"><i className="far fa-newspaper fa-lg"></i></a>
                            </nav>
                        </div>
                        </section>
                        <footer>
                        </footer>
                    </div>

                );
            }
        }

const mapStateToProps = store=>{
	console.log(store)
	return {
		profile: store.profile,
	}
}
const mapDispatchToProps = dispatch => {
    return{
        getUser: profile => dispatch(getUser(profile))
    }
}

export default connect(mapStateToProps)(App);
