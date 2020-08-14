import React from 'react'
import { Formik, Form } from 'formik'
import FormikController from './FormikController';
import { initialValues, validationSchema, onSubmit, options } from '../utils/registrationUtils';

function RegistrationForm() {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => {
                    return (
                        <Form>
                            <FormikController
                                control='input'
                                name='email'
                                label='Email'
                                type='email'
                            />

                            <FormikController
                                control='input'
                                name='password'
                                label='Password'
                                type='password'
                            />
                            <FormikController
                                control='input'
                                name='confirmPassword'
                                type='password'
                                label='Confirm Password'
                            />
                            <FormikController
                                control='radio'
                                name='modeOfContact'
                                label='Mode of Conduct'
                                options={options}
                            />
                            <FormikController
                                control='input'
                                name='phone'
                                label='Phone Number'
                                type='text'
                            />

                            <button type='submit' disabled={!formik.isValid}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default RegistrationForm
