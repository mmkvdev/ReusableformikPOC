import * as Yup from 'yup';

export const initialValues = {
    email: '',
    password: ''
};


export const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required'),
    password: Yup.string().required('Required')
});

export const onSubmit = values => {
    console.log('Form Data', values);
}