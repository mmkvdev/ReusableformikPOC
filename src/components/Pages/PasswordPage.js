import React from 'react'
import FormikController from '../FormikController';

function PasswordPage() {
    return (
        <FormikController
            control='chakrainput'
            type='password'
            label='Password'
            name='password'
        />
    )
}

export default PasswordPage
