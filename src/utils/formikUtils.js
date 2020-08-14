import * as Yup from 'yup';

export const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkBoxOption: [],
    birthDate: ''
};

export const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkBoxOption: Yup.array().required('Required'),
    birthDate: Yup.date().required('Required').nullable()
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

export const radioOptions = [
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
];

export const checkBoxOptions = [
    { key: 'Option 1', value: 'cOption1' },
    { key: 'Option 2', value: 'cOption2' },
    { key: 'Option 3', value: 'cOption3' },
]