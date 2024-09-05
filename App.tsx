import React from 'react';
import ButtonEv from './components/ButtonEv';
import {Text, View, Button} from 'react-native';
import Style from './components/Style';
import Hooks from './components/Hooks';
import Input from './components/Input';
import Form from './components/Form';
import FlatListUse from './components/FlatListUse';

function App(): React.JSX.Element {
  const name:string = 'deepanshu';
  const myInterests:Array<string> = ['Programming','Designing','Editing'];
  const age:number = 18;
  return (
    <View>
      <Text style={{fontSize: 25, textAlign: 'center'}}>

      </Text>
      {/* {
        myInterests.map((item,i)=>{
         return(
          <Text key={i} >
          {item}
         </Text>
         )
        })
      } */}
      {/* <Text style={{fontSize: 25, textAlign: 'center'}} >
        {
          age < 18 ? 'You ar child' : 'You can Vote'
        }
      </Text> */}
      {/* <ButtonEv/> */}
      {/* <Hooks/> */}
      {/* <Style/> */}
      {/* <Input /> */}
      {/* <Form/> */}
      <FlatListUse />
    </View>
  );
}

export default App;
