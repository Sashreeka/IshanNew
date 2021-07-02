import React,{useState,useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const MainTabScreen = ()=>(
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={26} />
          ),
        }}
      />

    <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <Ionicons name="aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>

);

export default MainTabScreen;
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
      options={{
        headerLeft: ()=>(
          <Ionicons name="menu" size={25} backgroundColor='#009387'
          
          onPress={()=>navigation.openDrawer()} />
        )
      }}
        
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
  
      options={{
        headerLeft: ()=>(
          <Ionicons name="menu" size={25} backgroundColor='#fff'
          onPress={()=>navigation.openDrawer()} />
        )
      }}
        
      />
     
    </DetailsStack.Navigator>
  
  
  )
  