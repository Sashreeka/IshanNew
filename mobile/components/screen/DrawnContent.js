import React,{useState,useEffect} from 'react';
import { StyleSheet, 
   
    View, 
   
  } from 'react-native';
  import {
      DrawerContentScrollView,
      DrawerItem
  } from '@react-navigation/drawer';
  import {  
    Avatar, 
    Title, 
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableOpacity,
    Switch 
  } from 'react-native-paper';

  export function DrawerContent(props)
  {
      return(
          <View>
              <Text>This is test</Text>
          </View>
      );
  }

  const styles=StyleSheet.create({
      drawerContent:{
          flex:1,
      },
      userInfoSelection:{

        paddingLeft:20,
      },
      title:{
          fontSize:14,
          marginTop:3,
          fontWeight:"bold",
      },
      caption:{
          fontSize:14,
          lineHeight:14,
      },
      row:{
          marginTop:20,
          flexDirection:'row',
          alignItems:'center',
      },
      section:{
          flexDirection:'row',
          alignItems:'center',
          marginRight:15,
      },
      paragarph:{
          fontWeight:'bold',
          marginRight:3,

      },
      drawerSection:{
          marginTop:15,
      },
      bottomDrawerSection:{
          marginBottom:15,
          borderTopColor:'#f4f4f4',
          borderTopWidth:1,
      },
      preference:{
          flexDirection:'row',
          justifyContent:'space-between',
          paddingVertical:12,
          paddingHorizontal:16,
      }

  })