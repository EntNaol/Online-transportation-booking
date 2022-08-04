import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
//import {GOOGLE_MAPS_APIKEY } from "@env";
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import Navigatecard from '../components/Navigatecard';
import BookTicket from '../components/BookTicket';
import MapView from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';

const MapScreenT = () => {
  const Stack = createStackNavigator();
  return (
    <View>
     
      <View style={tw` h-1/2`}>
        <Map/>        
      </View>
      
      <View style={tw` h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={Navigatecard}
            options={{
              headerShown: false,
            }}
          >
          </Stack.Screen>

          <Stack.Screen
            name='BookTicket'
            component={BookTicket}
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

export default MapScreenT;

const styles = StyleSheet.create({
  text:{
      color:"blue",
  },
});