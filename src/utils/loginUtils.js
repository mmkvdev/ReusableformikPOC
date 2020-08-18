import * as Yup from 'yup';

export const initialValues = {
    email: '',
    description: ''
};


export const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Please Enter an Email'),
    description: Yup.string()
             .required(' 😕 ')
             .matches(/[a-zA-Z0-9]/, 'Humanoid Language Accepted')
});

export const onSubmit = (values, { setSubmitting }) => {
    console.log('Form Data', values);

    /*axios
        .post("mongodb+srv://MMK:MMK@7997>@cluster0.icslf.mongodb.net/test", values)
        .then(res => {
            console.log('Response Value', res)
        })
        .catch(error => {
            console.log('Error Occurred', error)
        });*/
}