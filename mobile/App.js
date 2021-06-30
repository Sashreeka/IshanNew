import { StatusBar } from 'expo-status-bar';
//yarn add i18n-js   localization
//{ "code": "ta", "name": "Tamil" },{ "code": "en", "name": "English" }, { "code": "si", "name": "Sinhala; Sinhalese" },
//4ZCqV4VMIUj4jpLh4zkBwC4uQpCFtJ7aM4qBqbITxNnn===secret key
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, FlatList,Image,TouchableOpacity,Alert } from 'react-native';
import axios from 'axios';
import Login from './components/sampleUI/Login';

import LocalMulti from './components/sampleUI/LocalMulti';
import { MyReactNativeForm } from './components/sampleUI/MyReactNativeForm';
//import PayHere from '@payhere/payhere-mobilesdk-reactnative';
//import { paymentObject } from './components/sampleUI/Payment';



export default function App() {


  return (


    <View style={styles.container}>
      
        <Login/>
        <LocalMulti/>
        <MyReactNativeForm/>
       
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

 
});


