import { View, Text, Button } from 'react-native'
import React from 'react'

const ButtonEv = () => {
    let val:number = 100;
    const fruit =(num:number)=>{
        val = 140
        console.warn('function called',val)
    }
  return (
    <View>
        <Text style={{fontSize:30}} >{val}</Text>
        <Button  onPress={()=>fruit(40)} title='On Press' color={'green'} />
    </View>
  )
}

export default ButtonEv;