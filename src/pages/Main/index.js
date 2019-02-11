import React from 'react';
import Wishes from '../../components/Wishes';
import {Nav} from "../../components/Nav";
import UserCard from "../../components/UserCard";
import AddWishForm from "../../components/Forms/AddWish";

const Main = () => {

    return (
        <section className="container pt-4">
            <div className="row">
                <section className="col-lg-9" id="main">
                    <UserCard />
                    <Wishes />
                </section>
                <nav className="navbar navbar-light bg-white fixed-bottom d-lg-none" id="nav">
                    <a className="nav-link active" href="#profile"><i className="far fa-user fa-lg" /></a>
                    <a className="nav-link" href="#add-wish"><i className="far fa-plus-square fa-lg" /></a>
                    <a className="nav-link" href="#chat"><i className="far fa-comment fa-lg" /></a>
                    <a className="nav-link" href="#feed"><i className="far fa-newspaper fa-lg" /></a>
                </nav>
                <div className="col-lg-3">
                    <Nav />
                </div>
                <div style={{width: "50%", background: "#ffffff", padding: "16px"}}>
                    <AddWishForm />
                </div>
            </div>
        </section>
    );

};

export default Main;