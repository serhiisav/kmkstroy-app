import { object, string } from 'yup';


let SubmitFormSchema = object().shape({
    _subject: string(),
    _captcha: string(),
    name: string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    company: string()
        .max(20, 'Must be 20 characters or less'),
    email: string().email().required('Required'),
    phone: string().length(12, 'Phone number is not valid'),
    message: string().required('Required')
});

export default SubmitFormSchema;