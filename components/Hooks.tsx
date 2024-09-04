import { View, Text, Button } from 'react-native'
import React,{useState} from 'react'

const Hooks = () => {
    const [count,setCount] = useState<number>(0)
  return (
    <View>
        <Text style={{fontSize:30}} >{count}</Text>
      <Button title='Increment' 
      color={'red'} 
      onPress={()=>setCount(count+1)}
      ></Button>
      <Button title='Decrement' 
      color={'blue'} 
      onPress={()=>setCount(count-1)}
      ></Button>
    </View>
  )
}

export default Hooks;

