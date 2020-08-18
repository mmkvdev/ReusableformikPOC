import React from 'react'
import { Field } from 'formik'
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
} from '@chakra-ui/core'

function ChakraInput(props) {
    const { label, name, placeholder, helperText, ...rest } = props
    return (
        <Field name={name}>
            {
                ({ field, form, values }) => {
                    console.log('Values', form);
                    return (
                        <div>
                            <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                                <FormLabel className="formLabelContainer" htmlFor={name}>{label}</FormLabel>
                                <Input
                                    id={name}
                                    variant="filled"
                                    placeholder={placeholder}
                                    {...rest}
                                    {...field}
                                />
                            <FormErrorMessage className="errorLabelContainer">{form.errors[name]}</FormErrorMessage>
                            </FormControl>
                        </div>
    )
}
            }
        </Field >
    )
}

export default ChakraInput
