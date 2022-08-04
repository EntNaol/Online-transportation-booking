import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import tw from 'tailwind-react-native-classnames';
import HomeScreen from './HomeScreen';
import TrainScreen from './TrainScreen'
import { useNavigation } from '@react-navigation/native';
import BookTicketB from './BookTicketB';
import { setdStation, setOStation } from '../slices/navSlice';
import { useDispatch,useSelector } from 'react-redux';
import { selectdStation, selectOrigin, selectoStation, selectTravelTimeInformation,setTravelTimeInformation } from '../slices/navSlice'

  
  const BookTicketTr = () => {
    const [value, setValue] = useState(null);
    const [valuet, setValuet] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const navigation =useNavigation();
    const dispatch = useDispatch();
    const oStation=  useSelector(selectoStation);
    const destination= useSelector(selectdStation);
    const origin = useSelector(selectOrigin)
    const travelTimeInformation = useSelector(setTravelTimeInformation)

  const data = [
    { description: "Torhayloch, Addis Ababa, Ethiopia",
      value: {
      
        lat:9.014390908752949,  
        lng:38.723295806864996,
        
    },travelTime:"10 mins"
  },
    { description: "Meshuwalkiya, Addis Ababa, Ethiopia", 
      value: {
        
        lat:9.008460740905013, 
        lng: 38.758844999123994,
        
    } ,travelTime:"30 mins"},
    { description: "La Gare, Addis Ababa, Ethiopia", 
      value: {
       
        lat:9.01146648722007 ,
        lng: 38.752850938037305
        
    },travelTime:"20 mins"
   },
   { description: "Ayat, Addis Ababa, Ethiopia", 
      value: {
        lat:9.021298131509566,  
        lng:38.8717337958505,
        
    },travelTime:"20 mins"
   },
   
  ];

  useEffect(() => {
    if(!oStation || !destination) return;
    const getTravelTime= async() => {
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${oStation.description}&key=${'AIzaSyC3JCNErR0zLBcTbzX-TPr7xgecRURsjr8'}`).
      then((res) => res.json()).
      then(data => {
        //console.log(data)
        dispatch(setTravelTimeInformation(data.rows[0].elements[0])
     );
    })
    }
    getTravelTime();
   },[origin,oStation,'AIzaSyC3JCNErR0zLBcTbzX-TPr7xgecRURsjr8'])
    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Choose Starting Station
          </Text>
        );
      }
      return null;
    };
    const renderLabelF = () => {
        if (valuet || isFocus) {
          return (
            <Text style={[styles.label, isFocus && { color: 'blue' }]}>
              Choose Final Station
            </Text>
          );
        }
        return null;
      };

    return (
        <View style={{
            top:60,
            left:10

        }}>
        <Text style={{fontSize:20,
                    fontWeight:'bold'}}>Stations</Text>
                            
          <View style={styles.container}>
                        
            {renderLabel()}
                        
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
                valueField="value"
                placeholder={!isFocus ? 'Select Initial Station' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={
                  
                  (item => {
                    setValue(item.value);
                    setIsFocus(false);
                    dispatch(
                  setOStation({
                    value: item.value,
                    description: item.description,
                })
                )
                console.log(item)
                }
                  
                )
                  
                }
               
                 
                
                
                // dispatch(
                //   setOStation({
                //     location: details.geometry.location,
                //     description: data.description,
                // })
                // )
                //dispatch(setDestination(null))
                
                
                renderLeftIcon={() => (
                    <AntDesign
                    style={styles.icon}
                    color={isFocus ? 'blue' : 'black'}
                    name="Safety"
                    size={20}
                    />
                )}
              />
          </View>
          <View style={styles.container}>
                        
            {renderLabelF()}
                        
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
                
                valueField="value"
                placeholder={!isFocus ? 'Select Final Station' : '...'}
                searchPlaceholder="Search..."
                value={valuet}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                
                onChange={
                  
                  (itemN => {
                    setValuet(itemN.value);
                    setIsFocus(false);
                    dispatch(
                  setdStation({
                    value: itemN.value,
                    description: itemN.description,
                })
                
                )
                console.log(itemN)
                }
                  
                )
                  
                }
                renderLeftIcon={() => (
                    <AntDesign
                    style={styles.icon}
                    color={isFocus ? 'blue' : 'black'}
                    name="Safety"
                    size={20}
                    />
                )}
              />
          </View>
          {/* <View style={{
              
          }}>
          <Text style={{
            top:50,
            fontSize:20,
            fontWeight:'bold'
          }}>Account Number</Text>
          <TextInput
              style={{
                top:80,
                //left:20,
                // margin: 12,
                borderWidth: 1,
                padding: 10,
                width: 340
              }}  

              onChangeText={onChangeText}
              value={number}
              keyboardType='numeric'
              placeholder="Account Number"
              
          />
           

                       
        </View> */}
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
                        onPress={() => navigation.navigate(TrainScreen)}
                      >
                        <Text style={{
                          padding:7,
                        textAlign:'center',
                        fontSize:18,
                        fontWeight:'bold',
                        }}>Save</Text>
        
        </TouchableOpacity>
        </View>
      </View>
    );
  };

  export default BookTicketTr;

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