import React from 'react'
import PropTypes from 'prop-types'


export class Header extends React.Component{
    render(){
        return(
            <header className="navbar justify-content-between">
                <a className="navbar-brand" href="#">WishBoard</a>
            </header>
        );
    }
}


Header.propTypes = {}