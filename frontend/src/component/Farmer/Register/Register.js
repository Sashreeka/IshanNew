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
                       {console.log(formik.values)}
                       <Form>
                            <TextField label="Full Name" name="name" type="text"/>
                            <TextField label="Telephone" name="telephone" type="text"/>
                            <TextField label="Email" name="email" type="email"/>
                            <TextField label="Password" name="password" type="password"/>
                            <TextField label="Confrim Password" name="confirmPassword" type="password"/>

                            <button className="btn btn-dark mt-3" type="submit">Register</button>
                            <button className="btn btn-danger mt-3" type="reset">Reset</button>

                       </Form>
                   </div>
               )
           }
            
        </Formik>
    )
}
