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
         ,{
          id:6,
          name:'Joey'
        }
         ,{
          id:7,
          name:'Markey'
        }
         ,{
          id:8,
          name:'Oggy'
        }
         ,{
          id:9,
          name:'deedee'
        }
    ]



  return (
    <View>
      <Text>FlatListUse</Text>
      <FlatList 
      data={users}
      renderItem={({item})=><Text style={{fontSize:20, padding:30}} >{item?.name}</Text>}
      />
     {/* <ScrollView  >
     {
        users.map((item)=>(
          <Text key={item.id} style={{fontSize:20, padding:30}} >{item.name}</Text>
        ))
      }
     </ScrollView> */}
    </View>
  )
}

export default FlatListUse;






