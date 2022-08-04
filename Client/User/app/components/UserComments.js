import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import HomeScreen from './HomeScreen';
import axios from 'axios';
import { Dropdown } from 'react-native-element-dropdown';
const UserComments = () => {
  const [listOfComment, setListOfComments] =useState([])
  const [comment ,setComment] = useState("")
  const [role ,setRole] = useState("")
  const [email ,setEmail] = useState("")      
  const navigation =useNavigation();
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
    const [valuet, setValuet] = useState(null);
   
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
const data = [
  {description : "User",
  value:1
  },
  {
    description:"Driver",
    value:2
  }
]

const createComment = () =>{
  axios.post("http://10.4.15.39:8000/comment/addcomment", {
     comment,email, role,
  }).then((response) =>{
    setListOfComments([...listOfComment,
    
      JSON.stringify({ comment, email, role})
    
  ]);
  }).then(
    Alert.alert(
      'Thanks',
                  'Your Comment has been submitted. Thank You for your Feedback!',
                  [{text: 'Proceed', onPress: () => { 
                    
                    navigation.navigate(HomeScreen)}},
                   
                  ],
                  {cancelable: false},
    )
  ).catch(error => console.log(error.response.request._response));
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
       <Dropdown
         style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
         placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={230}
                labelField="description"
                searchPlaceholder="Search..."
                valueField="value"
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                value={valuet}
                onChange={
                  
                  (itemN => {
                    setValuet(itemN.description);
                    setRole(itemN.description);
                    setIsFocus(false);
                    
                console.log(itemN)
                }
                  
                )
                  
                }
      ></Dropdown>
      <TextInput
        style={styles.input}
        value={valuet}
        placeholder="Please provide your role"
        editable={false}
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
                        
                        onPress={() =>
                        {
                          if(!email || !comment || !role)
               {
                Alert.alert(
            'All Fieds requred',
            'You need to fill all fields first',
            [{text: 'OK', onPress: () => {navigation.navigate(UserComments)}}],
            {cancelable: false},
          )
               } 
               else          
                           createComment()}}
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
  container: {
    backgroundColor: 'white',
    padding: 8,
    top: 20,
    
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 0,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  input: {
      height: 40,
      width:300,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
});

export default UserComments ;

