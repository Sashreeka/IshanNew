import React from 'react';
import {Formik,Form} from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';
import axios from 'axios';

export default function Register() {

    const validate= Yup.object({
        name: Yup.string()
            .max(15,'Must be 15 characters or less')
            .required('Name is  required'),
        telephone: Yup.string()
            .min(10,'Telephone number is invalid')
            .max(10,'Telephone number is invalid')
            .required('Telephone is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6,'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'),null],'Password must match')
            .required('Confirm Password is required'), 

    })


    return (
        <Formik
        initialValues={{
            name:'',
            telephone:'',
            email:'',
            password:'',
            confirmPassword:''

        }}
        validationSchema={validate}
        onSubmit={values =>{
            axios.post("http://localhost:3001/api/register",{
                name: values.name,
                telephone:values.telephone,
                email:values.email,
                password: values.password,
                }
               
                ).then((response)=>{
                    alert(response.data.message);
      })
        }}
        >
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
