import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import tw from 'tailwind-react-native-classnames';
import HomeScreen from './HomeScreen';
import { useNavigation } from '@react-navigation/native';
import BookTicketB from './BookTicketB';
import { setdStation, setOStation , setTravelTimeInformation, selectOrigin, selectDestination} from '../slices/navSlice';
import { useDispatch, useSelector } from 'react-redux';

  
  const BusScreen = () => {
    const [value, setValue] = useState(null);
    const [valuet, setValuet] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const origin=  useSelector(selectOrigin);
    const destination= useSelector(selectDestination)
    const [init, onChangeInit] = React.useState(null);
    const [final, onChangeFinal] = React.useState(null);
    const navigation =useNavigation();
    const dispatch = useDispatch();
   
  const data = [{ description: "Megenagna, Addis Ababa, Ethiopia",value: {
        lat:9.020471710633004 ,
        lng:38.802393650722536,},travelTime:"10 mins"},
    { description: "Mexico Square, Chad St, Addis Ababa, Ethiopia", value: {
        lat:9.01028243124994 ,
        lng:38.74450077888819,} ,travelTime:"30 mins"},
    { description: "Summit, Addis Ababa, Ethiopia", value: {
        lat:9.0051900050867 ,
        lng:38.85199609575449, },travelTime:"20 mins"},];
const renderLabel = () => {
      if (value || isFocus) {return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Choose Starting Station
          </Text>);}
      return null;};
    const renderLabelF = () => {if (valuet || isFocus) {
          return (
            <Text style={[styles.label, isFocus && { color: 'blue' }]}> Choose Final Station </Text>); }
        return null;};

    return (
        <View style={{ top:20,left:10}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Stations</Text>                 
          <View style={styles.container}>{renderLabel()}
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
                onChange={(item => {setValue(item.value);
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
                        onPress={() => 
                        {
                        navigation.navigate(BookTicketB)
                        }
                        }
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

  export default BusScreen;

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