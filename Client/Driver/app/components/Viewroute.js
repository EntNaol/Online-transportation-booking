import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useDebugValue, useEffect, useRef } from 'react'
import tw from 'tailwind-react-native-classnames'
import MapView, {Marker} from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTimeInformation, setDestination } from '../slices/navslices';
import MapViewDirections from 'react-native-maps-directions';

import { useNavigation } from '@react-navigation/native';
import Home from './Home';
const Viewroute = () => {
   const origin=  useSelector(selectOrigin);
   const destination= useSelector(selectDestination)
   const mapRef= useRef(null);
   const dispatch= useDispatch();
   const navigation = useNavigation();
  


  return (
    <MapView
     
      style={tw `flex-1`}
      mapType="standard"
     
      initialRegion={{
        latitude: 9.0087834774849,
        longitude: 38.75867284848,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
    {/* {origin && destination &&(
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
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
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )} */}
    </MapView>

     
  );
}

export default Viewroute;

const styles = StyleSheet.create({
    page: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    container: {
    height: '100%',
      width: '100%',
      backgroundColor: 'blue',
    },
    map: {
      flex: 1
    }
  });