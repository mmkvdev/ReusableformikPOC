import React from 'react'
import { Formik, Form } from 'formik'
import FormikController from './FormikController'
import { initialValues, validationSchema, onSubmit, courseOptions, skillSetOptions } from '../utils/courseEnrollmentUtils'

function CourseEnrollmentForm() {
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
                                type='email'
                                name='email'
                                label='Email'
                            />

                            <FormikController
                                control='textarea'
                                label='Bio'
                                name='bio'
                            />

                            <FormikController
                                control='select'
                                label='Course'
                                name='course'
                                options={courseOptions}
                            />

                            <FormikController
                                control='checkbox'
                                label='SkillSet'
                                name='skills'
                                options={skillSetOptions}
                            />

                            <FormikController
                                control='date'
                                label='Course Date'
                                name='courseDate'
                            />

                            <button type='submit' disabled={!formik.isValid}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default CourseEnrollmentForm
