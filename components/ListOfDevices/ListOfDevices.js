import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Button, Alert, PermissionsAndroid } from 'react-native';
import BleManager, { scan } from 'react-native-ble-manager';
import * as BLE_modules from '../../BLE_modules';

const ListOfDevices = (props) => {
  const { navigation } = props;
  const navigateToDeviceDetails = () => {
    navigation.navigate('Details');
  };
  const [devices, setDevices] = useState([]);
  const [scanning, setScanning] = useState(false);
  useEffect(() => {
    BLE_modules.startModule();
  }, []);

  console.log('scanning: ' + scanning);
  console.log('scanned devices: ' + devices);

  // if (devices.length === 0 && !scanning) {
  return (
    <>
      <SafeAreaView style={{ padding: 40 }}>
        <ScrollView>
          <Button
            title="Scan devices"
            onPress={() => { if (!scanning) { BLE_modules.scanDevices(setDevices, devices, setScanning) } }}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
  // }

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Text>List of devices</Text>
          <Button
            title="Go to details"
            onPress={() => navigateToDeviceDetails()}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


export default ListOfDevices;
