import { View, Text, FlatList } from 'react-native'
import React from 'react'

const FlatListUse = () => {
    type User ={
        id:number;
        name:string;
    }
    const users:Array<User> =[
        {
            id:1,
            name:'deepanshu'
        },
        {
            id:2,
            name:'Sam'
        },{
           id:3,
           name:'John Doe'
        }
    ]



  return (
    <View>
      <Text>FlatListUse</Text>
      <FlatList 
      data={users}
      renderItem={({item})=><Text>{item?.name}</Text>}
      />
    </View>
  )
}

export default FlatListUse;






