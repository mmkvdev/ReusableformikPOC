import React from 'react'
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import RadioButton from './RadioButton';
import CheckBox from './CheckBox';

// decides which of the different form fields have to be rendered based on one particular props - control
function FormikController(props) {
    const { control, ...rest } = props;

    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <TextArea {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <RadioButton {...rest} />
        case 'checkbox':
            return <CheckBox {...rest}/>
        case 'date':
        default: return null

    }
}

export default FormikController;
