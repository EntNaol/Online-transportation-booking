import React from 'react';
import { View, Text, TouchableOpacity, Image , Linking} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './components/Home';
import Camera from './components/Camera';
import UserAccount from './components/UserAccount';
import Viewroute from './components/Viewroute';
import Viewschedule from './components/Viewschedule';
import UserComments from './components/UserComments';
import { useLogin } from './context/LoginProvider';
import Callagent from './components/Callagent';


const Drawer = createDrawerNavigator();
const number = '4848'

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
                '',
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
          backgroundColor: 'orange',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: '',
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen component={Home} name='Home' />
      <Drawer.Screen component={Callagent} name='Callagent' />
      <Drawer.Screen component={Camera} name='Camera' />
      <Drawer.Screen component={Viewroute} name='Viewroute' />
      <Drawer.Screen component={Viewschedule} name='Viewschedule' />
     {/* / <Drawer.Screen component={UserAccount} name='UserAccount' /> */}
      <Drawer.Screen component={UserComments} name='UserComments' />
      {/* <Drawer.Screen component={PaymentScreen} name='Payment' /> */}
    </Drawer.Navigator>
    </Provider>
    
  );
};

export default DrawerNavigator;
