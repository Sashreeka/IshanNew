 // Formik x React Native example
 import React from 'react';
 import { Button, TextInput, View } from 'react-native';
 import { Formik } from 'formik';


export default function MyReactNativeForm()
{

  return(
    <View >
     <Formik
       initialValues={{title:'',body:'',rating:''}}
       onSubmit={(values)=>{
         console.log(values)
 
       }}
     >
       {(props)=>(
         <View>
           <TextInput
             placeholder='title'
             onChangeText={props.handleChange('title')}
             value={props.values.title}
           />
 
 
 <TextInput
             multiline
             placeholder='body'
             onChangeText={props.handleChange('body')}
             value={props.values.body}
           />
 
 <TextInput
             placeholder='rating(1-5)'
             onChangeText={props.handleChange('rating')}
             value={props.values.rating}
           />
           <Button title='submit' color="maroon" onPress={props.handleSubmit}/>
         </View>
       )}
     </Formik>
 
 
    </View>
  );
}
 
 
//  export const MyReactNativeForm = props => (
    
//    <Formik
//      initialValues={{ email: '' }}
//      onSubmit={values => console.log(values)}
//    >
//      {({ handleChange, handleBlur, handleSubmit, values }) => (
//        <View>
//          <TextInput
//            onChangeText={handleChange('email')}
//            onBlur={handleBlur('email')}
//            value={values.email}
//          />
//          <Button onPress={handleSubmit} title="Submit" />
//        </View>
//      )}
//    </Formik>
//  );








 