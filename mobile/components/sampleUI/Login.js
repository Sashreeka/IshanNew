import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image,

     } from 'react-native';

export default function Login() {
    return (
        <View style={styles.styles}>
            <View >
                
                <Image source={require('../../assets/logo.png')}
                    style={styles.image}
                />
                <Text style={styles.header}>ඔබේ නම ඇතුළත් කරන්න</Text>
            </View>
            

            
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        
        
        backgroundColor:"#fff"
    },
    header:{
        fontSize:30,
        fontStyle:'normal',
        
    },
    image:{
        marginTop:-200,
        width:200,
        height:200,
       

    }
})
