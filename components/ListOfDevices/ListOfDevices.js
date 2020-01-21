import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, Button, Alert, PermissionsAndroid } from 'react-native';
import BleManager from 'react-native-ble-manager';

const ListOfDevices = (props) => {
  const { navigation } = props;
  const navigateToDeviceDetails = () => {
    navigation.navigate('Details');
  }
  useEffect(() => {
    BleManager.start({ showAlert: false }).then(() => {
      console.log('Module initialized');
    });
  }, []);
  const scanDevices = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        {
          title: 'Access',
          message: 'Access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        BleManager.scan([], 15, true).then(() => {
          console.log('Scan started');
        }).catch(e => console.log(e));
      }
    }
    catch {
      Alert.alert('To scanning, you have to give access to your location!')
    }
  };

  const logDevices = () => {
    BleManager.getDiscoveredPeripherals()
      .then(devices => {
        console.log('Discovered devices:', devices);
      })
      .catch(e => console.log(e))
  }

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Text>List of devices</Text>
          <Button
            title="Go to details"
            onPress={() => navigateToDeviceDetails()}
          />
          <Button
            title="Scan devices"
            onPress={() => scanDevices()}
          />
          <Button
            title="Log devices"
            onPress={() => logDevices()}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


export default ListOfDevices;
