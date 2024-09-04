import React from 'react';

import {Text, View, Button} from 'react-native';

function App(): React.JSX.Element {
  const name:string = 'deepanshu';
  const myInterests:Array<string> = ['Programming','Designing','Editing'];
  const age:number = 18;
  return (
    <View>
      <Text style={{fontSize: 25, textAlign: 'center'}}>{name}</Text>
      {
        myInterests.map((item,i)=>{
         return(
          <Text key={i} >
          {item}
         </Text>
         )
        })
      }
      <Text style={{fontSize: 25, textAlign: 'center'}} >
        {
          age < 18 ? 'You ar child' : 'You can Vote'
        }
      </Text>
    </View>
  );
}

export default App;
