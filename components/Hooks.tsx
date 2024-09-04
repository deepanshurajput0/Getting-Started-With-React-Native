import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Hooks = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <Button
        title="Increment"
        color="red"
        onPress={() => setCount(count + 1)}
      />
      <View style={styles.spacing} />
      <Button
        title="Decrement"
        color="blue"
        onPress={() => setCount(count - 1)}
      />
      <User count={count} />
    </View>
  );
};


type propsData ={
    count:number
}

const User:React.FC<propsData> =(props)=>{
    return(
        <View >
          <Text style={styles.countText} >
            Child Component
          </Text>
          <Text style={styles.countText} >
            {props.count}
          </Text>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  countText: {
    fontSize: 30,
    marginBottom: 20,
  },
  spacing: {
    marginVertical: 10,
  },
});

export default Hooks;
