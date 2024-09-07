import { View, Text, Button } from 'react-native'
import React,{useState} from 'react'

const Toggle = () => {
    const [toggle,setToggle] = useState<boolean>(true)
  return (
    <View>
      <Text>
        {
            toggle ? 'Show' : 'Hide'
        }
      </Text>
      <Button title='Show' onPress={()=>setToggle(!toggle)} />
        
    </View>
  )
}

export default Toggle


