import React from 'react'
import propTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignInSchema = Yup.object().shape({
    login: Yup.string()
        .required('Введите логин'),
    password: Yup.string()
        .required('Введите пароль')
});

export const SignInForm = props => (
    <Formik
        initialValues={
            {
                login: '',
                password: ''
            }
        }
        validationSchema={SignInSchema}
        onSubmit={props.onSubmit}
        render={props => (
            <Form>
                <div className='form-group'>
                    <label>Email / логин</label>
                    <Field
                        name='login'
                        className='form-control'
                    />
                    <ErrorMessage name='login'>{msg => <div className='invalid-feedback d-block'>{msg}</div>}</ErrorMessage>
                </div>
                <div className='form-group'>
                    <label>Пароль</label>
                    <Field
                        name='password'
                        type='password'
                        className='form-control'
                    />
                    <ErrorMessage name='password'>{msg => <div className='invalid-feedback d-block'>{msg}</div>}</ErrorMessage>
                </div>
                <button className='btn btn-primary' type='submit'>Войти</button>
            </Form>
        )}
    />
);

SignInForm.propTypes = {
    onSubmit: propTypes.func.isRequired
};