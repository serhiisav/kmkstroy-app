import './submitForm.scss'
import React, { useRef } from "react";
import { Formik, Form, Field } from 'formik';
import CartFormSchema from "./CartFormSchema";
import NumberFormat from 'react-number-format';
import OrderFormField from "./OrderFormField";
import axios from "axios";
import { useInViewport } from 'react-in-viewport';
import { useTranslation } from "react-i18next";


const SubmitForm = () => {
    const formRef = useRef();
    const { inViewport } = useInViewport(formRef);
    const { t } = useTranslation();

    const sendEmail = (data) => {
        const options = {
            method: "POST",
            url: "http://localhost:5000/",
            headers: {
                // 'X-Requested-With': 'XMLHttpRequest',
                'Accept': "application/json",
                'Access-Control-Allow-Origin': '*',
                "Content-type": "application/json; charset=UTF-8",
            },
            data: JSON.stringify(data)
        }

        axios(options)
            .then(res => {
                console.log(res.status);
                if (res.status === 200) {
                    alert('Ваше повідомлення успішно надіслано');
                } else {
                    console.log(res.status);
                    alert('Помилка сервера! Будь ласка, повторіть запит.' + res.status);
                }
            })
            .catch(err => {
                console.log(err.message);
                alert('Помилка сервера! Будь ласка, повторіть запит.' + err);
            });
    }


    return (
        <section ref={formRef} className="section-form" id="contacts">
            <h1 className="section-form-title">{t("submitForm.title")}</h1>
            <Formik
                initialValues={{ name: '', company: '', email: '', phone: '', message: '' }}
                validationSchema={CartFormSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    sendEmail(values);
                    // setSubmitting(false);
                    resetForm();
                }}
            >
                {({ values, errors, setFieldValue, handleBlur, touched }) =>
                (<div className="container">
                    <div className={inViewport ? 'form-wrapper animate__animated animate__fadeInUp animate__delay-0.5s' : 'form-wrapper-none'}>
                        <div className="form-company-info">
                            <h3 className="form-brand">
                                {t("submitForm.company")}
                            </h3>
                            <ul>
                                <li><svg className="form-svg" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#f8f8f8"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" /></svg> +38(097)-113-30-45</li>
                                <li><svg className="form-svg" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#f8f8f8"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" /></svg> kmkstroy82@gmail.com</li>
                            </ul>
                        </div>
                        <div className="form-contact">

                            <Form
                                className="form">
                                <p>
                                    <OrderFormField label={t("submitForm.label_name")} name="name" id="name" type="text" />
                                </p>
                                <p>
                                    <OrderFormField label={t("submitForm.label_company")} id="company" name="company" type="text" />
                                </p>
                                <p>
                                    <OrderFormField label={t("submitForm.label_email")} id="email" name="email" type="email" />
                                </p>
                                <p>
                                    <label
                                        className={touched.phone && errors.phone ? "error-form" : null}
                                        htmlFor="phone">{t("submitForm.label_phone")}
                                    </label>
                                    <NumberFormat
                                        onBlur={event => handleBlur(event)}
                                        className={touched.phone && errors.phone ? "form-field error" : "form-field"}
                                        id="phone"
                                        value={values.phone}
                                        name="phone"
                                        format="+## (###) ###-##-##" allowEmptyFormatting mask="_"
                                        onValueChange={(values) => {
                                            const { value } = values;
                                            setFieldValue('phone', value);
                                        }}

                                    />
                                </p>
                                <p className="full">
                                    <label
                                        className={touched.message && errors.message ? "error-form" : null}
                                        htmlFor="message">{t("submitForm.label_message")}
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
                                    <button className="form-submit" type="submit">{t("submitForm.button_send")}</button>
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