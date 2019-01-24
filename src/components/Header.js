import React from 'react'

export class Header extends React.Component{
    render(){
        return(
            <header className="navbar justify-content-between">
                <a className="navbar-brand" href="/">WishBoard</a>
            </header>
        );
    }
}