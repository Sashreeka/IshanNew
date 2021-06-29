import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const [data,setData]=useState([
    {id:1,name:'ishan'},
    {id:2,name:'ishan2'},
    {id:3,name:'ishan3'},
    {id:4,name:'ishan4'},
    {id:5,name:'ishan5'},
    {id:6,name:'ishan6'},
    {id:7,name:'ishan7'},
    {id:8,name:'ishan8'},
  ])
  return (
    <View style={styles.container}>
    <FlatList
    
      data={data}
      horizontal={true}
      renderItem= {({item})=>(
        <Text style={styles.horizontal}>{item.name}</Text>
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
    height:40,
    backgroundColor:'teal'

  }
});
