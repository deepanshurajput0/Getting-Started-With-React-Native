import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Style = () => {
  return (
    <View>
      <Text style={styles.fontStyle}  >Styling in React Native</Text>
      <Text  >Styling in React Native</Text>
      <Text style={styles.fontStyle2} >Styling in React Native</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    fontStyle:{
      fontSize:30,
      fontWeight:'bold',
      backgroundColor:"red"        
    },
    fontStyle2:{
        fontSize:30,
        fontWeight:'bold',
        backgroundColor:"green",  
        color:"white" 
    }
})


export default Style;



