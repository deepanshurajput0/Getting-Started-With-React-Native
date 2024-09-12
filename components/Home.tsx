import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
type Data ={
    name:string,
    age:number
}

const Home:React.FC<Data> = () => {
    const route = useRoute()
    const { age, name } = route.params as Data ;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Home Screen </Text>
    <Text>{age}</Text>
    <Text>{name}</Text>
  </View>
  )
}

export default Home