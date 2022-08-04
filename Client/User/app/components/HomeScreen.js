// import React, { useRef, useState } from 'react';
// import { StyleSheet, Text, View, SafeAreaView,Dimensions ,Image} from 'react-native';
// import tw from 'tailwind-react-native-classnames';
// import NavOptions from '../components/NavOptions';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import {GOOGLE_MAPS_APIKEY } from "@env";
// import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
// import { useDispatch } from 'react-redux';
// import { setOrigin, setDestination} from "../slices/navSlice";
// import {NavigationContainer, useNavigation} from '@react-navigation/native';
// import UserAccount from './UserAccount'
// import UserComments from './UserComments'
// import Ticketing from './Ticketing'
// import UberLogo from '../assets/images/UberLogo.png';
// import account from '../assets/images/accounticon.jpg';
// import chat from '../assets/images/chat.png';
// import timer from '../assets/images/timer.png';
// import logout from '../assets/images/logout.jpg';
// import menuicon from '../assets/images/menuicon.jpg';
// import close from '../assets/images/closeicon.jpg';
// import {Animated} from 'react-native';
// import Payment from './Payment';

// import MapView, { Callout, Marker } from 'react-native-maps'


// const HomeScreen = () => {
//   const dispatch = useDispatch();
 
//   const [currentTab, setCurrentTab] = useState("Home");
//   const [showMenu, setShowMenu] = useState(false);

//   const offsetValue = useRef(new Animated.Value(0)).current;
//   const scaleValue = useRef(new Animated.Value(1)).current;
//   const closeButtonOffset = useRef(new Animated.Value(0)).current;
  
//   const [pin, setPin]= React.useState({latitude: 37.78825,
//     longitude:-122.4324});
//     const [region, setRegion]= React.useState({latitude: 37.78825,
//       longitude:-122.4324})

      
//   return (
    
//     <SafeAreaView style={styles.container}>
     
//       <View style={{
//             justifyContent:'flex-start' , padding:15, 
//           }}>
          

//             <Image source={UberLogo}
//               style={{width: 120,
//                       height:60,
//                     //  borderRadius:10,
//                       marginTop:8
//                       }}

//             ></Image>
//             <Text style={{ fontSize:20,
//                             fontWeight:'bold',
//                             color:'white',
//                             marginTop:20}}>Menu</Text>

//               <TouchableOpacity>
//                 <Text style={{
//                   marginTop:6,
//                   color:'white'
//                 }}>View Profile</Text>
//               </TouchableOpacity>
            
            
//               <View style={{flexGrow :1, marginTop: 50}}>
              
//               {TabButton(currentTab,setCurrentTab,"Account", account, UserAccount)}
//               {TabButton(currentTab,setCurrentTab,"Comment", chat, UserComments)}
//               {TabButton(currentTab,setCurrentTab,"Payment", timer, Payment  )} 
//               </View>        

//               <View>
//                 {TabButton(currentTab,setCurrentTab,"LogOut",logout)}
//               </View>      
//       </View>
      
      
//       <Animated.View style={{
//           flexGrow:1,
//           backgroundColor:'white',
//           position:'absolute',
//           top:0,
//           bottom:0,
//           right:0,
//           left:0,
//           paddingHorizontal:15,
//           paddingVertical:20,
//           borderRadius:showMenu? 15:0,
//           transform: [{
//             scale : scaleValue
//           },
//           {
//             translateX: offsetValue
//           }
//           ]
          
              
//       }}>

//      <Animated.View
//         style={{
//           transform:[{
//             translateY: closeButtonOffset
//           }]
//         }}
//      ></Animated.View>
      

//       <TouchableOpacity   onPress={() => {
//         Animated.timing(scaleValue, {
//           toValue: showMenu? 1: 0.88,
//           duration:300,
//           useNativeDriver: true
//         })
//         .start()

//         Animated.timing(offsetValue, {
//           toValue: showMenu? 0: 220,
//           duration:300,
//           useNativeDriver: true
//         })
//         .start()

//         Animated.timing(closeButtonOffset, {
//           toValue: !showMenu? -30: 0,
//           duration:300,
//           useNativeDriver: true
//         })
//         .start()
//         setShowMenu(!showMenu);
//       }}>
//         <Image source={showMenu? close : menuicon} style={{
//           width:30,
//           height:30,
//           backgroundColor:'orange',
//           marginTop:10,
//           borderRadius:30,
          
          
//         }}></Image>
//         </TouchableOpacity> 
//         <Text style={{
//           fontSize:30,
//           fontWeight:'bold',
//           color:'black',
//           paddingTop:10
//         }}
//         >{currentTab}</Text>

      
//         <View style={{
//         paddingLeft:0,
//         paddingTop:0,
//       }}>


