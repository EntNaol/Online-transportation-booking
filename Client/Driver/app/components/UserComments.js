import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useEffect, useState } from 'react';

import axios from 'axios';
const UserComments = () => {
  const [listOfComment, setListOfComments] =useState([])
  const [comment ,setComment] = useState("")
  const [role ,setRole] = useState("")
  const [email ,setEmail] = useState("")      
  const navigation =useNavigation();

  /*
  const _submitData = () =>{
    fetch("http://10.4.17.84:8000/driver/comment", {
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            comment : comment,
        })
    }).then(res => res.json())
    .then(data =>{
        Alert.alert(`Comment Added!!`)
    }).catch(err =>{
        console.log("error",err)
    })
*/ 
//10.4.17.61

const createComment = () =>{
  axios.post("http://10.4.118.198:8000/comment/addcomment", {
     comment,email, role,
  }).then((response) =>{
    setListOfComments([...listOfComment,
    
      JSON.stringify({ comment, email, role})
    
  ]);
  }).catch(error => console.log(error.response.request._response));
} 
  return (
    <View style=
    {{
        top:80,
        left:20,
    }}>
     <Image 
          style={{
                width:80, 
                height: 60, 
                resizeMode: "contain",
                left:10,
                top:-10,
            }} 
            source={{
            uri: "https://cdn0.iconfinder.com/data/icons/free-daily-icon-set/512/Comments-512.png",
        }}
        />
      <Text style={{
        fontSize:18,

      }}>Give Us Your Comments!</Text>
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Enter your Email"
        onChangeText={text => setEmail( text )}
        //onContentSizeChange={e => setHeight(e.nativeEvent.contentSize.height)}
      />
      <TextInput
        style={styles.input}
        value={comment}
        placeholder="..."
        onChangeText={text => setComment( text )}
        //onContentSizeChange={e => setHeight(e.nativeEvent.contentSize.height)}
      />
      <TextInput
        style={styles.input}
        value={role}
        placeholder="Please provide your role"
        onChangeText={text => setRole( text )}
        //onContentSizeChange={e => setHeight(e.nativeEvent.contentSize.height)}
      />
      
      <View style={{
          top:100,
          left:250
        }}>
       <TouchableOpacity style={{
                          top:0,
                          backgroundColor:'orange',
                          borderRadius:10,
                          width:75,
                          height:40,
                          
                        }}
                        
                        onPress={() => createComment()}
                      >
                        <Text style={{
                          padding:7,
                        textAlign:'center',
                        fontSize:18,
                        fontWeight:'bold',
                        }}>Submit</Text>
        
        </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  input: {
    
    width:300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UserComments ;

