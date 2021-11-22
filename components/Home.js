import React from 'react'

import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
  } from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {


    return (
        
<SafeAreaView style={styles.body}>
<Text style={styles.text}>Take a photo of plant and find the same product</Text>
 
 <View>
   <TouchableOpacity >
    <Text style={styles.button}
onPress={()=> {
  navigation.navigate('Camera')
}}
    ><Icon style={{marginLeft:10}} name="search" size={15} /> Scan a Plant </Text>
    </TouchableOpacity >
 </View>
 </SafeAreaView> 

    )
}




const styles = StyleSheet.create({
    body:{
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
    
    },
    button : {
      backgroundColor: 'green',
      paddingBottom : 10,
      paddingTop : 10,
      paddingRight : 10,
      paddingLeft : 10,
      color:'white',  
    
    }, text : { 
      color:'black',
      fontWeight: 'bold'
      , marginBottom: 30,
    }
    });
    

export default Home
