import React from 'react'

// decides which of the different form fields have to be rendered based on one particular props - control
function FormikController(props) {
    const { control } = props;

    switch (control) {
        case 'input':
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
