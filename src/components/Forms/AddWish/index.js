import React, { Component } from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {Button} from "../../Button";

class AddWishForm extends Component {

    state = {
        expanded: false
    };

    expand = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    };

    render() {
        return (
            <Formik
                initialValues={
                    {
                        title: '',
                        description: '',
                        link: '',
                        photo: ''
                    }
                }
                onSubmit={values => this.props.onSubmit(values)}
                render={props => (
                    <Form id="addWish">
                        <div className='field-group'>
                            <input as='input'
                                name='title'
                                className='field'
                                placeholder='Я хочу...'
                                onFocus={this.state.expand}
                                onBlur={this.state.expand}
                            />
                            <ErrorMessage name='title'>{msg => <div
                                className='invalid-feedback d-block'>{msg}</div>}</ErrorMessage>
                        </div>
                        { this.state.expanded ?
                            <React.Fragment>
                                <div className='field-group'>
                                    <Field
                                        name='password'
                                        type='password'
                                        className='field'
                                        placeholder='Пароль'
                                    />
                                    <ErrorMessage name='password'>{msg => <div
                                        className='invalid-feedback d-block'>{msg}</div>}</ErrorMessage>
                                </div>
                                <Button type='submit' block>Войти</Button>
                            </React.Fragment>
                            : null }
                    </Form>
                )}
            />
        );
    }
}

export default AddWishForm;