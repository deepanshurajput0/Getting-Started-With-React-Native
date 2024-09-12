import { View, Text, Button} from 'react-native'
import React from 'react'

const Login = (props) => {
    const name:string = 'Deepanshu';
    const age:number = 20; 
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Login Page </Text>
    <Button
      title="Go to Home"
      onPress={() => props.navigation.navigate('Home',{name,age})}
    />
  </View>
  )
}

export default Login;