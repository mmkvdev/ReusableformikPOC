import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import FormikController from './FormikController'
import { initialValues, validationSchema, onSubmit } from '../utils/loginUtils';
import { IconButton } from '@chakra-ui/core';
// import EmailPage from './Pages/EmailPage';
// import PasswordPage from './Pages/PasswordPage';


// const pages = [<EmailPage />, <PasswordPage />];


function LoginForm() {
    // const [loading, setIsLoading] = useState(false)
    const [page, setPage] = useState(0);


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => {
                    console.log('Formik', formik)
                    console.log('Formik valid', formik.isValid)
                    console.log('Formik dirty', formik.dirty)
                    //console.log('Formik errors', !formik.errors)
                    //console.log('Formik touched', !formik.touched)
                    //console.log('Formik Values', !formik.values)
                    const _next = () => {
                        if (formik.dirty && formik.errors) {
                            console.log('Next Page: ', formik.isValid)
                            setPage(1);
                        }
                        else {
                            setPage(0);
                            console.log('Next Page 1: ', formik.isValid)
                        }
                    }

                    return (
                        <Form>
                            {
                                page === 0 ?
                                    (<div className="input-container">
                                        <FormikController
                                            className="inputFields"
                                            control='chakrainput'
                                            type='email'
                                            label='Email'
                                            name='email'
                                            placeholder='Enter Your Mail'
                                        />
                                        <IconButton
                                            className="iconButtonContainer"
                                            variant="outline"
                                            icon="arrow-forward"
                                            size="lg"
                                            isDisabled={formik.isValid && formik.touched && formik.errors && formik.values}
                                            onClick={_next}
                                        />
                                    </div>) :
                                    (
                                        <div className="input-container">
                                            <FormikController
                                                control='chakrainput'
                                                className="inputFields"
                                                type='text'
                                                label='Write your message... 🐼'
                                                name='description'
                                                placeholder=''
                                            />
                                            <IconButton
                                                className="iconButtonContainer"
                                                variant="outline"
                                                type='submit'
                                                icon="arrow-forward"
                                                size="lg"
                                            />   
                                        </div>

                                    )
                            }
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default LoginForm
