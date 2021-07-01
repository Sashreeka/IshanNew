import React,{useState,useEffect} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

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
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/sampleUI/Header';
import HomeScreen from './components/screen/HomeScreen';
import DetailsScreen from './components/screen/DetailsScreen';
const Stack = createStackNavigator();




export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{
              backgroundColor:'#009387',
              
              
             
            },
            headerTitleAlign:'center',
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold'
            }

      }}>
        <Stack.Screen name="Home" component={HomeScreen} 
          
        />
        <Stack.Screen name="Details" component={DetailsScreen}
       
         
        />
        <Stack.Screen name="Header" component={Header}
           options={{
         title:"Overview"
          
        }}
        />
      </Stack.Navigator>
     

    </NavigationContainer>

  

  

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


