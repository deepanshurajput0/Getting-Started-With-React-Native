import { View } from 'react-native'
import React from 'react'

const Responsive = () => {
  return (
    <View style={{flex:1}} >
        <View style={{flex:1,backgroundColor:'red'}} ></View>
        <View style={{flex:1,backgroundColor:'green'}} ></View>
        <View style={{flex:1,backgroundColor:'blue'}} ></View>
        <View style={{flex:1,backgroundColor:'yellow'}}></View>
    </View>
  )
}

export default Responsive;