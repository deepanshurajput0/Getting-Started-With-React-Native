import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const Input = () => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={{fontSize:20, textAlign:'center', color:'black'}} >{value}</Text>
      <TextInput
        placeholder="Enter Your Name"
        value={value}
        style={{margin: 20, borderColor: 'black', borderWidth: 2}}
        onChangeText={(text)=>setValue(text)}
      />
      <Button title='clean Input' onPress={()=>setValue('')} />
    </View>
  );
};

export default Input;
