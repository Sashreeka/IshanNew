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
import SupportScreen from './components/screen/SupportScreen';
import SettingsScreen from './components/screen/SettingsScreen';
import BookmarkScreen from './components/screen/BookmarkScreen';

import RootStackScreen from './components/screen/RootStackScreen';
const Drawer = createDrawerNavigator();



export default function App() {

  return (
    <NavigationContainer>
    {/* <RootStackScreen/> */}

    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen}/>
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


