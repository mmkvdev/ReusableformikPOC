import React from 'react'
import { Formik, Form } from 'formik';
import FormikController from './FormikController'
import { initialValues, validationSchema, onSubmit } from '../utils/loginUtils';

function LoginForm() {
    return (
        <div>
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
                                    control='chakrainput'
                                    type='email'
                                    label='Email'
                                    name='email'
                                />

                                <FormikController
                                    control='chakrainput'
                                    type='password'
                                    label='Password'
                                    name='password'
                                />
                                <button type='submit' disabled={!formik.isValid}>Submit</button>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default LoginForm
