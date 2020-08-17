import React, { useState } from 'react'
import { Formik, Form } from 'formik';
// import FormikController from './FormikController'
import { initialValues, validationSchema, onSubmit } from '../utils/loginUtils';
import { Button, IconButton } from '@chakra-ui/core';
import EmailPage from './Pages/EmailPage';
import PasswordPage from './Pages/PasswordPage';


const pages = [<EmailPage />, <PasswordPage />];


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
                    console.log('Formik Errors', formik)
                    const _next = () => {
                        if (!formik.isValid) {
                            console.log('Next Page: ', formik.isValid)
                            setPage(1);
                        } else console.log('Next Page 1: ', formik.isValid)
                    }

                    return (
                        <Form>
                            {pages[page]}
                            {
                                page === pages.length - 1 ? (
                                    <>
                                        <Button
                                            variantColor="teal"
                                            variant="ghost"
                                            type='submit'
                                            height="40px"
                                            width="100px"
                                            border="2px"
                                            margin="10px"
                                            float="left"
                                            rightIcon="arrow-right"
                                            borderColor="black"
                                        >   Submit
                                    </Button>
                                    </>)
                                    : (<IconButton
                                        aria-label="Call Segun"
                                        icon="arrow-forward"
                                        onClick={_next}
                                        isDisabled={formik.isValid ? true : false}
                                    />)
                            }
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default LoginForm
