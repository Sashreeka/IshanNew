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

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './components/screen/MainTabScreen';

import { DrawerContent } from './components/screen/DrawnContent';
const Drawer = createDrawerNavigator();



export default function App() {

  return (
    <NavigationContainer>

    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Details" component={DetailsStackScreen} /> */}
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


