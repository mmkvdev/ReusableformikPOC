import React from 'react'
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function CheckBox(props) {
    const { name, options, label, ...rest } = props
    return (
        <div className='form-control'>
            <label htmlFor={name}>Pick Options</label>
            <Field as='checkbox' id={name} name={name} {...rest}>
                {
                    ({ field }) => {
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.key}>
                                    <input
                                        type='checkbox'
                                        id={option.value}
                                        {...field}
                                        value={option.value}
                                        checked={field.value.includes(option.value)}
                                    />
                                    <label htmlFor={option.value}>{option.key}</label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default CheckBox;
