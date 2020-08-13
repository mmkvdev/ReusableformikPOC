import * as Yup from 'yup';

export const initialValues = {
    email: '',
    description: ''
};

export const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required')
});

export const onSubmit = values => {
    console.log(values);
}