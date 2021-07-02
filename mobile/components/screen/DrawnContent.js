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
  import  Icon from 'react-native-vector-icons/MaterialCommunityIcons';

  export function DrawerContent(props)
  {
      return(
          <View style={{flex:1}}>

              <DrawerContentScrollView {...props}>
                    <View>
                        <Text>Main Content</Text>
                    </View>

              </DrawerContentScrollView>
              <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={
                        ({color,size})=>(
                            <Icon
                                name="exit-to-app"
                                color={color}
                                size={size}
                            />
                        )
                    }
                    label="Sign Out"

                />


              </Drawer.Section>
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