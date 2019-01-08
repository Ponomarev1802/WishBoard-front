import React from 'react'
import PropTypes from 'prop-types'

export class Nav extends React.Component{
    render(){
        return(
            <aside>
                <nav className="d-none d-lg-block flex-column col-lg-2 nav">
                    <a className="nav-link active" href="#">Моя Страница</a>
                    <a className="nav-link" href="#">Сообщения</a>
                    <a className="nav-link" href="#">Новости</a>
                </nav>
            </aside>
        )
    }
}

Nav.propTypes = {}