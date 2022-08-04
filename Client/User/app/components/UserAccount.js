import { StyleSheet, Text,TextInput, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

const UserAccount = () => {
    const navigation= useNavigation();
    const [firstName ,setFirstName] = useState()
    const [lastName ,setLastName] = useState()
    const [email ,setEmail] = useState()
    const [password ,setPassword] = useState()
    const [username ,setusername] = useState()
  return (
   

    <View style={{
      top:80,
      left:20,
  }}>
  <View>
       <Image 
          style={{
                width:80, 
                height: 60, 
                resizeMode: "contain",
                left:10,
                top:-10,
            }} 
            source={{
            uri: "https://st2.depositphotos.com/3591429/5992/i/950/depositphotos_59926519-stock-photo-yellow-sedan-taxi-car.jpg",
        }}
        />
        </View>
        <View>
        <Text style={{
        fontSize:18,
        fontWeight:'bold'
      }}> Your Account</Text>
      <TextInput
                label='First Name'
                style={styles.input}
               // value={}
                placeholder="First Name"
                editable={false}
                mode="outlined"
                onChangeText={text => setFirstName( text )}
            />

            <TextInput
                label='Last Name'
                style={styles.input}
               // value={lastName}
                placeholder="Last Name"
                editable={false}
                mode="outlined"
                onChangeText={text => setLastName( text )}
            />
            
            <TextInput
                label='Username'
                style={styles.input}
               // value={lastName}
                placeholder="Username"
                editable={false}
                mode="outlined"
                onChangeText={text => setusername( text )}
            />


            <TextInput
                label='Email'
                style={styles.input}
               // value={email}
                placeholder="Email"
                editable={false}
                mode="outlined"
                onChangeText={text => setEmail( text )}
            />

          
        </View>
    </View>
  )
}

export default UserAccount

const styles = StyleSheet.create({
    input: {
        height: 40,
        width:300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})