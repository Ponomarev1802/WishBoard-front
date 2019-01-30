import React from 'react'

export class Nav extends React.Component{
    render(){
        return(
            <aside>
                <nav className="d-none d-lg-block flex-column nav">
                    <a className="nav-link active" href="#mypage">Моя Страница</a>
                    <a className="nav-link" href="#messages">Сообщения</a>
                    <a className="nav-link" href="#news">Новости</a>
                </nav>
            </aside>
        )
    }
}