import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { text, TouchableOpacity, StyleSheet, Button} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { BarCodeScanner } from "expo-barcode-scanner";
import { Text } from "react-native-elements";
import Home from "./Home";
import { useNavigation } from "@react-navigation/native";


export default function Camera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not scanned yet!')
  const navigation = useNavigation()

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  
  useEffect(() => {
    askForCameraPermission();
  }, []);

 
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }


  return (
    <View style={styles.container}>

<Text style={{
        fontSize:25,

      }}>Scan QR code</Text>

      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 500, width: 500 }} />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='orange' />}

      <TouchableOpacity style={{
                  top:30,
                  backgroundColor:'orange',
                  borderRadius:10,
                  width:90,
                  height:40,
                  
                }}
                
                onPress={() => navigation.navigate(Home)}
              >
                <Text style={{
                  padding:7,
                textAlign:'center',
                fontSize:18,
                fontWeight:'bold',
                }}>Submit</Text>

</TouchableOpacity>
    </View>





  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
    width: 400,
    overflow: 'hidden',
    borderRadius: 50,
    backgroundColor: 'orange'
  }
});
