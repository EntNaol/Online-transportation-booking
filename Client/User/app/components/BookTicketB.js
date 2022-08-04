import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import tw from 'tailwind-react-native-classnames'
import { View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector,useDispatch } from 'react-redux'
import { selectdStation, selectOrigin, selectoStation, selectTravelTimeInformation,setTravelTimeInformation, setTicketInformation } from '../slices/navSlice'
import Ticketing from './Ticketing'
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';




const data= [
  {
    id:"Anbessa Bus",
    title:"Anbessa Bus",
    multiplier:0.5,
    image: "https://tse1.mm.bing.net/th?id=OIP.SDjqM2CYYQblSAYF_KnYMQHaE7&pid=Api&P=0&w=273&h=182",
  },
  {
    id:"Sheger-Bus",
    title:"Sheger Bus",
    multiplier: 0.6,
    image: "https://tse3.mm.bing.net/th?id=OIP.qDUNjJblLBuDzRHwOqhpYQHaE8&pid=Api&P=0&w=298&h=198",    
  }
];
const SURGE_CHARGE_RATE = 1.5;
const BookTicketB = () => {
  const [currentDate, setCurrentDate] = useState(null);
  const oStation=  useSelector(selectoStation);
  const destination= useSelector(selectdStation);
  const origin = useSelector(selectOrigin)
  const travelTimeInformation = useSelector(selectTravelTimeInformation)
  const [selected,setSelected]= useState(null);
  const mapRef= useRef(null);
   const dispatch= useDispatch();
   const navigation = useNavigation()

   useEffect(() => {
    var date = new Date().getDate()
    var month = new Date().getMonth()
    var year = new Date().getFullYear()
    var hours = new Date().getHours()
    var min = new Date().getMinutes() 
    var sec = new Date().getSeconds()

    setCurrentDate(date + '/' + month + '/' + year + '   ' +hours + ':' + min + ':' +  sec)
}, []);

   useEffect(() => {
    if(!oStation || !destination) return;

    mapRef.current.fitToSuppliedMarkers(['oStation', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left:50},
    });
    
   } , [oStation, destination]);

   useEffect(() => {
    if(!oStation || !origin) return;

    mapRef.current.fitToSuppliedMarkers(['origin', 'oStation'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left:50},
    });
    
   } , [origin,oStation]);
  useEffect(() => {
    if(!oStation || !origin) return;
    const getTravelTime= async() => {
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${destination.description}&destinations=${oStation.description}&key=${'AIzaSyC3JCNErR0zLBcTbzX-TPr7xgecRURsjr8'}`).
      then((res) => res.json()).
      then(data => {
        //console.log(data)
        dispatch(setTravelTimeInformation(data.rows[0].elements[0])
     );
    })
    }
    getTravelTime();
   },[origin,oStation,'AIzaSyC3JCNErR0zLBcTbzX-TPr7xgecRURsjr8'])
  return (
    <View>
    <View style={tw `h-1/2`}>

    <MapView
      ref={mapRef}
      style={tw `flex-1`}
      mapType="standard"
      
      initialRegion={{
        latitude: origin?.location.lat,
        longitude: origin?.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
    {origin && oStation &&(
        <MapViewDirections
          origin={origin.description}
          destination={oStation.description}
          apikey={'AIzaSyC3JCNErR0zLBcTbzX-TPr7xgecRURsjr8'}
          strokeWidth={3}
          strokeColor='red'
          mode='WALKING'
          onError={(errorMessage) => {
              // console.log('GOT AN ERROR');
          
                Alert.alert(
              "No Possible Routing!",
              "There is no possible route between these points. Please go back and enter valid locations" ,
               [
              { text: "Return", onPress: () => {(navigation.navigate(HomeScreen));    
               dispatch(
                  setDestination(null)
              )
         
              
               }
              }
            ]
           );

      
              
            }}
        />
        
    )}
    {destination && oStation &&(
        <MapViewDirections
          origin={destination.description}
          destination={oStation.description}
          apikey={'AIzaSyC3JCNErR0zLBcTbzX-TPr7xgecRURsjr8'}
          strokeWidth={3}
          strokeColor='black'
          onError={(errorMessage) => {
              // console.log('GOT AN ERROR');
          
                Alert.alert(
              "No Possible Routing!",
              "There is no possible route between these points. Please go back and enter valid locations" ,
               [
              { text: "Return", onPress: () => {(navigation.navigate(HomeScreen));    
               dispatch(
                  setDestination(null)
              )
         
              
               }
              }
            ]
           );

      
              
            }}
        />
        
    )}
    {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location.lat,
            longitude: origin?.location.lng,
          }}
          title="Current Location"
          description={origin?.description}
          identifier="You are here"
          pinColor="green"
        />
      )}
      {oStation?.value && (
        <Marker
          coordinate={{
            latitude: oStation.value.lat,
            longitude: oStation.value.lng,
          }}
          title="Origin Station"
          description={oStation.description}
          identifier="oStation"
          pinColor="blue"
        />
      )}
      {destination?.value && (
        <Marker
          coordinate={{
            latitude: destination.value.lat,
            longitude: destination.value.lng,
          }}
          title="Destination Station"
          description={destination.description}
          identifier="destination"
          pinColor="red"
        />
      )}
    </MapView>

    </View>




    <SafeAreaView style={tw `bg-white flex-grow h-1/2`}>
    <View >
      
      <Text style={tw `text-center text-xl py-5`}>Book Your Ride - {travelTimeInformation?.distance.text}</Text>

    </View>
    <View>
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
          /> 
          <View style={tw` -ml-6`}>
          <Text style={tw`text-xl font-semibold`}>{title}</Text>
          <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
          <Text style={tw`text-xl font-bold`}>
            {/* {new Intl.NumberFormat('en-gb', {
              style:'currency',
              currency:'GBP'
            }).format(
              (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
            )
            } */}
            Br 
            { Math.floor(SURGE_CHARGE_RATE * multiplier*travelTimeInformation?.duration.value)/100 }
          </Text>
          </View>
        </TouchableOpacity>
      ) }
    >

    </FlatList>
    </View>
    <View style={{height:240, top:10}}>
    <TouchableOpacity 
    disabled={!selected}
   
    style={tw`bg-black py-3 m-2 rounded-full 
    ${!selected && "bg-gray-300"}`}

    onPress={
      () => {
        dispatch(
        setTicketInformation({
          info: travelTimeInformation,
          oriStation: origin.location,
          ori  : oStation.description,
          destination:destination.description,
          timestamp:currentDate,
          vehicle:selected?.title,
          price: (travelTimeInformation?.duration.value* selected.multiplier*SURGE_CHARGE_RATE)/100,
          }
          
          // {
          //   timestamp:{
          //     date : currentDate
          // }
          // }
        )
        )
        navigation.navigate(Ticketing)
      }
   
      
    
    }
    >
      <Text style={tw `text-center text-white text-xl`}>Choose {selected?.title}</Text>
    </TouchableOpacity>
    </View>
    </SafeAreaView>
    </View>
  )
}

export default BookTicketB;

const styles = StyleSheet.create({})