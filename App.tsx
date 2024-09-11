import React from 'react';
import { StatusBar, Platform, View, Text, Button } from 'react-native'
import { WebView } from 'react-native-webview'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
function App(): React.JSX.Element {
  // const name:string = 'deepanshu';
  // const myInterests:Array<string> = ['Programming','Designing','Editing'];
  // const age:number = 18;
  return (
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='Home' component={Home} />
       
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const Home =()=>{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
      <Text>Home Screen </Text>
    </View>
  )
}
const Login =(props)=>{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
      <Text>Login Page </Text>
      <Button title='Go to Home' onPress={()=>props.navigation.navigate('Home')} />
    </View>
  )
}

export default App;
