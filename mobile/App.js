import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList,Image,TouchableOpacity,Alert } from 'react-native';


export default function App() {

  const [data,setData]=useState([
    {id:"1",name:'ishan'},
    {id:"2",name:'ishan2'},
    {id:"3",name:'ishan3'},
    {id:"4",name:'ishan4'},
    {id:"5",name:'ishan5'},
    {id:"6",name:'ishan6'},

  ])

  const alertCreate= ()=>{
    Alert.alert(
      'Alert Box',
      'Do you want to sure',
      [
        {
          text: 'cancel',
          onPress: ()=> console.log('cancel')
        },
        {
          text: 'ok',
          onPress: ()=>console.log('ok')
        }
      ]
    );

  }
  return (
    <View style={styles.container}>
    <FlatList
    
      data={data}
      horizontal={true}
      keyExtractor={(item) => item.id}
     
      renderItem= {({item})=>(

        <TouchableOpacity onPress={alertCreate}>

        <View key={item.id}
        style={styles.horizontal}>
          <Image
          style={styles.img}
         
            source={require('./assets/d.png')}
          />
          <Text >{item.name}</Text>
        </View>
        </TouchableOpacity>
      )}
    />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal:{
    width:100,
    marginTop:40,
    marginLeft:20,
    height:100,
    backgroundColor:'teal'

  },
  img:{
    width:50,
    height:50,

  }
});
