import React from 'react'
import propTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignUpSchema = Yup.object().shape({
    name: Yup.string()
        .required('Обязательное для заполнения поле'),
    surname: Yup.string(),
    email: Yup.string()
        .email('Email введён некорректно')
        .required('Обязательное для заполнения поле'),
    password: Yup.string()
        .required('Обязательное для заполнения поле')
        .min(8, 'Слишком короткий пароль'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
        .required('Повторите введённый выше пароль')
});

export const SignUpForm = props => (
        <Formik
            initialValues={
                {
                    name: '',
                    surname: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }
            }
            validationSchema={SignUpSchema}
            onSubmit={ props.onSubmit }
            render={props => (
                <Form>
                    <div className='form-group'>
                        <label>Имя</label>
                        <Field
                            name='name'
                            className='form-control'
                        />
                        <ErrorMessage name='name'>{msg => <div className='invalid-feedback d-block'>{msg}</div>}</ErrorMessage>
                    </div>
                    <div className='form-group'>
                        <label>Фамилия</label>
                        <Field
                            name='surname'
                            className='form-control'
                        />
                        <ErrorMessage name='surname'>{msg => <div className='invalid-feedback d-block'>{msg}</div>}</ErrorMessage>
                    </div>
                    <div className='form-group'>
                        <label>E-mail</label>
                        <Field
                            type='email'
                            name='email'
                            className='form-control'
                        />
                        <ErrorMessage name='email'>{msg => <div className='invalid-feedback d-block'>{msg}</div>}</ErrorMessage>
                    </div>
                    <div className='form-group'>
                        <label>Пароль</label>
                        <Field
                            type='password'
                            name='password'
                            className='form-control'
                        />
                        <ErrorMessage name='password'>{msg => <div className='invalid-feedback d-block'>{msg}</div>}</ErrorMessage>
                    </div>
                    <div className='form-group'>
                        <label>Подтверждение пароля</label>
                        <Field
                            type='password'
                            name='confirmPassword'
                            className='form-control'
                        />
                        <ErrorMessage name='confirmPassword'>{msg => <div
                            className='invalid-feedback d-block'>{msg}</div>}</ErrorMessage>
                    </div>
                    <button className='btn btn-primary' type='submit'>Зарегистрироваться</button>
                </Form>
            )}
        />
);

SignUpForm.propTypes = {
    onSubmit: propTypes.func.isRequired
};