import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

import { Formik } from 'formik';

export default function Register()
{
    return(
        <Formik
        initialValues={{fullname:'',telephonne:'',email:''}}
        onSubmit={(values)=>{
            console.log(values);

        }}
        >

        {(props)=>(
            <View>
                <TextInput
                style={styles.input}
                placeholder="ඔබේ නම ඇතුළත් කරන්න"
                onChangeText={props.handleChange('fullname')
               
                }
                value={props.values.fullname}

            />
            <TextInput
                 style={styles.input}
                placeholder="ඔබේ දුරකථන අංකය ඇතුළත් කරන්න"
                onChangeText={props.handleChange('telephonne')}
                value={props.values.telephonne}
                keyboardType='numeric'
                
            />
            <TextInput
                 style={styles.input}
                placeholder="ඔබගේ විද්‍යුත් ලිපිනය ඇතුළත් කරන්න"
                onChangeText={props.handleChange('email')}
                value={props.values.email}
            />

            <Button title="යවන්න"
                onPress={props.handleSubmit}
            />

            </View>
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

    }
})