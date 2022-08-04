import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import HomeScreen from './HomeScreen'
import tw from 'tailwind-react-native-classnames'
import { Image } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'
import UserSign from './UserSign'
import MapScreenT from './MapScreenT'

const UserLogin = () => {
   // const [text, onChangeText] = React.useState("Useless Text");
    const [text, onChangeText] = React.useState(null);
    const [pass, onChangePassword] = React.useState(null);
    const navigation =useNavigation();
    
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
            uri: "https://st2.depositphotos.com/3591429/5992/i/950/depositphotos_59926519-stock-photo-yellow-sedan-taxi-car.jpg",
        }}
        />
      <Text style={{
        fontSize:18,

      }}>User Login</Text>
     
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email"
        
      />
       <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={onChangePassword}
        value={pass}
        placeholder="Password"
        
      />
<View style={{width:160}}>
       <TouchableOpacity
      style={tw `p-2 pl-6 pb-6 pt-4 bg-gray-400 m-2 w-40 rounded-full`}
        onPress={() => navigation.navigate(HomeScreen)}
      >
        <Text style={{
        fontSize:18,
        left: 30
      }}>
            Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={tw `p-2 pl-6 pb-6 pt-4 bg-gray-600 m-2 w-40 rounded-full`}
        onPress={() => {
          
        navigation.navigate(UserSign);
        }}
      >
        <Text style={{
        fontSize:18,
        left: 30
      }}>
            Sign-up
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default UserLogin

const styles = StyleSheet.create({
    input: {
      height: 40,
      width:300,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });