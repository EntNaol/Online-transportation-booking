import { StyleSheet, Text, View,Button, Alert } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';
import UserLogin from './UserLogin';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import axios from "axios";
import HomeScreen from './HomeScreen'

// const UserSchema = {
//     name: "User",
//     properties: {
//       _id: "int",
//       fname: "string",
//       lname: "string",
//       password: "string",
//       email:"string"
//     },
//     primaryKey: "email",
//   };

//   const realm = await Realm.open({
//     path: "myrealm",
//     schema: [UserSchema],
//   });
const UserSign = () => {
    const navigation= useNavigation();
    const [firstName ,setFirstName] = useState()
    const [lastName ,setLastName] = useState()
    const [email ,setEmail] = useState()
    const [password ,setPassword] = useState()
    const [username ,setusername] = useState()

    // const _submitData = () =>{
    //     fetch("http://192.168.43.249:3001/api/user", {
    //         method:'POST',
    //         headers:{
    //             'Content-Type' : 'application/json'
    //         },
    //         body:JSON.stringify({
    //             firstName : firstName,
    //             lastName : lastName,
    //             email : email,
    //             password :password,
    //         })
           
    //     }).then(res => res.json())
    //     .then(data =>{
    //         Alert.alert(`Created successfly!!`)
    //         navigation.navigate(HomeScreen)
    //     }).catch(err =>{
    //         console.log("error",err)
    //     })
    // }
    const createUsers = () =>{
        axios.post("http://10.4.15.39:3001/api/user", {
          firstName,lastName, email, username, password
        }).then((response) =>{
          setListOfUsers([...listOfUsers,
          
            JSON.stringify({ firstName, lastName, email, username, password}),
            
        ]).then(
          Alert.alert(
            '',
            'Your account is set up successfully',
            [{text: 'OK', onPress: () => {navigation.navigate(HomeScreen)}}],
            {cancelable: false},
          )
        )
       
        }).catch(error => Alert.alert(error.response.request._response));
      } 

  return (
    <View style=
    {{
        top:80,
        left:20,
    }}>
      <Text> User Sign Up</Text>
      <TextInput
                label='First Name'
                style={styles.input}
                value={firstName}
                placeholder="First Name"
            //    theme = {theme}
                mode="outlined"
                onChangeText={text => setFirstName( text )}
            />

            <TextInput
                label='Last Name'
                style={styles.input}
                value={lastName}
                placeholder="Last Name"
            //    theme = {theme}
                mode="outlined"
                onChangeText={text => setLastName( text )}
            />

            <TextInput
                label='Email'
                style={styles.input}
                value={email}
                placeholder="Email"
           //     theme = {theme}
                mode="outlined"
                onChangeText={text => setEmail( text )}
            />
            <TextInput
                label='Username'
                style={styles.input}
                value={username}
                placeholder="Username"
           //     theme = {theme}
                mode="outlined"
                onChangeText={text => setusername( text )}
            />


            <TextInput
                label='Password'
                style={styles.input}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
           //     theme = {theme}
                mode="outlined"
                onChangeText={text => setPassword( text )}
            />

{/* <Button icon="content-save" title="Press Me" style={{width:180,height:100,}} mode="contained" onPress={() => createUsers()}>
                    SignUp
                </Button> */}
                <View style={{width:100}}>
                <TouchableOpacity  style={{width:80,height:40,backgroundColor:"orange", padding:10, borderRadius:10}}  onPress={() => createUsers()}>
                <Text>Sign Up</Text>
                </TouchableOpacity>
                </View>
   
    </View>
    
  )
}

export default UserSign;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width:300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
   
  },
});