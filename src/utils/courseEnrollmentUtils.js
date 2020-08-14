import * as Yup from 'yup';

export const initialValues = {
    email: '',
    bio: '',
    course: '',
    skills: [],
    courseDate: null
};

export const courseOptions = [
    { key: 'Select Your Course', value: '' },
    { key: 'React', value: 'react' },
    { key: 'Data Science', value: 'datascience' },
    { key: 'JavaScript', value: 'JS' }
];

export const skillSetOptions = [
    { key: 'HTML', value: 'html' },
    { key: 'CSS', value: 'css' },
    { key: 'JS', value: 'java script ' }
];

export const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required'),
    bio: Yup.string().required('Required'),
    course: Yup.string().required('Required'),
    courseDate: Yup.date().required('Required').nullable()
});

export const onSubmit = values => {
    console.log('Form Data', values);
}