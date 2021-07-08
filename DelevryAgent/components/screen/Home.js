import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button

}from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const About = ()=>{
    return (
        <View>
            <Text>Welcome About</Text>
        </View>
    )
}
const Stack=createStackNavigator();
export default function Home({route,navigation}) {

    const {name}=route.params;
    return (
        <View style={styles.container}>
        <Text>Welcome {name}</Text>

        <Button
                title="Login"
                onPress={()=>{
                    navigation.navigate("Start");
                }}
            />
            

            
            
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    }
})