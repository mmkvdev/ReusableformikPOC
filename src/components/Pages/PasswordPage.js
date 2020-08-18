import React from 'react'
import FormikController from '../FormikController';

function PasswordPage() {
    return (
        <FormikController
            control='chakrainput'
            type='text'
            label='Write your message... 🐼'
            name='description'
            placeholder=''
        />
    )
}

export default PasswordPage
