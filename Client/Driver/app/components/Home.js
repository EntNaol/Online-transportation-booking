import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { FlatList, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import camera from '../screens/Camera';
//import Viewroute from '../screens/Viewroute';
//import Viewschedule from '../screens/Viewschedule';


import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navslices'
//import { Icon } from 'react-native-elements/dist/icons/Icon';
//import { Icon } from 'react-native-elements';
//import { Icon } from 'react-native-vector-icons/Icon';


const data = [
    {
        id: "123",
        title: "Scan QR code",
        image: "https://www.investopedia.com/thmb/na7Q1b971nlXOy76f-4F_Rxgt2k=/660x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/qr-code-bc94057f452f4806af70fd34540f72ad.png",
        screen: "Camera",
    },
    {
        id: "456",
        title: "View route",
        image: "https://www.europa.uk.com/images/global-1000-atlas/map-of-addis-abeba-ethiopia.png",
        screen: "Viewroute",    
    },
    {
        id: "678",
        title: "View schedule",
        image: "https://students.wustl.edu/wp-content/uploads/2018/08/Schedule.png",
        screen: "Viewschedule",    
    }
]
const Home = () => {
    const origin = useSelector(selectOrigin);
    const navigation =useNavigation();
  return (
    <FlatList 
        data={data}
        keyExtractor={(item)=> item.id}
        renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.screen)}
             style={tw `p-2 pl-6 pb-6 pt-4 bg-gray-300 m-2 w-40`}
            // disabled={!origin}
             >
                 
                <View style={tw `${!origin && 'opacity-100'}`}>
                    <Image style={
                        {
                            width:120,
                            height: 120, 
                            resizeMode: 'contain'
                        }
                    } source={{uri: item.image}}>
                    </Image>
                    <Text style={tw `mt-1 font-bold text-sm`}>{item.title}</Text>
                   
                </View>
            </TouchableOpacity>

            
        )}
    />
  );
};

export default Home;

const styles = StyleSheet.create({})
/*
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
*/
/*
import { View, StyleSheet, Text } from 'react-native';
import React, { useState } from "react";
import { TextInput, Button, Alert } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";

//ADD localhost address of your server
const API_URL = "http://192.168.1.111:8000";

const Home= props => {
  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { clientSecret, error } = await response.json();
    return { clientSecret, error };
  };

  const handlePayPress = async () => {
    //1.Gather the customer's billing information (e.g., email)
    if (!cardDetails?.complete || !email) {
      Alert.alert("Please enter Complete card details and Email");
      return;
    }
    const billingDetails = {
      email: email,
    };
    //2.Fetch the intent client secret from the backend
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();
      //2. confirm the payment
      if (error) {
        console.log("Unable to process payment");
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: billingDetails,
        });
        if (error) {
          alert(`Payment Confirmation Error ${error.message}`);
        } else if (paymentIntent) {
          alert("Payment Successful");
          console.log("Payment successful ", paymentIntent);
        }
      }
    } catch (e) {
      console.log(e);
    }
    //3.Confirm the payment with the card details
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="email-address"
        onChange={value => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={cardDetails => {
          setCardDetails(cardDetails);
        }}
      />
      <Button onPress={handlePayPress} title="Pay" disabled={loading} />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
  },
  input: {
    backgroundColor: "#efefefef",

    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
});

*/