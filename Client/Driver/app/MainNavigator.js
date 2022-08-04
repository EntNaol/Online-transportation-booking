import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppForm from './components/AppForm';
import ImageUpload from './components/ImageUpload';
import { useLogin } from './context/LoginProvider';
import DrawerNavigator from './DrawerNaviagtor';
import UserAccount from './components/UserAccount';
import UserProfile from './components/UserProfile';
import SendPWEmailScreen from './components/SendPWEmailScreen';
import LoginForm from './components/LoginForm';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={AppForm} name='AppForm' />
      <Stack.Screen component={ImageUpload} name='ImageUpload' />
      <Stack.Screen component={SendPWEmailScreen} name ='SendPWEmailScreen'/>
      <Stack.Screen component={LoginForm} name ='LoginForm'/>
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <DrawerNavigator /> : <StackNavigator />;
};
export default MainNavigator;
