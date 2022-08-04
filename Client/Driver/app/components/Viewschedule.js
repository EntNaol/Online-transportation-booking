import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text, Button, TouchableOpacity } from "react-native";
import tw from 'tailwind-react-native-classnames';
import { useNavigation} from '@react-navigation/native'
import Viewroute from './Viewroute';
import Home from "./Home";

const Viewschedule = () => {
  const [starting, onStarting] = React.useState(null);
  const [stoppage, onStoppage] = React.useState(null);
  const [number, onnumber] = React.useState(null);
  const [station1, sstation]= React.useState(null);
  const [station2, dstation]= React.useState(null);


  const navigation = useNavigation();

  return (
    <View>

<Text style={{
                  padding:7,
                textAlign:'center',
                top:30,
                fontSize:30,
                fontWeight:'bold',
                }}>schedule</Text>
      <View style={tw `h-1/5`}>
      <View style={{flexDirection:"row", padding: 50}}>
          <Text   style={{
        fontSize:18,
        padding:20

      }}>
              Your working hours
          </Text>

      
<View style={{ flexDirection:"column" }}>
      <TextInput
        style={styles.input}
        onStarting={onStarting}
        value={number}
        placeholder="12:00"
        keyboardType="numeric"
        editable= {false}
      />
<Text style={{
        fontSize:18,
        padding:1

      }}> to</Text>
      <TextInput
        style={styles.input}
        onStarting={onStoppage}
        value={number}
        placeholder="8:00"
        keyboardType="numeric"
        editable= {false}
      />
    </View>

   

    </View>
    </View>
    <View style={tw`h-4/5`}>
      <Text  style={{
        fontSize:25,
        fontWeight:'bold',

      }}>Trip 1</Text>    
      <SafeAreaView>
      <TextInput
        style={styles.input}
        onStarting={onStarting}
        
        placeholder="Intial Station"
        
        
      />
<Text style={{
        fontSize:15,
        padding:1

      }}>    to</Text>
      <TextInput
        style={styles.input}
        onStarting={onStoppage}
        
       
        
      />
    </SafeAreaView>

    <TouchableOpacity style={{
                  top:30,
                  left:90,
                  backgroundColor:'orange',
                  borderRadius:10,
                  width:190,
                  height:40,
                  
                }}
                
                onPress={() => navigation.navigate(Viewroute)}
              >
                <Text style={{
                  padding:7,
                textAlign:'center',
                fontSize:18,
                fontWeight:'bold',
                }}>View route</Text>

</TouchableOpacity>


    


    
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Viewschedule;