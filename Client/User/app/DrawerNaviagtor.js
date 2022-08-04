import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './components/HomeScreen';

import UserAccount from './components/UserAccount';
import UserComments from './components/UserComments';
import { useLogin } from './context/LoginProvider';
import Payment from './components/Payment'
import MapScreenT from './components/MapScreenT';
import MapScreenB from './components/MapScreenB' 
import MapScreenTr from './components/MapScreenTr';
import Ticketing from './components/Ticketing';
import Navigatecard from './components/Navigatecard';
import BookTicket from './components/BookTicket';
import BookTicketB from './components/BookTicketB';
import BookTicketTr from './components/BookTicketTr';

import BusScreen from './components/BusScreen';
import TrainScreen from './components/TrainScreen';
import LoginForm from './components/LoginForm';

const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  const { setIsLoggedIn, profile } = useLogin();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#f6f6f6',
            marginBottom: 20,
          }}
        >
          <View>
            <Text>{profile.fullname}</Text>
            <Text>{profile.email}</Text>
          </View>
          <Image
            source={{
              uri:
                profile.avatar ||
                'https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
            }}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 50,
          backgroundColor: '#f6f6f6',
          padding: 20,
        }}
        onPress={() => setIsLoggedIn(false)}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Provider store={store}>
      <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: '',
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
    
      <Drawer.Screen component={Home} name='HomeScreen' />
      {/* <Drawer.Screen component={UserAccount} name='UserAccount' /> */}
      <Drawer.Screen component={UserComments} name='UserComments' />
      <Drawer.Screen component={Payment} name="Payment"/>
      <Drawer.Screen component={MapScreenT} name="MapScreenT" options={{
    drawerItemStyle: { height: 0 }
  }}/>
      <Drawer.Screen component={MapScreenB} name="MapScreenB" options={{
    drawerItemStyle: { height: 0 }
  }}/>
      <Drawer.Screen component={MapScreenTr} name="MapScreenTr" options={{
    drawerItemStyle: { height: 0 }
  }}/>
      <Drawer.Screen component={Ticketing} name="Ticketing" options={{
    drawerItemStyle: { height: 0 }
  }}/>
      <Drawer.Screen component={Navigatecard} name="Navigatecard" options={{
    drawerItemStyle: { height: 0 }
  }}/>
      <Drawer.Screen component={TrainScreen} name="TrainScreen" options={{
    drawerItemStyle: { height: 0 }
  }}/>
      <Drawer.Screen component={BusScreen} name="BusScreen" options={{
    drawerItemStyle: { height: 0 }
  }}/>
      <Drawer.Screen component={BookTicket} name="BookTicket" options={{
    drawerItemStyle: { height: 0 }
  }}/>
      <Drawer.Screen component={BookTicketB} name="BookTicketB" options={{
    drawerItemStyle: { height: 0 }
  }}/>
      <Drawer.Screen component={BookTicketTr} name="BookTicketTr" options={{
    drawerItemStyle: { height: 0 }
  }}/>
    </Drawer.Navigator>
    </Provider>
    
  );
};

export default DrawerNavigator;
