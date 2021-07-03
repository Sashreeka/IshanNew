import React from 'react';
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

export default function SigninScreen() {
    return (
        <View style={styles.container}>
            <Text>Signin Screen</Text>
            <Button 
                title="Click Here"
                onPress={()=>alert('Button Clicked')}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
    
  },
  header:{
    flex:1,
    justifyContent:'flex-end',
   paddingHorizontal:20,
   paddingBottom:50,
  },
  footer:{
    flex:3,
    backgroundColor:'#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:30,
    paddingHorizontal:20,

  },
  // logo:{
  //   width:height_logo,
  //   height:height_logo,

  // },
  text_header:{
    color:'#fff',
    fontSize:30,
    fontWeight:'bold',
  },
  text_footer:{
    color:"#05375a",
    fontSize:18,
  },
  action:{
    flexDirection:'row',
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:'#f2f2f2',
    paddingBottom:5,
  },
  textInput:{
    flex:1,
    paddingLeft:10,
    color:'#05375a',
  },
  button:{
    alignItems:'center',
    marginTop:50,
  },
  signIn:{
    width:'100%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },
  textSign:{
    fontSize:10,
    fontWeight:'bold',
  }


 
});
