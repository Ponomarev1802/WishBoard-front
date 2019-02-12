import React, { Component } from 'react';

import {
    Label,
    Menu
} from "semantic-ui-react";

export class Nav extends Component {

    render() {
        return (
            <Menu vertical fluid borderless>
                <Menu.Item name='wishes' active>
                    Желания
                </Menu.Item>
                <Menu.Item name='feed'>
                    Новости
                </Menu.Item>
                <Menu.Item name='messages'>
                    Сообщения
                    <Label color='red'>3</Label>
                </Menu.Item>
            </Menu>
        );
    }

}

export default Nav;