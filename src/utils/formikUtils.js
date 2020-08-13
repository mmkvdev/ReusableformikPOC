import * as Yup from 'yup';

export const initialValues = {
    email: '',
    description: '',
    selectOption: ''
};

export const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required')
});

export const onSubmit = values => {
    console.log(values);
};

export const dropDownOptions = [
    { key: 'Select an Option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
];