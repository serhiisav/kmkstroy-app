import { object, string } from 'yup';


let CartFormSchema = object().shape({
    name: string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    company: string()
        .max(20, 'Must be 20 characters or less'),
    email: string().email().required('Required'),
    phone: string().length(10, 'Phone number is not valid').required('Required'),
    message: string().required('Required')
});

export default CartFormSchema;