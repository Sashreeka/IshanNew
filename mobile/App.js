import React,{useState,useEffect,useMemo} from 'react';
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
        Button, 
        ActivityIndicator
      } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './components/screen/MainTabScreen';

import { DrawerContent } from './components/screen/DrawnContent';
import SupportScreen from './components/screen/SupportScreen';
import SettingsScreen from './components/screen/SettingsScreen';
import BookmarkScreen from './components/screen/BookmarkScreen';
import { AuthContext } from './components/context';

import RootStackScreen from './components/screen/RootStackScreen';
const Drawer = createDrawerNavigator();



export default function App() {
  const [isLoading,setIsLoading]=useState(true);
  const [userToken,setUserToken]=useState(null);

  const authContext=useMemo(()=>({
    signIn: ()=>{
      setUserToken('set');
      setIsLoading(false);
    },
    signOut: ()=>{
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: ()=>{
      setUserToken('set');
      setIsLoading(false);
    },

  }))

  useEffect(()=>{

    setTimeout(()=>{
      setIsLoading(false);
      

    },1000);
  },[])

  if(isLoading){
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size='large'/>

      </View>
    );
  }
  return (

    <AuthContext.Provider value={authContext}>
        <NavigationContainer>

        { userToken !== null ?(
       

        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen}/>
        </Drawer.Navigator>)
        :

        <RootStackScreen/>
        }
        

        </NavigationContainer>

    </AuthContext.Provider>

  

  

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


