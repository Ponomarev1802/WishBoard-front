import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'semantic-ui-react';

const Schema = Yup.object().shape({
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
const { Input } = Form;

const Template = props => {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
    } = props;

    const fieldsData = [
        {
            name: 'name',
            type: 'text',
            title: 'Имя'
        },
        {
            name: 'surname',
            type: 'text',
            title: 'Фамилия'
        },
        {
            name: 'email',
            type: 'email',
            title: 'Эл. почта'
        },
        {
            name: 'password',
            type: 'password',
            title: 'Пароль'
        },
        {
            name: 'confirmPassword',
            type: 'password',
            title: 'Повторите пароль'
        }
    ];

    const fieldsTemplate = fieldsData.map((item, i) => (
        <Input key={i}
               name={item.name}
               type={item.type}
               error={errors[item.name] && touched[item.name]}
               value={values[item.name]}
               placeholder={item.title}
               onChange={handleChange}
               onBlur={handleBlur}
        />
    ));

    return (
        <Form onSubmit={handleSubmit}>
            {fieldsTemplate}
            <Button type='submit'
                    primary
                    fluid
                    disabled={!!Object.keys(errors).length}
            >
                Зарегистрироваться
            </Button>
        </Form>
    );
};

const SignUpForm = withFormik({

    mapPropsToValues: () => ({
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: ''
    }),

    validationSchema: Schema,

    handleSubmit: (values, {props}) => {
        props.onSubmit(values);
    }

})(Template);

export default SignUpForm;