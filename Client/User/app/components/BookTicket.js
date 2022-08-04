import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React, { useState,useEffect } from 'react'
import tw from 'tailwind-react-native-classnames'
import { View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native-elements'
import moment from 'moment';
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, selectOrigin, selectTravelTimeInformation, setTicketInformation } from '../slices/navSlice'
import Ticketing from './Ticketing'

import QRCode from 'react-native-qrcode-svg';
// import Intl from 'intl/lib/core'
// import 'Intl/locale-data'

const data= [
  {
    id:"MiniBus-Taxi",
    title:"MiniBus-Taxi",
    multiplier:1,
    image: "https://tse1.mm.bing.net/th?id=OIP.GeOb2VUXPQ4CQbSzl7nPmQHaE9&pid=Api&P=0&w=230&h=154",
  },
  {
    id:"Lada-Taxi",
    title:"Lada Taxi",
    multiplier: 3,
    image: "https://tse3.mm.bing.net/th?id=OIP.jtvLkSeBTu9w9qtBBxN_QAHaFj&pid=Api&P=0&w=206&h=155",    
  }
];

const SURGE_CHARGE_RATE = 1.5;
const BookTicket = () => {
  const navigation= useNavigation();
  const [selected,setSelected]= useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation)
  const ticket = useSelector(setTicketInformation);
  const dispatch= useDispatch()
  const origin = useSelector(selectOrigin)
  const des = useSelector(selectDestination)
  const [currentDate, setCurrentDate] = useState(null);
  const [price, setPrice]= useState(null)

  // const saveTicket = () =>{
  //   axios.put("http://192.168.43.249:3001/api/user/${email}", {
  //     firstName,lastName, email, password,username,
  //   }).then((response) =>{
  //     setListOfUsers([...listOfUsers,
      
  //       JSON.stringify({ firstName, lastName, email, password, username}),
        
  //   ]);
   
  //   }).catch(error => Alert.alert(error.response.request._response));
  // } 
  useEffect(() => {
      var date = new Date().getDate()
      var month = new Date().getMonth()
      var year = new Date().getFullYear()
      var hours = new Date().getHours()
      var min = new Date().getMinutes() 
      var sec = new Date().getSeconds()

      setCurrentDate(date + '/' + month + '/' + year + '   ' +hours + ':' + min + ':' +  sec)
  }, []);

  return (
    <SafeAreaView style={tw `bg-white flex-grow`}>
    <View>
   
      
      <Text style={tw `text-center text-xl py-5`}>Book Your Ride - {travelTimeInformation?.distance.text}</Text>

    </View>
    
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({item : {id,title, multiplier, image},item}) =>(
        <TouchableOpacity
          onPress={() => setSelected(item)}
          style={tw` flex-row justify-between items-center px-10 ${
            id===selected?.id && "bg-gray-200"
          }`}
        >
          <Image
            style={{
              width: 100,
              height:100,
              resizeMode: "contain",
            }}
            source={{ uri:image }}
          ></Image>
          <View style={tw` -ml-6`}>
          <Text style={tw`text-xl font-semibold`}>{title}</Text>
          <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
          <Text style={tw`text-xl font-bold`}
          >
            {/* {new Intl.NumberFormat('en-gb', {
              style:'currency',
              currency:'GBP'
            }).format(
              (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
            )
            } */}
            Br
            { (SURGE_CHARGE_RATE * multiplier*travelTimeInformation?.duration.value)/100 }
          </Text>
          
          </View>
          
        </TouchableOpacity>
      ) }
    >

    </FlatList>
    <TouchableOpacity 
    disabled={!selected}
   
    style={tw`bg-black py-3 m-14 rounded-full
    ${!selected && "bg-gray-300"}`}

    onPress={
      () => {
        dispatch(
        setTicketInformation({
          info: travelTimeInformation,
          ori:origin.description,
          destination:des.description,
          timestamp:currentDate,
          vehicle:selected?.title,
          price: (travelTimeInformation?.duration.value* selected.multiplier*SURGE_CHARGE_RATE)/100  ,
          }
        ) )
      
        //saveTicket()
        navigation.navigate(Ticketing)
      }
    }
    >
      <Text style={tw `text-center text-white text-xl`}>Choose {selected?.title}</Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

export default BookTicket;

const styles = StyleSheet.create({})