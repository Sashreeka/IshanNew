import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default function Start() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>


            </View>

            <View style={styles.footer}>
                
            </View>


            
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flex:2,
        backgroundColor:"red",
    },
    footer:{
        flex:2,
        backgroundColor:"green"
    }
})