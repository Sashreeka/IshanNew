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
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from './components/sampleUI/Header';
import HomeScreen from './components/screen/HomeScreen';
import DetailsScreen from './components/screen/DetailsScreen';
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();


const HomeStackScreen= ({navigation})=>(

  <HomeStack.Navigator screenOptions={{
    headerStyle:{
          backgroundColor:'#009387',
          
          
         
        },
        headerTitleAlign:'center',
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight:'bold'
        }

  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} 
      
    />
   
  </HomeStack.Navigator>


)


const DetailsStackScreen= ({navigation})=>(

  <DetailsStack.Navigator screenOptions={{
    headerStyle:{
          backgroundColor:'#009387',
          
          
         
        },
        headerTitleAlign:'center',
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight:'bold'
        }

  }}>
    <DetailsStack.Screen name="Details" component={DetailsScreen} 
      
    />
   
  </DetailsStack.Navigator>


)


export default function App() {

  return (
    <NavigationContainer>

    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
    </Drawer.Navigator>

     

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


