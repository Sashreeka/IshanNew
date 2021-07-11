import React,{useState,useEffect,useMemo,useReducer} from 'react';
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
  // const [isLoading,setIsLoading]=useState(true);
  // const [userToken,setUserToken]=useState(null);

  const initialLoginState={

    isLoading: true,
    userName: null,
    userToken: null,
  };
  const loginReducer= (prevState,action)=>{
    switch(action.type){
      case 'RETRIEVE_TOKEN':
        return{

          ...prevState,
          userToken: action.token,
          isLoading :false,
        };
      case 'LOGIN':
          return{
            ...prevState,
            userName: action.id,
            userToken: action.token,
            isLoading :false,
            
          }; 
      case 'LOGOUT':
            return{
              ...prevState,

           userName: null,
            userToken: null,
            isLoading :false,
              
            }; 
      case 'REGISTER':
              return{
                ...prevState,
            userName: action.id,
            userToken: action.token,
            isLoading :false,
              };         
    }
  }

  const [loginState,dispatch]=useReducer(loginReducer,initialLoginState)

  const authContext=useMemo(()=>({
    signIn: (userName,password)=>{
      // setUserToken('set');
      // setIsLoading(false);
      //
      let userToken;
      userToken=null;
      if(userName == 'user' && password == 'pass'){
        userToken='ishan'
        console.log('user token',userToken)
      }
      dispatch({type: 'LOGIN', id: userName, token: userToken})
    },
    signOut: ()=>{
      // setUserToken(null);
      // setIsLoading(false);
      dispatch({type:'LOGOUT'})
    },
    signUp: ()=>{
      // setUserToken('set');
      // setIsLoading(false);
    },

  }),[])

  useEffect(()=>{

    setTimeout(()=>{
    //  setIsLoading(false);
    let userToken;
    userToken='ishan'
    console.log('user token',userToken)
    dispatch({type: 'RETRIEVE_TOKEN',token:'ishan'})
      

    },1000);
  },[])

  if(loginState.isLoading){
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size='large'/>

      </View>
    );
  }
  return (

    <AuthContext.Provider value={authContext}>
        <NavigationContainer>

        { loginState.userToken !== null ?(
       

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


