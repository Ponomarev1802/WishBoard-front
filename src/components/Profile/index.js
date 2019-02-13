import React from 'react';

import {
    Icon,
    Image
} from "semantic-ui-react";

import './Profile.css';

const Profile = props => {

    const { name, surname, photo, follows, followers } = props;

    return (
        <section className='profile'>
            <Image className='photo'
                   src={photo}
                   size='tiny'
                   circular
                   centered />
            <div className='name'>
                <Icon name='setting'
                      color='grey'
                      link />
                Лев Усенко
            </div>
            <div className='stats'>
                <div className='item'>
                    <div className='value'>{follows}</div>
                    <div className='title'>подписок</div>
                </div>
                <div className='item'>
                    <div className='value'>{followers}</div>
                    <div className='title'>подписчиков</div>
                </div>
            </div>
        </section>
    );

};

export default Profile;