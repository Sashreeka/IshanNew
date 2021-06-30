import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, 
        Text, 
        View, 
        FlatList,
        Image,
        TouchableOpacity,
        Alert,
        Modal,
        Button 
      } from 'react-native';
import axios from 'axios';
import Login from './components/sampleUI/Login';

import { MyReactNativeForm } from './components/sampleUI/MyReactNativeForm';




export default function App() {

  const [modalOpen,setModal]=useState(false);


  return (

  
    <View style={styles.container}>
    <Modal visible={modalOpen} animationType='slide'>
      <Text>Hi Ishan, what happend here.</Text>
      <Button 
    title="press"
    onPress={()=>setModal(false)}/>
      
    </Modal>

    <Button 
    title="press"
    onPress={()=>setModal(true)}/>
    


    <Text>Hello ishan,</Text>
      
      
        
       
      
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


