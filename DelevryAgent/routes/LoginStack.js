import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Start from '../components/screen/Start';
import SignIn from '../components/screen/SignIn';
import Home from '../components/screen/Home';

const Stack=createStackNavigator();

export default function LoginStack()
{

    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Start" component={Start}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="Home" component={Home}/>


        </Stack.Navigator>
    );
}



