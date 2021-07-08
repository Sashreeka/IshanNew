import React,{useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    TextInput

} from 'react-native';

export default function SignIn({navigation}) {

    const [name,setName]=useState('');
    return (
        <View style={styles.container}>
        <TextInput placeholder="Enter name"
            type="text"
            onChangeText={(e)=>{setName(e);

            }}
        />
       <Button
           title="Login Home"
           onPress={()=>{
               navigation.navigate("Home",{name});
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