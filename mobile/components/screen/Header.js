import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar

}from 'react-native';

export default function Header() {
    return (
       
        <View style={styles.container}>
        
        <Image
            source={require('../../assets/logo.png')}
            style={styles.image}
        />

        <Text style={styles.profileText}>Profile</Text>

        
            
        </View>
    )
}

const styles=StyleSheet.create({
    container:{

        width:"100%",
        height:50,
        backgroundColor:'#00FA9A',
        flexDirection:'row',
    },
    image:{
        width:40,
        height:40,
        margin:5,
    },
    profileText:{
        flex:1,
        textAlign:'center',
        fontSize:20,
        alignItems:'center',
        justifyContent:'center',

    }
})
