import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';
import { Formik } from 'formik';

export default function RegisterFarmer() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text>Ishan</Text>
            </View>
            <View style={styles.bottom}>
                <Text>Reshmika</Text>
            </View>
            
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    top:{
        backgroundColor:'red',
       
        flex:1,
    },
    bottom:{
        backgroundColor:'yellow',
        flex:1,
    }
})
