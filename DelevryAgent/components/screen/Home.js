import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button

}from 'react-native';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
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