import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';

const ButtonEv = () => {
  const [val, setVal] = useState<number>(100);

  const fruit = (num: number) => {
    const newValue = 140;
    setVal(newValue);
    Alert.alert('Function Called', `New Value: ${newValue}`);
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>{val}</Text>
      <Button onPress={() => fruit(40)} title='On Press' color={'green'} />
    </View>
  );
};

export default ButtonEv;
