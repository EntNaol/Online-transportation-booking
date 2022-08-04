// import React from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';
// import { Provider } from 'react-redux';

// import HomeScreen from './screens/HomeScreen';
// import MapScreenT from './screens/MapScreenT';
// import MapScreenB from './screens/MapScreenB';
// import MapScreenTr from './screens/MapScreenTr';
// import UserAccount from './screens/UserAccount';
// // import MenuScreen from './screens/MenuScreen';

// import { store } from './store';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import  'react-native-gesture-handler' ;  
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import {GOOGLE_MAPS_APIKEY } from "@env";
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { KeyboardAvoidingView } from 'react-native';
// import UserLogin from './screens/UserLogin';
// import UserSign from './screens/UserSign';
// import Ticketing from './screens/Ticketing';
// import UserComments from './screens/UserComments';
// import Payment from './screens/Payment';
// import BusScreen from './screens/BusScreen';
// import BookTicketB from './components/BookTicketB';
// import BookTicketTr from './components/BookTicketTr';
// import TrainScreen from './screens/TrainScreen';
// import Navigatecard from './components/Navigatecard';



// //Setup redux     pk.eyJ1Ijoia2VhbWxha2dpcm1hIiwiYSI6ImNsMWF2bDk0ajBpaHozY2tvZGV3eHR2eGQifQ.BpJ_UcywBU7upeqz0baufg

// export default function App() {
  
//  const Stack = createStackNavigator();
//   return (
//     <Provider store={store}>
//     <NavigationContainer>
//     <SafeAreaProvider>
    
//         <Stack.Navigator>
        
//           <Stack.Screen 
//             name="UserLogin"
//             component={UserLogin}
//             options={{
//               headerShown:false,
//             }}  
//           /> 
//           <Stack.Screen 
//             name="UserSign"
//             component={UserSign}
//             options={{
//               headerShown:false,
//             }}  
//           /> 
          
//           <Stack.Screen 
//             name="HomeScreen"
//             component={HomeScreen}
//             options={{
//               headerShown:false,
//             }}  
//           /> 
//          <Stack.Screen 
//             name="Payment"
//             component={Payment}
//             options={{
//               headerShown:false,
//             }}  
//           /> 
//            <Stack.Screen 
//             name="MapScreenT"
//             component={MapScreenT}
//             options={{
//               headerShown:false,
//             }}  
//           />
//           <Stack.Screen 
//             name="Ticketing"
//             component={Ticketing}
//             options={{
//               headerShown:false,
//             }}  
//           /> 
//              <Stack.Screen 
//             name="Navigatecard"
//             component={Navigatecard}
//             options={{
//               headerShown:false,
//             }}  
//           /> 
//          <Stack.Screen 
//             name="MapScreenB"
//             component={MapScreenB}
//             options={{
//               headerShown:false,
//             }}  
//           />
//           <Stack.Screen 
//             name="MapScreenTr"
//             component={MapScreenTr}
//             options={{
//               headerShown:false,
//             }}  
//           />
//             <Stack.Screen 
//             name="UserAccount"
//             component={UserAccount}
//             options={{
//               headerShown:false,
//             }}  
//           />
//            <Stack.Screen 
//             name="UserComments"
//             component={UserComments}
//             options={{
//               headerShown:false,
//             }}  
//           />
//            <Stack.Screen 
//             name="AppStack"
//             component={UserAccount}
//             options={{
//               headerShown:false,
//             }}  
//           />
//            <Stack.Screen 
//             name="BusScreen"
//             component={BusScreen}
//             options={{
//               headerShown:false,
//             }}  
//           />
//           <Stack.Screen 
//             name="BookTicketTr"
//             component={BookTicketTr}
//             options={{
//               headerShown:false,
//             }}  
//           />
//           <Stack.Screen 
//             name="TrainScreen"
//             component={TrainScreen}
//             options={{
//               headerShown:false,
//             }}  
//           />
//            <Stack.Screen 
//             name="BookTicketB"
//             component={BookTicketB}
//             options={{
//               headerShown:false,
//             }}  
//           />
           
//         </Stack.Navigator>
      
//     </SafeAreaProvider>
//     </NavigationContainer>
//     </Provider> 
//   );
  
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './app/MainNavigator';
import LoginProvider from './app/context/LoginProvider';
export default function App() {
  return (
    <LoginProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </LoginProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});