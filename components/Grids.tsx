import { View, Text } from 'react-native';
import React from 'react';

const Grids = () => {
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
      {/* <Text> Grid  </Text> */}
      <View style={{flex:1 , flexDirection:'row' , flexWrap:'wrap', padding:10}} > 
        {
            users.map((item)=>(
                <Text style={{fontSize:20, padding:20, backgroundColor:'blue',margin:10}} >{item.name}</Text>
            ))
        }
      </View>
    </View>
  )
 }

export default Grids;

