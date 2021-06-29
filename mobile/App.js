import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, FlatList,Image,TouchableOpacity,Alert } from 'react-native';
import axios from 'axios';
import Login from './components/sampleUI/Login';


export default function App() {

  return (
    <View style={styles.container}>
      
        <Login/>
   
      
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
