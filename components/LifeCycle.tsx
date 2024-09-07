import { View, Text, Button } from 'react-native'
import React,{useEffect, useState} from 'react'

const LifeCycle = () => {
    const [counter,setCounter] = useState<number>(0)
    useEffect(()=>{
      console.warn(counter)
    },[counter])
  return (
    <View>
        <Button title='counter' onPress={()=>setCounter(counter+1)} />
    </View>
  )
}

export default LifeCycle