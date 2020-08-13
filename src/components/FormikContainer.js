import React from 'react';
import { Formik, Form } from 'formik';
import { initialValues, validationSchema, onSubmit } from '../utils/formikUtils';

function FormikContainer() {
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit} 
            >
                {
                    (formikProps) => <Form>
                        <submit type='submit'>Submit</submit>
                    </Form>
                }
            </Formik>
        </div>
    )
}

export default FormikContainer
