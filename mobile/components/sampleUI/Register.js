import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema=yup.object({
    fullname: yup.string()
    .required()
    .min(4),
    telephone: yup.string()
    .required()
    .min(8),
    email: yup.string()
    .required()
    .test('is-num-1-5','Rating must be a number 1-5',(val)=>{
        return parseInt(val)<6 && parseInt(val)>0 ;    })

})


export default function Register()
{
    return(
        <Formik
        validationSchema={reviewSchema}
        initialValues={{fullname:'',telephone:'',email:''}}
        onSubmit={(values,actions)=>{
            console.log(values);
            //after value submitting, then key board is clear
            actions.resetForm();

        }}
        >

        {(props)=>(

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <TextInput
                style={styles.input}
                placeholder="ඔබේ නම ඇතුළත් කරන්න"
                onChangeText={props.handleChange('fullname')}
                //realtime errors display
                onBlur={props.handleBlur('fullname')
               
                }
                value={props.values.fullname}

            />
            <Text style={styles.errorText}>{props.touched.fullname && props.errors.fullname}</Text>
            <TextInput
                 style={styles.input}
                placeholder="ඔබේ දුරකථන අංකය ඇතුළත් කරන්න"
                onChangeText={props.handleChange('telephone')}
                value={props.values.telephone}
                keyboardType='numeric'
                onBlur={props.handleBlur('telephone')}
                
            />
            <Text style={styles.errorText}>{props.touched.telephone && props.errors.telephone}</Text>
            
            <TextInput
                 style={styles.input}
                placeholder="ඔබගේ විද්‍යුත් ලිපිනය ඇතුළත් කරන්න"
                onChangeText={props.handleChange('email')}
                value={props.values.email}
                onBlur={props.handleBlur('email')}
            />
            <Text style={styles.errorText}>{props.touched.email && props.errors.email}</Text>

            <Button title="යවන්න"
                onPress={props.handleSubmit}
            />

            </View>
            </TouchableWithoutFeedback>
        )}

        </Formik>
    );
}

const styles=StyleSheet.create({
    input:{
        borderWidth:1,
        padding:10,
        borderRadius:6,
        borderColor:'#ddd',
        fontSize:18,
        marginTop:5,

    },
    errorText:{
        color:'crimson',
        fontWeight:'bold',
        marginBottom:10,
        marginTop:6,
        textAlign:'center'
    }
})