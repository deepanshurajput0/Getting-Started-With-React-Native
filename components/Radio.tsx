import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Radio = () => {
    const [radio, setRadio] = useState<number>(1)
  return (
    <View style={styles.main} >
      <TouchableOpacity onPress={()=>setRadio(1)} >
        <View style={styles.radioflex} >
            <View style={styles.radiobg} >
                {
                    radio === 1 ? <View style={styles.fillRadio} ></View> : null
                }
            </View>
            <Text>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setRadio(2)} >
        <View style={styles.radioflex} >
        <View style={styles.radiobg} >
        {
                    radio === 2 ? <View style={styles.fillRadio} ></View> : null
                }
            </View>
            <Text>Radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        gap:20
    },
    radiobg:{
       borderColor:'green',
       height:30,
       width:30,
       borderRadius:100,
       borderWidth:2,
       marginRight:10,
    },
    radioflex:{
        flexDirection:'row'
    },
    fillRadio:{
        backgroundColor:'green',
        height:24,
        width:24,
        borderRadius:100,
        margin:1
    }
})

export default Radio


