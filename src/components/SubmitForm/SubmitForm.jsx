import React from "react";
import { Formik, Form, Field } from 'formik';
import './submitForm.scss'
import CartFormSchema from "./CartFormSchema";
import NumberFormat from 'react-number-format';
import OrderFormField from "./OrderFormField";


const SubmitForm = () => {

    const sendEmail = (data) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        fetch("http://localhost:8000/", options)
            .then(res => {
                console.log(res.status);
                if (res.status === 200) {
                    alert('Ваше повідомлення успішно надіслано');
                } else {
                    alert('Помилка сервера! Будь ласка, повторіть запит.');
                }
            })
            .catch(err => {
                console.log(err.message);
                alert('Помилка сервера! Будь ласка, повторіть запит.');
            });
    }


    return (
        <section className="section-form">
            <Formik
                initialValues={{ name: '', company: '', email: '', phone: '', message: '' }}
                validationSchema={CartFormSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    sendEmail(values);
                    setSubmitting(false);
                    resetForm();
                }}
            >
                {({ values, errors, setFieldValue, handleBlur, touched }) =>
                (<div className="container">
                    <div className="form-wrapper">
                        <div className="form-company-info">
                            <h3 className="form-brand">
                                KMKSTROY LLC
                            </h3>
                            <ul>
                                {/* <li><i><svg className="form-svg" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#485e74"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" /><circle cx="12" cy="9" r="2.5" /></svg></i> 49044, м. Дніпро, <br />вул. Шевченка, буд. 37</li> */}
                                <li><i><svg className="form-svg" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#485e74"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" /></svg></i> +38(097)-113-30-45</li>
                                <li><svg className="form-svg" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#485e74"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" /></svg> kmkstroy82@gmail.com</li>
                            </ul>
                        </div>
                        <div className="form-contact">

                            <Form
                                className="form">
                                <p>
                                    <OrderFormField label="Ім'я *" name="name" id="name" type="text" />
                                </p>
                                <p>
                                    <OrderFormField label="Компанія" id="company" name="company" type="text" />
                                </p>
                                <p>
                                    <OrderFormField label="Email Адреса *" id="email" name="email" type="email" />
                                </p>
                                <p>
                                    <label
                                        className={touched.phone && errors.phone ? "error-form" : null}
                                        htmlFor="phone">Номер телефону *
                                    </label>
                                    <NumberFormat
                                        onBlur={event => handleBlur(event)}
                                        className={touched.phone && errors.phone ? "form-field error" : "form-field"}
                                        id="phone"
                                        value={values.phone}
                                        name="phone"
                                        format="+38 (###) ###-##-##" allowEmptyFormatting mask="_"
                                        onValueChange={(values) => {
                                            const { value } = values;
                                            setFieldValue('phone', value);
                                        }}

                                    />
                                </p>
                                <p className="full">
                                    <label
                                        className={touched.message && errors.message ? "error-form" : null}
                                        htmlFor="message">Повідомлення *
                                    </label>
                                    <Field
                                        as="textarea"
                                        className={touched.message && errors.message ? "form-field error" : "form-field"}
                                        id="message"
                                        name="message"
                                        rows='5'
                                    />
                                </p>
                                <p className="full">
                                    <button className="form-submit" type="submit">Надіслати</button>
                                </p>
                            </Form>
                        </div>
                    </div>

                </div>

                )}
            </Formik>
        </section>
    );
};

export default SubmitForm;