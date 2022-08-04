import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import tw from 'tailwind-react-native-classnames';
import HomeScreen from './HomeScreen';
import { useNavigation } from '@react-navigation/native';
  
  const Payment = () => {
   
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [text, onChangeText] = React.useState(null);
    const [number, setNumber] = React.useState(null);
    const navigation =useNavigation();

  const data = [
    { label: 'YenePay', value: '1' ,number:'137283422312'},
    { label: 'TeleBirr', value: '2', number:'251934234223' },
    { label: 'CBE Birr', value: '3' ,number:'1000373422312'}
    
   
  ];

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Payment System
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
                    fontWeight:'bold'}}>Payment Information</Text>
                            
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
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Payment Type' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                    setNumber(item.number)
                }}
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
          <View style={{
              
          }}>
          <Text style={{
            top:50,
            fontSize:20,
            fontWeight:'bold'
          }}>Account Information</Text>
          <TextInput
          
              style={{
                top:80,
                fontSize:16,
                fontWeight:'bold',
                //left:20,
                // margin: 12,
                borderWidth: 1,
                padding: 10,
                width: 340
              }}  
              editable={false}
              onChangeText={onChangeText}
              placeholder={number}
              placeholderTextColor={"black"}
              
          />
           

                       
        </View>
        <View style={{
          top:100,
          left:250
        }}>
        <TouchableOpacity style={{
                          top:0,
                          backgroundColor:'orange',
                          borderRadius:10,
                          width:90,
                          height:40,
                          
                        }}
                        onPress={() => navigation.navigate(HomeScreen)}
                      >
                        <Text style={{
                          padding:7,
                        textAlign:'center',
                        fontSize:18,
                        fontWeight:'bold',
                        }}>Return</Text>
        
        </TouchableOpacity>
        </View>
      </View>
    );
  };

  export default Payment;

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