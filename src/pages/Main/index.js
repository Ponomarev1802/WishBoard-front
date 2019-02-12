import React from 'react';
import { connect } from 'react-redux';

import {
    Button,
    Container,
    Grid,
    Icon,
    Menu
} from 'semantic-ui-react';

import Wishes from '../../components/Wishes';
import Nav from '../../components/Nav';
import UserCard from '../../components/UserCard';
import AddWishForm from '../../components/Forms/AddWish';

import { logoutUser } from '../../actions/UserActions';

const { Row, Column } = Grid;
const { Item } = Menu;


const Main = props => {

    const {logoutUser} = props;

    return (
        <React.Fragment>
            <Container>
                <Grid>
                    <Row>
                        <Column>
                            <Menu>
                                <Item>
                                    <Button icon onClick={logoutUser}>
                                        <Icon name='sign-out' /> Выйти
                                    </Button>
                                </Item>
                            </Menu>
                        </Column>
                    </Row>
                    <Row>
                        <Column width={4}>
                            <Row textAlign='center'>
                                <UserCard />
                                <Nav />
                            </Row>
                        </Column>
                        <Column width={12}>
                            <Wishes />
                        </Column>
                    </Row>
                </Grid>
            </Container>
        </React.Fragment>
    );

};

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default connect(() => ({}), mapDispatchToProps)(Main);