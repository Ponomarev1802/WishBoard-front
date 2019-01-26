import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { SignInSubmit } from '../../../actions/Actions'
import {connect} from "react-redux";

const SignInSchema = Yup.object().shape({
    login: Yup.string()
        .required('Введите логин'),
    password: Yup.string()
        .required('Введите пароль')
});

const SignInForm = props => (
    <Formik
        initialValues={
            {
                login: '',
                password: ''
            }
        }
        validationSchema={SignInSchema}
        render={props => (
            <Form action = {SignInSubmit(this.login, this.password)}>
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


const mapDispatchToProps = {
    SignInSubmit: SignInSubmit
};

export default connect(null, mapDispatchToProps)(SignInForm);