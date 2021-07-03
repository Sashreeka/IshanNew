import React,{useState} from 'react';
import { StyleSheet, 
    Text, 
    View, 
    FlatList,
    Image,
    TouchableOpacity,
    Alert,
    Modal,
    Button,
    Dimensions, 
    TextInput
  } from 'react-native';

  import * as Animatable from 'react-native-animatable';

  import { LinearGradient } from 'expo-linear-gradient';
  
  import { MaterialIcons } from '@expo/vector-icons';
  import { FontAwesome } from '@expo/vector-icons';
  import { Feather } from '@expo/vector-icons';

export default function SigninScreen() {

  const [data,setData]=useState({
    email:'',
    password:'',
    check_textInputChange: false,
    secureTextEntry: true
  });


  const textInputChange= (val)=>{
    if(val.length!==0)
    {
      setData({
        ...data,
        email:val,
        check_textInputChange:true
      });
    }else{
      setData({
        ...data,
        email:val,
        check_textInputChange:false
      });


    }


  }

    return (
        <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.text_header}>Welcome!</Text>
          </View>
          <View style={styles.footer}>
              <Text style={styles.text_footer}>Email</Text>
              <View style={styles.action}>
                <FontAwesome
                  name="user-o"
                  color="#05375a"
                  size={20}
                />
                <TextInput
                  placeholder="Your Email"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={(val)=>textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                />
                :null}
              </View>


              <Text style={[styles.text_footer,{marginTop:35}]}>Password</Text>
              <View style={styles.action}>
                <FontAwesome
                  name="lock"
                  color="#05375a"
                  size={20}
                />
                <TextInput
                  placeholder="Your Password"
                  style={styles.textInput}
                  autoCapitalize="none"
                  secureTextEntry={true}
                />
                <Feather
                  name="eye-off"
                  color="grey"
                  size={20}
                />
              </View>
          </View>
            
            
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
    marginLeft:10,
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
