import React from 'react'
import Input from './Input';

// decides which of the different form fields have to be rendered based on one particular props - control
function FormikController(props) {
    const { control, ...rest } = props;

    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
        case 'select':
        case 'radio':
        case 'checkbox':
        case 'date':
        default: return null

    }
    return (
        <div>

        </div>
    )
}

export default FormikController;
