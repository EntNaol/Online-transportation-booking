import { StyleSheet, Text, View , SafeAreaView, Alert} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch, useSelector } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import {GOOGLE_MAPS_APIKEY } from "@env"
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import { selectDestination } from '../slices/navSlice'
import MapScreenT from '../components/MapScreenT'

const Navigatecard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const destination=useSelector(selectDestination)
  return (
    <SafeAreaView style={tw `bg-white flex-1`}>
     
      <Text style={tw `text-center py-5 text-xl`}>Enjoy your Ride</Text>
      
      <View >
        
            <GooglePlacesAutocomplete
                placeholder='Where To?'
                debounce={400}
                nearbyPlacesAPI="GooglePlacesSearch"
                styles={toInputBoxStyles}
                enablePoweredByContainer={false}
                returnKeyType={"search"}
                minLength={2}
                fetchDetails={true}
               // currentLocation={true}
                onPress={(data, details = null) => {
             // console.log(data, details);
                dispatch(
                  setDestination({
                    location: details.geometry.location,
                    description: data.description,
                })
                )
              //  dispatch(setDestination(null))
            }
            }
                query={{
                key: 'AIzaSyC3JCNErR0zLBcTbzX-TPr7xgecRURsjr8',
                language: 'en',
              }
            }
            >
            </GooglePlacesAutocomplete>
            <View style={{width:180 ,left:250}}>
            <TouchableOpacity style={{
                          top:0,
                          backgroundColor:'black',
                          borderRadius:10,
                          width:75,
                          height:40,
                          
                        }}
                        
                        onPress={() => {
            if(!destination){
                Alert.alert(
                  'No Destination Selected',
                  'You need to pick a location first',
                  [{text: 'OK', onPress: () => {navigation.navigate(MapScreenT)}}],
                  {cancelable: false},
                ) 
               } 
            else
           navigation.navigate("BookTicket")}}
                      >
                        <Icon name="car" type="font-awesome" color="white" size={20}></Icon>

                        <Text style={tw `text-white text-center px-2 text-sm`}>Book</Text>
        
        </TouchableOpacity>
            
        </View>
        </View>    
      
    </SafeAreaView>
  )
}

export default Navigatecard;

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInput:{
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});