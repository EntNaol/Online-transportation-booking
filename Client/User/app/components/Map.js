// import { StyleSheet, Text, View } from 'react-native'
// import React, { useDebugValue, useEffect, useRef } from 'react'
// import tw from 'tailwind-react-native-classnames'
// import MapView, {Marker, Callout} from 'react-native-maps';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice';
// import MapViewDirections from 'react-native-maps-directions';
// import {GOOGLE_MAPS_APIKEY} from "@env";
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import HomeScreen from '../screens/HomeScreen';
// // import {region} from '../screens/HomeScreen'

// const Map = () => {
//   const [pin, setPin]= React.useState({latitude: 37.78825,
//     longitude:-122.4324});
//     const [pinD, setPinD]= React.useState(null)
//     const [region, setRegion]= React.useState({latitude: 37.78825,
//       longitude:-122.4324})
//   //  const region = useSelector(region)
  
//             const origin=  useSelector(selectOrigin);
//             const destination= useSelector(selectDestination)
//             const mapRef= useRef(null);
//             const dispatch= useDispatch();
//             useEffect(() => {
//               if(!origin || !destination) return;

//               mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
//                 edgePadding: { top: 50, right: 50, bottom: 50, left:50},
//               });
//             } , [origin,destination]);

//             useEffect(() => {
//               if(!origin || !destination) return;
//               const getTravelTime= async() => {
//                 fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=AIzaSyC3JCNErR0zLBcTbzX-TPr7xgecRURsjr8`).
//                 then((res) => res.json()).
//                 then(data => {  
//                   dispatch(setTravelTimeInformation(data.rows[0].elements[0])
//                 );})
//               }
//               getTravelTime();
//             },[origin,destination,'AIzaSyC3JCNErR0zLBcTbzX-TPr7xgecRURsjr8'])

//         return (
//           <View>
//               <View style={{top:40}}>
//         <GooglePlacesAutocomplete
//           placeholder='Search'
//           onPress={(data, details = null) => {
//             // 'details' is provided when fetchDetails = true
//             console.log(data, details);
//             setRegion({
//               latitude:details.geometry.location.lat,
//               longitude:details.geometry.location.lng,

//             })
//           }}
//           query={{
//             key: 'AIzaSyC3JCNErR0zLBcTbzX-TPr7xgecRURsjr8',
//             language: 'en',
//             location:` ${region.latitude}, ${region.longitude}`
//           }}
//           styles={{
//             container:{flex:0,position:"absolute",width:"100%",zIndex:1},
//             listView:{backgroundColor:"white"}
//           }}
//           fetchDetails={true}
//           GooglePlacesSearchQuery={{rankby:"distance"}}
//         />
//         <MapView style={{width:342,
//                         height:400,
//                         top:50
//         }}
//         initialRegion={{
//           latitude: region.latitude,
//               longitude:region.longitude,
//               latitudeDelta:0.0922,
//               longitudeDelta:0.0421
//         }}
//         provider="google"
//         >
        
//           <Marker
//             coordinate={pin}
//             pinColor="blue"
//             draggable={true}
//             onDragStart={(e) => {console.log("Drag Start", e.nativeEvent.coordinates)
//             }}
//             onDragEnd={(e) => {
//               setPin({
//                 latitude: e.nativeEvent.coordinate.latitude,
//                 longitude:e.nativeEvent.coordinate.longitude,
//                 latitudeDelta:0.0922,
//               longitudeDelta:0.0421 
//               })
//             }}
//           >
//             <Callout>
//               <Text>I'm here</Text>
//             </Callout>
//           </Marker>
//           <Marker coordinate={{latitude:region.latitude, longitude:region.longitude}}
//            draggable={true}
//              onDragStart={(ev) => {console.log("Drag Start", ev.nativeEvent.coordinates)
//             }}
//             onDragEnd={(ev) => {
//               setPinD({
//                 latitude: ev.nativeEvent.coordinate.latitude,
//                 longitude:ev.nativeEvent.coordinate.longitude,
//                 latitudeDelta:0.0922,
//               longitudeDelta:0.0421 
//               });
              
//             }}
//           />
//         </MapView> 
//         </View>
//         {/* <MapView
//           showsMyLocationButton={true}
//           showsUserLocation={true}
//             style={tw `flex-1`}
//             mapType="standard"
            
//             initialRegion={{
//               latitude: 37.78825,
//               longitude:-122.4324,
//               latitudeDelta:0.0922,
//               longitudeDelta:0.0421
//             }}
//           >
//           {origin && destination &&(
//               <MapViewDirections
//                 origin={origin.description}
//                 destination={destination.description}
//                 apikey={AIzaSyC3JCNErR0zLBcTbzX-TPr7xgecRURsjr8}
//                 strokeWidth={3}
//                 strokeColor='black'
//               />
//           )}
//             {origin?.location && (
//               <Marker
//                 coordinate={{
//                   latitude: pin.location.lat,
//                   longitude: pin.location.lat,
//                 }}
//                 title="Origin"
//                 description={origin.description}
//                 identifier="origin"
//               />
//             )}
//             {destination?.location && (
//               <Marker
//                 coordinate={{
//                   latitude: pin.location.lat,
//                   longitude: pin.location.lat,
//                 }}
//                 title="Destination"
//                 description={destination.description}
//                 identifier="destination"
//               />
//             )}

            
//           </MapView> */}
//           </View>
          

              
//              );
          
            
                  
// }

// export default Map;

// const styles = StyleSheet.create({
//     page: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: "#F5FCFF"
//     },
//     container: {
//     height: '100%',
//       width: '100%',
//       backgroundColor: 'blue',
//     },
//     map: {
//       flex: 1
//     }
//   });


import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useDebugValue, useEffect, useRef } from 'react'
import tw from 'tailwind-react-native-classnames'
import MapView, {Marker} from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTimeInformation, setDestination } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
const Map = () => {
   const origin=  useSelector(selectOrigin);
   const destination= useSelector(selectDestination)
   const mapRef= useRef(null);
   const dispatch= useDispatch();
   const navigation = useNavigation();
   useEffect(() => {
    if(!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left:50},
    });
   } , [origin,destination]);

   useEffect(() => {
    if(!origin || !destination) return;
    const getTravelTime= async() => {
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=
      ${origin.description}&destinations=${destination.description}&key=${'AIzaSyC3JCNErR0zLBcTbzX-TPr7xgecRURsjr8'}`).
      then((res) => res.json()).
      then(data => {
        dispatch(setTravelTimeInformation(data.rows[0].elements[0])  );})
      .catch(error => Alert.alert(error.response.request._response))
      }
    getTravelTime();
   },[origin,destination,'AIzaSyC3JCNErR0zLBcTbzX-TPr7xgecRURsjr8'])
  return (
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
    {origin && destination &&(
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
                  setDestination(null))}}] );}}/>
    )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location.lat,
            longitude: origin?.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
          pinColor="green"
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
      )}</MapView>);
}

export default Map;

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