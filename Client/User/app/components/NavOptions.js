import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { FlatList, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../components/HomeScreen';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice'
import { Icon } from 'react-native-elements';
//import { Icon } from 'react-native-elements/dist/icons/Icon';
//import { Icon } from 'react-native-elements';
//import { Icon } from 'react-native-vector-icons/Icon';


const data = [
    {
        id: "123",
        title: "Get a Taxi",
        image: "https://c7.alamy.com/comp/3/49054f2f853f4944bda9a89a0622762a/png9kk.jpg",
        screen: "MapScreenT",
    },
    {
        id: "456",
        title: "Get a Bus",
        image: "https://play-lh.googleusercontent.com/CvEi4XqbafZz-H9MgFlFLzmOdPiMVRX2l2ZbvcODSWJ5fk9cB8RPn4_GxxLCX4cRZ_4",
        screen: "MapScreenB",    
    },
    {
        id: "678",
        title: "Get a Train",
        image: "https://www.railjournal.com/wp-content/uploads/2017/09/7c936d3f9bda43eeda3d9a8ad93caeaa.jpg",
        screen: "MapScreenTr",    
    }
]
const NavOptions = () => {
    const origin = useSelector(selectOrigin);
    const navigation =useNavigation();
  return (
    <FlatList 
        
        data={data}
        keyExtractor={(item)=> item.id}
        renderItem={({item}) => (
            <TouchableOpacity onPress={() => {
               if(!origin)
               {
                Alert.alert(
            'No origin Selected',
            'You need to pick a location first',
            [{text: 'OK', onPress: () => {navigation.navigate(HomeScreen)}}],
            {cancelable: false},
          )
               } 
               else               
            navigation.navigate(item.screen)}}
            style={tw `p-2 pl-6 pb-6 pt-4 bg-gray-300 m-2 w-40`}
            //disabled={!origin}
          //  tw `p-2 pl-6 pb-6 pt-4 bg-gray-300 m-2 w-20
             >
                <View style={tw `${!origin && 'opacity-100'}`}>
                    <Image style={
                        {
                            width:100,
                            height: 60, 
                            resizeMode: 'contain'
                        }
                    } source={{uri: item.image}}>
                    </Image>
                    <Text style={{
                        color:"black",
                        fontSize:20,
                        fontWeight:'bold'
                    }}>{item.title}</Text>
                   
                   
                </View>
            </TouchableOpacity>
        )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({})