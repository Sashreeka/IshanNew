import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList,Image } from 'react-native';

export default function App() {

  const [data,setData]=useState([
    {id:"1",name:'ishan'},
    {id:"2",name:'ishan2'},
    {id:"3",name:'ishan3'},
    {id:"4",name:'ishan4'},
    {id:"5",name:'ishan5'},
    {id:"6",name:'ishan6'},

  ])
  return (
    <View style={styles.container}>
    <FlatList
    
      data={data}
      horizontal={true}
      keyExtractor={(item) => item.id}
     
      renderItem= {({item})=>(
        <View key={item.id}
        style={styles.horizontal}>
          <Image
          style={styles.img}
         
            source={require('./assets/icon.png')}
          />
          <Text >{item.name}</Text>
        </View>
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
    width:10,
    height:10,

  }
});
