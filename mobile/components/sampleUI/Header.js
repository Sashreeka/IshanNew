import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

function header() {
    return (
        <View style={styles.container}>
        <Text style={styles.headerText}>Header</Text>
            
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        height:50,
        backgroundColor:'#ff1493',
        width:410,
    },
    headerText:{
        justifyContent:'center',
        alignItems:'center',
        fontSize:20,
        marginHorizontal:170,
        marginVertical:10,
        color:'#fff',
    }
})

export default header
