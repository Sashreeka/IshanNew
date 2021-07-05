import React from 'react';
import {Formik,Form} from 'formik';
import TextField from './TextField';

export default function Register() {
    return (
        <Formik
        initialValues={{
            name:'',
            telephone:'',
            email:'',
            password:'',
            confirmPassword:''

        }}>
           {
               formik =>(
                   <div>
                       <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
                       {console.log(formik)}
                       <Form>
                            <TextField/>

                       </Form>
                   </div>
               )
           }
            
        </Formik>
    )
}
