import React from 'react';
import { StatusBar, Platform, View, Text } from 'react-native'
import { WebView } from 'react-native-webview'
function App(): React.JSX.Element {
  // const name:string = 'deepanshu';
  // const myInterests:Array<string> = ['Programming','Designing','Editing'];
  // const age:number = 18;
  return (
    <WebView source={{uri:'https://www.youtube.com'}} />

  );
}

export default App;
