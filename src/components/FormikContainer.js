import React from 'react';
import { Formik, Form } from 'formik';
import { initialValues, validationSchema, onSubmit } from '../utils/formikUtils';
import FormikController from './FormikController';

function FormikContainer() {
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {
                    (formikProps) =>
                        <Form>
                            <FormikController 
                                control='input' 
                                type='email' 
                                label='Email' 
                                name='email' 
                            />

                            <FormikController 
                                control='textarea'
                                label='Description'
                                name='description'
                            />
                            <button type='submit'>Submit</button>
                        </Form>
                }
            </Formik>
        </div>
    )
}

export default FormikContainer
