import React from 'react';
import { Formik, Form } from 'formik';
import { initialValues, validationSchema, onSubmit, dropDownOptions, radioOptions, checkBoxOptions } from '../utils/formikUtils';
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

                            <FormikController
                                control='radio'
                                label='Pick One Option'
                                name='radioOption'
                                options={radioOptions}
                            />

                            <FormikController
                                control='checkbox'
                                label='Check Box Topics'
                                name='checkBoxOption'
                                options={checkBoxOptions}
                            />
                            <button type='submit'>Submit</button>
                        </Form>
                }
            </Formik>
        </div>
    )
}

export default FormikContainer
