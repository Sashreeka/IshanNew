import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import Start from './components/screen/Start';
import axios from 'axios';


export default function App() {
  const [name,setName]=useState('');
  const [telephone,setTelephone]=useState('');
  const [email,setEmail]=useState('');


  const submitRegister = ()=>{
    axios.post("http://192.168.1.12:3001/api/register",{
      name:name,
      telephone:telephone,
      email:email

    });
  }
  return (

    
    <View style={styles.container}>

    <Text>name</Text>
    <TextInput
      onChangeText={(e)=>{
        setName(e);
      }}
    />

<Text>telephone</Text>
    <TextInput
      onChangeText={(e)=>{
        setTelephone(e);
      }}
    />

<Text>Email</Text>
    <TextInput
      onChangeText={(e)=>{
        setEmail(e);
      }}
    />

    <Button
      title="Submit"
      onPress={submitRegister}
    />
   
      {/* <Start/> */}




      <StatusBar style="auto" />
      
      
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