//     {/* <View style={{
//           marginTop:10          
//         }}>
//         {/* <GooglePlacesAutocomplete
//             placeholder='Where From?'            
//             styles={{
//               width:16,
//               container:{
//                 flex: 0,
//               },
//               textInput:{
//                 fontSize: 18,
//               },
              
            
//             }}
//             onPress={(data, details = null) => {
//                 console.log(data, details)
//                 dispatch(
//                   setOrigin({
//                     location: details.geometry.location,
//                     description: data.description,
//                 })
//                 );
//                 dispatch(setDestination(null));
//             }
//             }
//             fetchDetails={true}
//             returnKeyType={"search"}
//             enablePoweredByContainer={false}
//             minLength={2}
//             nearbyPlacesAPI="GooglePlacesSearch"
//             debounce={400}
//             query={
//               {
//                 key:'AIzaSyC3JCNErR0zLBcTbzX-TPr7xgecRURsjr8',
//                 language: 'en',
//               }
//             }
//             currentLocation={true}
//            ></GooglePlacesAutocomplete> */}
          
//            {/* <GooglePlacesAutocomplete
//               placeholder='Search'
//               onPress={(data, details = null) => {
//                 // 'details' is provided when fetchDetails = true
//                 console.log(data, details);
//                 // setRegion({
//                 //   latitude:details.geometry.location.lat,
//                 //   longitude:details.geometry.location.lng,

//                 // });
//                 dispatch(
//                   setDestination({
//                     location: details.geometry.location,
//                     description: data.description,
//                 })
//                 );
//                 dispatch(setOrigin({
//                   latitude: 37.78825,
//                  longitude:-122.4324
//                 }));
//               }}
//               query={{
//                 key: 'AIzaSyC3JCNErR0zLBcTbzX-TPr7xgecRURsjr8',
//                 language: 'en',
//                 location:` ${region.latitude}, ${region.longitude}`
//               }}
//               styles={{
//                 container:{flex:0,position:"absolute",width:"100%",zIndex:1},
//                 listView:{backgroundColor:"white"}
//               }}
//               fetchDetails={true}
//               GooglePlacesSearchQuery={{rankby:"distance"}}
//             /> */}
//            {/* <MapView style={{width:342,
//                             height:400,
//                             top:50
//             }}
//             initialRegion={{
//               latitude: 37.78825,
//                   longitude:-122.4324,
//                   latitudeDelta:0.0922,
//                   longitudeDelta:0.0421
//             }}
//             provider="google"
//             >
            
//               <Marker
//                 coordinate={pin}
//                 pinColor="blue"
//                 draggable={true}
//                 onDragStart={(e) => {console.log("Drag Start", e.nativeEvent.coordinates)
//                 }}
//                 onDragEnd={(e) => {
//                  setPin({
//                    latitude: e.nativeEvent.coordinate.latitude,
//                    longitude:e.nativeEvent.coordinate.longitude,
//                    latitudeDelta:0.0922,
//                   longitudeDelta:0.0421 
//                  })
//                 }}
//               >
//                 <Callout>
//                   <Text>I'm here</Text>
//                 </Callout>
//               </Marker>
//               <Marker coordinate={{latitude:region.latitude, longitude:region.longitude}}/>
//             </MapView> 
//         </View> */}

//       <View style={{
//         right:5,
//         top:60,
      
//       }}>
        
//         <NavOptions></NavOptions>
      
//       </View>
//       </View>
        

//       </Animated.View> 


//     </SafeAreaView>
//   );
// };
// //////////////////////////////////////////
// const TabButton = (currentTab, setCurrentTab, title, image, screen) => {
//   const navigate = useNavigation();

//   return(
//     <TouchableOpacity   onPress={() => {
//       navigate.navigate(screen)

      
//     }}>
//       <View style={{
//               flexDirection:'row',
//               alignItems: 'center',
//               paddingVertical:8,
//               backgroundColor: currentTab == title ? 'white' : 'transparent',
//               paddingLeft:20,
//               paddingRight:40,
//               borderRadius:8
//             }}>

//               <Image source={image}
//                      style={{width:25, height:25,
                           
//                             borderRadius:5
//                      }} 
//               ></Image>

//               <Text style={{
//                 fontSize:15,
//                 fontWeight: 'bold',
//                 paddingLeft: 15,
//                 color: currentTab == title ? "orange" : "white"
//               }}>{title}</Text>
//             </View>
//     </TouchableOpacity>
//   )
// }

// export default HomeScreen;

// const styles = StyleSheet.create({
//     text:{
//         color:"blue",
//     },
//     container:{
//       flex:1,
//       backgroundColor:'orange',
//       alignItems: 'flex-start',
//       justifyContent:'flex-start'
//     }
// });
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView ,Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY } from "@env";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { setOrigin, setDestination} from "../slices/navSlice";
import { Icon } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import UserAccount from './UserAccount'
import UserComments from './UserComments'
import UserLogin from './UserLogin';
import Ticketing from './Ticketing'
import taxi from '../images/taxi.jpg';
import account from '../images/accounticon.jpg';
import chat from '../images/chat.png';
import timer from '../images/timer.png';
import logout from '../images/logout.jpg';
import menuicon from '../images/menuicon.jpg';
import close from '../images/closeicon.jpg';
import {Animated} from 'react-native';
import Payment from './Payment';
import { CommonActionrs } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { selectTicketInformation, setTicketInformation, setTravelTimeInformation , selectOrigin} from '../slices/navSlice'

