import React from 'react';
import { ErrorMessage,useField } from 'formik';
import "../../Style/style.css";

export default function TextField({label,...props}) {
    const [field,meta]=useField(props);
   
   
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <input
                // className={"form-control shadow "+meta.touched+ " && "+ meta.error +' && is-invalid'}
                className="form-control shadow "
                {...field}{...props}
                autoComplete="off"
            />
            <ErrorMessage name={field.name} component="div" className="error"/>
            
        </div>
    )
}
