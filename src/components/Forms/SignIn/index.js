import React from 'react';
import { withFormik } from 'formik';
import { Form, Button } from 'semantic-ui-react';
import * as Yup from 'yup';

const { Input } = Form;

const Schema = Yup.object().shape({
    email: Yup.string()
        .required('Введите логин'),
    password: Yup.string()
        .required('Введите пароль')
});

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
            name: 'email',
            type: 'text',
            title: 'Эл. почта'
        },
        {
            name: 'password',
            type: 'password',
            title: 'Пароль'
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
                Войти
            </Button>
        </Form>
    );
};

const SignInForm = withFormik({

    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),

    validationSchema: Schema,

    handleSubmit: (values, {props}) => {
        props.onSubmit(values);
    }

})(Template);

export default SignInForm;