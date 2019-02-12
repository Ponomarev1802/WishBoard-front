import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {
    Button,
    Card,
    Icon,
    Image,
    Label
} from 'semantic-ui-react';

import {getWishes, delWish} from "../actions/Actions";


class Wishes extends Component {

    componentDidMount() {
        this.props.getWishes();
    }

    deleteWish = id => {

        const {wishes, delWish} = this.props;

        fetch(`/wish/${id}`, {
            method: 'POST',
            body: JSON.stringify({})
        })
            .then(res => res.json())
            .then(res => {
                if (!res.status.err) {
                    let newWishes = wishes.filter(item => item.id !== id);
                    delWish(newWishes);
                } else {
                    alert('Ошибка!');
                }
            })
    };

    render() {

        const {wishes} = this.props;

        const wishesList = wishes.map(item => (
            <Card key={item.id}>
                <Card.Content>
                    <Card.Header>
                        {item.title}
                    </Card.Header>
                    <Card.Meta>{item.creationdate}</Card.Meta>
                </Card.Content>
                { item.image && <Image src={item.image} /> }
                { item.description && <Card.Content description={item.description} /> }
                <Card.Content extra>
                    { item.category && <Label tag content={item.category} /> }
                    <Button color='red'
                            icon
                            onClick={() => { this.deleteWish(item.id) }}>
                        <Icon name='trash' />
                    </Button>
                    {
                        item.link &&
                            <Button as='a'
                                    href={item.link}
                                    target='_blank'
                                    icon
                                    >
                                <Icon name='share' />
                            </Button>
                    }
                    <Button icon>
                        <Icon name='share alternate' />
                    </Button>
                </Card.Content>
            </Card>
        ));

        return (
            <Card.Group itemsPerRow={3}>
                {wishesList}
            </Card.Group>
        );
    }
}

const mapStateToProps = store => ({
    wishes: store.wishes
});

const mapDispatchToProps = dispatch => ({
    getWishes: () => dispatch(getWishes()),
    delWish: id => dispatch(delWish(id))
});

Wishes.propTypes = {
	wishes: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishes);