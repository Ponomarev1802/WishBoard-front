import React from 'react';
import Wishes from '../Wishes';
import {Nav} from "../Nav";
import {UserCard} from "../UserCard";

export const Main = props => {
    const {profile, wishes} = props;
    return (
        <section className="container pt-4">
            <div className="row">
                <section className="col-lg-10" id="main">
                    <UserCard profile={profile}/>
                    <Wishes wishes={wishes} />
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
    );
};