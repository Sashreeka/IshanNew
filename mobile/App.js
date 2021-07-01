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
const Stack = createStackNavigator();

const HomeScreen = ({navigation})=>{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Button title="go to details Screen"
        onPress={()=>
          navigation.navigate("Details")
        }
      />
    </View>
  );
}
const DetailsScreen = ({navigation})=>{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to details screen...again"
        onPress={()=>navigation.push("Details")}
      />

    <Button
        title="Go to Home"
        onPress={()=>navigation.navigate("Header")}
      />

  <Button
        title="Go back"
        onPress={()=>navigation.goBack()}
      />
    </View>
  );
}


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
        options={{
          headerStyle:{
            backgroundColor:'#000'
          }
        }}
         
        />
        <Stack.Screen name="Header" component={Header}/>
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


