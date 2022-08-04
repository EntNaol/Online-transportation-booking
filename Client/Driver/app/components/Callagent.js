import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
const number = '4848'
const Callagent = () => {
  return (
    <View style={{padding:100}}>
     <Text style={{ fontSize:25,}}>Call agent for any help</Text>
<TouchableOpacity style={{
                  top:30,
                  backgroundColor:'black',
                  borderRadius:10,
                  width:90,
                  height:40,
                  
                }}
                
                onPress={() => {
                  Linking.openURL(`tel:${number}`)
              }} 
              >
                <Text style={{
                  padding:7,
                textAlign:'center',
                fontSize:18,
                fontWeight:'bold',
                color: 'white' 
                }}>Call Agent</Text>

</TouchableOpacity>
    </View>
  )
}

export default Callagent

const styles = StyleSheet.create({})



