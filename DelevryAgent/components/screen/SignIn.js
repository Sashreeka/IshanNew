import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity

} from 'react-native';

export default function SignIn({navigation}) {
    return (
        <View style={styles.container}>
       <Button
           title="Login Home"
           onPress={()=>{
               navigation.navigate("Home");
           }}
       />
       <TouchableOpacity onPress={()=>navigation.goBack()}>
           <Text>click Previous</Text>
       </TouchableOpacity>
            
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