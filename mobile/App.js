import React,{useState,useEffect} from 'react';
import { StyleSheet, 
        Text, 
        View, 
        FlatList,
        Image,
        TouchableOpacity,
        Alert,
        Modal 
      } from 'react-native';

import Login from './components/sampleUI/Login';

import  MyReactNativeForm from './components/sampleUI/MyReactNativeForm';




export default function App() {

  return (

  
    <View style={styles.container}>
    
      {/* <Text>Hi Ishan, what happend here.</Text>
      <Login/> */}
  
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


