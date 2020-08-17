import React from 'react'
import FormikController from '../FormikController';

function EmailPage() {
    return (
        <FormikController
            control='chakrainput'
            type='email'
            label='Email'
            name='email'
        />
    )
}

export default EmailPage
