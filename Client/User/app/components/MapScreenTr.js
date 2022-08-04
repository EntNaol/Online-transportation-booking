import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
//import {GOOGLE_MAPS_APIKEY } from "@env";
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import Navigatecard from '../components/Navigatecard';
import BookTicket from '../components/BookTicket';
import MapView from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';
import BookTicketB from '../components/BookTicketB';
import BusScreen from './BusScreen';
import TrainScreen from './TrainScreen'
import BookTicketTr from '../components/BookTicketTr';

const MapScreenTr = () => {
  const Stack = createStackNavigator();
  return (
    <View>
     
      <View style={tw` h-1/2`}>
        <Map/>        
      </View>
      
      <View style={tw` h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name='BookTicketTr'
            component={BookTicketTr}
            options={{
              headerShown: false,
            }}
          >
          </Stack.Screen>

        

        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreenTr;

const styles = StyleSheet.create({
  text:{
      color:"blue",
  },
});