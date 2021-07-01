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
        Modal 
      } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const HomeScreen = ()=>{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>HomeScreen</Text>
    </View>
  );
}


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
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


