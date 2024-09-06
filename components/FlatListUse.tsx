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
        },{
          id:4,
          name:'Peter'
        },{
          id:5,
          name:'Jane'
        }
    ]



  return (
    <View>
      <Text>FlatListUse</Text>
      {/* <FlatList 
      data={users}
      renderItem={({item})=><Text style={{fontSize:20, textAlign:'center'}} >{item?.name}</Text>}
      /> */}
      {
        users.map((item)=>(
          <Text key={item.id} >{item.name}</Text>
        ))
      }
    </View>
  )
}

export default FlatListUse;






