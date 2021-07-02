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

export default function SignupScreen() {
    return (
        <View style={styles.container}>
            <Text>Signup Screen</Text>
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
   
  });
  