const HomeScreen = () => {
  
  const dispatch = useDispatch();
  const navigation= useNavigation();
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  
  const origin= useSelector(selectOrigin)

  return (
  
    <SafeAreaView style={styles.container}>
     
      <View style={{
            justifyContent:'flex-start' , padding:15,
          }}>
          

            <Image source={taxi}
              style={{width: 120,
                      height:60,
                    //  borderRadius:10,
                      marginTop:8
                      }}

            ></Image>
           

              {/* <TouchableOpacity>
                <Text style={{
                  marginTop:6,
                  color:'white'
                }}>View Profile</Text>
              </TouchableOpacity> */}
            
            
              {/* <View style={{flexGrow :1, marginTop: 50}}>
              
              {TabButton(currentTab,setCurrentTab,"Account", account, UserAccount)}
              {TabButton(currentTab,setCurrentTab,"Comment", chat, UserComments)}
              {TabButton(currentTab,setCurrentTab,"Payment", timer, Payment  )} 
              </View>        

              <View>
                {TabButton(currentTab,setCurrentTab,"Log out",logout,UserLogin)}
              </View>       */}
      
      
      
      {/* <Animated.View style={{
          flexGrow:1,
          backgroundColor:'white',
          position:'absolute',
          top:0,
          bottom:0,
          right:0,
          left:0,
          paddingHorizontal:15,
          paddingVertical:20,
          borderRadius:showMenu? 15:0,
          transform: [{
            scale : scaleValue
          },
          {
            translateX: offsetValue
          }
          ]
          
              
      }}>

     <Animated.View
        style={{
          transform:[{
            translateY: closeButtonOffset
          }]
        }}
     ></Animated.View>
      

      <TouchableOpacity   onPress={() => {
        Animated.timing(scaleValue, {
          toValue: showMenu? 1: 0.88,
          duration:300,
          useNativeDriver: true
        })
        .start()

        Animated.timing(offsetValue, {
          toValue: showMenu? 0: 220,
          duration:300,
          useNativeDriver: true
        })
        .start()

        Animated.timing(closeButtonOffset, {
          toValue: !showMenu? -30: 0,
          duration:300,
          useNativeDriver: true
        })
        .start()
        setShowMenu(!showMenu);
      }}>
        <Image source={showMenu? close : menuicon} style={{
          width:30,
          height:30,
          backgroundColor:'orange',
          marginTop:10,
          borderRadius:30,
          
          
        }}></Image>
        </TouchableOpacity> 
        <Text style={{
          fontSize:30,
          fontWeight:'bold',
          color:'black',
          paddingTop:10
        }}
        >{currentTab}</Text>
       
      */}
        <View > 


    <View style={{
          marginTop:10,
          width:340
        }}>
        <GooglePlacesAutocomplete
        
            placeholder='Where From?'            
            styles={{
              width:160,
              container:{
                flex: 0,
              },
              textInput:{
                fontSize: 18,
              },
              
            
            }}
            
            onPress={(data, details = null) => {
              console.log(data, details);
                dispatch(
                  setOrigin({
                    location: details.geometry.location,
                    description: data.description,
                })
                )
                dispatch(setDestination(null))
            }
            }
            fetchDetails={true}
            returnKeyType={"search"}
            enablePoweredByContainer={false}
            minLength={2}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            query={
              {
                key: 'AIzaSyC3JCNErR0zLBcTbzX-TPr7xgecRURsjr8',
                language: 'en',
              }
            }
           ></GooglePlacesAutocomplete>
        </View>

      <View style={{
        left:80,
        top:5,
      }}>
   
        <NavOptions></NavOptions>
      
      </View>
      </View>
        
</View>
      


    </SafeAreaView>
  );
};
//////////////////////////////////////////
const TabButton = (currentTab, setCurrentTab, title, image, screen) => {
  const navigate = useNavigation();

  return(
    <TouchableOpacity   onPress={() => {
      navigate.navigate(screen)

      
    }}>
      <View style={{
              flexDirection:'row',
              alignItems: 'center',
              paddingVertical:8,
              backgroundColor: currentTab == title ? 'white' : 'transparent',
              paddingLeft:20,
              paddingRight:40,
              borderRadius:8
            }}>

              <Image source={image}
                     style={{width:25, height:25,
                           
                            borderRadius:5
                     }} 
              ></Image>
              
      

              <Text style={{
                fontSize:15,
                fontWeight: 'bold',
                paddingLeft: 15,
                color: currentTab == title ? "orange" : "white"
              }}>{title}</Text>
            </View>
    </TouchableOpacity>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    text:{
        color:"blue",
    },
    container:{
      flex:1,
      backgroundColor:'white',
      alignItems: 'flex-start',
      justifyContent:'flex-start'
    }
});