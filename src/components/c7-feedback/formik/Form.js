import React from 'react';
import {Field, Form, Formik} from 'formik';
import style from "../feedback.module.scss"
import axios from "axios";

export const FormContainer = () => (
    <div>
        <h2>Обратная связь</h2>
        <Formik
            initialValues={{name: '', email: "", message: ''}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting,resetForm}) => {
                resetForm();

                setSubmitting(false);
                axios({
                    method: 'post',
                    url: 'https://server-send-message.herokuapp.com/sendMessage',
                    data: values
                }).then(()=>{
                    alert("Сообщение отправилось")
                });
            }
            }
        >
            {({isSubmitting}) => (
                <Form className={style.formContainer}>
                    <Field type="text" name="name" placeholder={" Name"}/>
                    <Field type="email" name="email" placeholder={" Email"}/>
                    <Field as={"textarea"}  name="message"  placeholder={" Message..."} />

                    <button className={`${style["formContainer__link"]} btn`} type="submit" disabled={isSubmitting}>
                        Отправить
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

