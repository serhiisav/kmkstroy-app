import React from "react";
import { useField } from "formik";

const SubmitFormField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label className={meta.touched && meta.error ? "error-form" : null} htmlFor={props.id}>{label}</label>
            <input className={meta.touched && meta.error ? "form-field error" : "form-field"} {...field} {...props} />
            {/* {meta.touched && meta.error ? <p className="error-form">{meta.error}</p> : null} */}
        </>
    )
}
export default SubmitFormField;