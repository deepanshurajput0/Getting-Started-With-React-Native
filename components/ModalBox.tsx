import { View, Text, Button, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const ModalBox = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <View style={styles.main} >
        <Modal
        transparent={true}
        visible={showModal}
        animationType='slide'
        >
         <View style={styles.centeredView} >
         <View style={styles.modalView} >
                <Text>Hello Code Step by Ste</Text>
                <Button title='Close' onPress={()=>setShowModal(false)} />
            </View>
         </View>
        </Modal>
     <View style={styles.buttonView} >
     <Button title='Open Modal' onPress={()=>setShowModal(true)} />
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,

    },
    buttonView:{
        flex:1,
        justifyContent:'flex-end'
    },
    centeredView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modalView:{
        // backgroundColor:'skyblue',
        padding:40,
        borderRadius:20,
        shadowColor:'black',
        elevation:5
    }
})

export default ModalBox


