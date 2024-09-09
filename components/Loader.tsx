import { View, Text, ActivityIndicator, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const Loader = () => {
    const [loading, setLoading] = useState<boolean>(false)
  return (
    <View style={styles.main} >
      <ActivityIndicator size={100} animating={loading}  color={'green'} />
      <Button onPress={()=>setLoading(!loading)} title='Start Loading...' />
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Loader



