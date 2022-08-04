import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppForm from './components/AppForm';
import ImageUpload from './components/ImageUpload';
import { useLogin } from './context/LoginProvider';
import DrawerNavigator from './DrawerNaviagtor';
import MapScreenT from './components/MapScreenT';
import MapScreenB from './components/MapScreenB';
import MapScreenTr from './components/MapScreenTr';
import Ticketing from './components/Ticketing';
import Navigatecard from './components/Navigatecard';
import BookTicket from './components/BookTicket';
import BookTicketB from './components/BookTicketB';
import BookTicketTr from './components/BookTicketTr';
import BusScreen from './components/BusScreen';
import TrainScreen from './components/TrainScreen';
import HomeScreen from './components/HomeScreen';
import Map from './components/Map';
import LoginForm from './components/LoginForm';
import UserComments from './components/UserComments';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={AppForm} name='AppForm' />
      <Stack.Screen component={LoginForm} name='LoginForm' />
      <Stack.Screen component={ImageUpload} name='ImageUpload' />
      <Stack.Screen component={HomeScreen} name="HomeScreen"/>
      <Stack.Screen component={UserComments} name="UserComments"/>
      <Stack.Screen component={MapScreenT} name="MapScreenT"/>
      <Stack.Screen component={Navigatecard} name="Navigatecard"/>
      <Stack.Screen component={Map} name="Map"/>
      <Stack.Screen component={BookTicket} name="BookTicket"/>
      <Stack.Screen component={MapScreenB} name="MapScreenB"/>
      <Stack.Screen component={BusScreen} name="BusScreen"/>
      <Stack.Screen component={MapScreenTr} name="MapScreenTr"/>
      <Stack.Screen component={BookTicketB} name="BookTicketB"/>
      <Stack.Screen component={TrainScreen} name="TrainScreen"/>
      <Stack.Screen component={BookTicketTr} name="BookTicketTr"/>
      <Stack.Screen component={Ticketing} name="Ticketing"/>
      
      

    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <DrawerNavigator /> : <StackNavigator />;
};
export default MainNavigator;
