import React from 'react';
import {StatusBar, Platform, View, Text, Button} from 'react-native';
import {WebView} from 'react-native-webview';
import Login from './components/Login';
import Home from './components/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  // const name:string = 'deepanshu';
  // const myInterests:Array<string> = ['Programming','Designing','Editing'];
  // const age:number = 18;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle:()=><Button title='Left' />,
            title: 'User Login',
            headerStyle:{
              backgroundColor:'white',
            },
            headerTitleStyle:{
              color:'white',

            }
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
