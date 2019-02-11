import React, {Component} from 'react';
import {SignInForm} from "../Forms/SignIn";
import {SignUpForm} from "../Forms/SignUp";

class Card extends Component {
    render {
    return(
        <React.Fragment>
            <section className='card'>
            <div className="card__header">
            <h1 className='card__title'>{registered ? 'Вход' : 'Регистрация'}</h1>
            </div>
            <div className="card__body">
            {registered ? <SignInForm onSubmit={authUser}/> : <SignUpForm onSubmit={regUser}/>}
            </div>
            <div className='card__footer'>
            {registered ?
                <p className="wrapper__small-text">
                    Нет учётной записи? <a href="#register" onClick={this.changeForm}>Зарегистрироваться</a>
                </p>
                :
                <p className="wrapper__small-text">
                    Есть учётная запись? <a href="#login" onClick={this.changeForm}>Войти</a>
                </p>
            }
            </div>
            </section>
        </React.Fragment>
)
}
};

class Header extends Card {

}

export default Card;