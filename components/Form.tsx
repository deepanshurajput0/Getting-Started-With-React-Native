import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [display, setDisplay] = useState(false)
  return (
    <View>
      <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center'}} >Simple Form in React native</Text>
       <TextInput 
       placeholder='Enter Your Name' 
       value={name}
       onChangeText={(text)=>setName(text)}
       style={{borderColor:'black', borderWidth:2, margin:10}}

       />
       <TextInput 
       placeholder='Enter Your Email' 
       value={email}
       onChangeText={(text)=>setEmail(text)}
       style={{borderColor:'black', borderWidth:2, margin:10}}

       />
       <TextInput 
       placeholder='Enter Your Password' 
       value={password}
       secureTextEntry={true}
       onChangeText={(text)=>setPassword(text)}
       style={{borderColor:'black', borderWidth:2, margin:10}}
       />
       <Button title='Submit' onPress={()=>setDisplay(true)}   />
        {
            display ? <View> 
                 <Text style={{fontSize:20, textAlign:'center'}} >User Name is : {name}</Text>
                 <Text style={{fontSize:20, textAlign:'center'}} >User Email is : {email}</Text>
                 <Text style={{fontSize:20, textAlign:'center'}} >User Password is : {password}</Text>
            </View> : null
        }
    </View>
  )
}






export default Form

