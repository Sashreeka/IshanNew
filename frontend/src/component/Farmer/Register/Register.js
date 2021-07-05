import React from 'react';
import {Formik,Form} from 'formik';

export default function Register() {
    return (
        <Formik>
           {
               formik => {
                   console.log(formik)
               }
           }
            
        </Formik>
    )
}
