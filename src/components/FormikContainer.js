import React from 'react';
import { Formik, Form } from 'formik';
import { initialValues, validationSchema, onSubmit, dropDownOptions } from '../utils/formikUtils';
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

                            <FormikController
                                control='select'
                                label='Select a Topic'
                                name='selectOption'
                                options={dropDownOptions}
                            />
                            <button type='submit'>Submit</button>
                        </Form>
                }
            </Formik>
        </div>
    )
}

export default FormikContainer
