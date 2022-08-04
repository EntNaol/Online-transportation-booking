import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import { useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import HomeScreen from './HomeScreen'
import { selectDestination, selectOrigin, selectTicketInformation, setDestination, setOrigin, setTicketInformation, setTravelTimeInformation } from '../slices/navSlice'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'


const Ticketing = () => {
  const qrr= useSelector(selectTicketInformation)
  // const [listOfTicket, setListOfTickets] =useState([])
  // const [ori ,setOri] = useState(" ")
  // const orig = useSelector(selectOrigin)
  // const destination= useSelector(selectDestination)
  // const origi=qrr?.ori.description
  // const destinationi=destination?.ori.description
  // const info=JSON.stringify(qrr?.information)
  const viewRef = useRef();
  const dispatch= useDispatch()
  const navigation = useNavigation();
  
  const timestamp=JSON.stringify(qrr.timestamp)
  const price=qrr.price
  const duration=JSON.stringify(qrr.duration)

  // const createTicket = () =>{
  //   axios.post("http://10.4.15.39:8000/ticket/addticket", {
  //      info, destinationi, duration, origi, price, timestamp
  //   }).then((response) =>{
  //     setListOfTickets([...listOfTicket,
      
  //       JSON.stringify({ ori})
      
  //   ]);
  //   }).catch(error => console.log(error.response.request._response));
  // } 


  return (
    <View 

    style=
    {{
        top:40,
        left:20,
    }}>
      <Text style={{ 
        fontSize:26, fontWeight:"bold", marginLeft:90}}>Your Ticket</Text>
       <View 
             ref={viewRef}
            
       style={{
          borderColor:"black",
          margin:12,
          borderWidth:8,
          height:280,
          width:280,
          left:10
        }}>
        {/* <Image source={qrcode}
              style={{
                 width:295,
                 height:285
               }}
        ></Image> */}
        {/* <QRCode
          value={ticketId}
          size={280}
          bgColor='#000'
          fgColor='#fff'
       ></QRCode> */}
     {  console.log(qrr)}
     <View
     style={{
       padding:7
     }}
     >
         <QRCode
       
          getRef={(ref) => (qrr = ref)}
          // ref={myQRCode}
          //QR code value
          value={JSON.stringify(qrr)}
          //size of QR Code
          size={250}
          ></QRCode>
       </View>
       </View>

      <View
        style={{
          left:10,
         width:330,
         top:10
          
        }}
      >
         <Text>Origin : {qrr.ori}</Text>
         <Text>Destination : {qrr.destination}</Text>
         <Text >Price : {qrr.price}</Text>
      <Text style={{top:20, color:"red", fontSize:16, fontWeight:'bold'}}>
        Please take a Screenshot of your ticket, and present it to the ticket officer!
      </Text>
{/* 
      <Image
          source={{uri: imageURI}}
          style={{
            width: 200,
            height: 300,
            resizeMode: 'contain',
            marginTop: 5
          }}
        /> */}
       <TouchableOpacity
          style={{
            fontSize: 18,
            top:40,
            width:140,
            height:50,
            borderRadius:10,
            backgroundColor: 'orange',
            padding: 10,
            left:80,           
          }}
          onPress={() => {
            Alert.alert(
                  'Make Sure you have taken a Screenshot of your ticket!!',
                  'Click "Proceed" if you have taken a screenshot or "Go Back" if you have not.',
                  [{text: 'Proceed', onPress: () => { 
                    // { createTicket(dispatch)}
                    {
                      dispatch(
                      setOrigin(null),
                      setDestination(null),
                      setTravelTimeInformation(null),
                      setTicketInformation(null))
                    }
                    
                    navigation.navigate(HomeScreen)}},
                   {text:"Go Back"}
                  ],
                  {cancelable: false},
                ) 
               
               } 
          
          
         }>
          <Text style={{left:10}}>
            Return to Home
          </Text>
        </TouchableOpacity>
      </View>
   
    </View>
  )
}

export default Ticketing

const styles = StyleSheet.create({})