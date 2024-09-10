import React from 'react';
import { StatusBar, Platform, View, Text } from 'react-native'

function App(): React.JSX.Element {
  const name:string = 'deepanshu';
  const myInterests:Array<string> = ['Programming','Designing','Editing'];
  const age:number = 18;
  return (
    <View style={{flex:1}} >
      <StatusBar 
      backgroundColor={'orange'}
      barStyle={'dark-content'}
      hidden={false}
      />

      <Text style={Platform.OS === 'android' ? {color:"red"}:{color:"green"}} >{Platform.OS === 'android' ? 'This is Android': 'This is IOS'}</Text>

    </View>
  );
}

export default App;
