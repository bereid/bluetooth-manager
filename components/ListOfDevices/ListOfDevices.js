import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Button, ActivityIndicator, TextInput } from 'react-native';
import * as BLE_modules from '../../BLE_modules';
import ListItem from '../ListItem';
import styles from '../../styles';

const ListOfDevices = ({ navigation }) => {

  const [devices, setDevices] = useState([]);
  const [scanning, setScanning] = useState(false);
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    BLE_modules.enableBluetooth(setDevices, setScanning, setBluetoothEnabled);
  }, []);

  const filteredDevices = () => {
    return devices.filter(d => (
      d.name && d.name.toLowerCase().includes(search.toLowerCase()))
      || (d.id && d.id.toLowerCase().includes(search.toLowerCase()))
    );
  }

  console.log('scanning: ' + scanning);
  console.log('length of devices: ' + devices.length);
  if (devices.length > 0) {
    for (let i = 0; i < devices.length; i++) {
      console.log(devices[i])
    }
  }
  console.log(search)

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>
          <TextInput
            placeholder={'Tap to search by name or MAC...'}
            value={search}
            onChange={(e) => setSearch(e.nativeEvent.text)}
          />
          {devices.length > 0 &&
            <View style={styles.listContainer}>
              {filteredDevices().map((device) => {
                let deviceProps = {
                  deviceName: device.name ? device.name : 'Unknown device',
                  deviceRSSI: device.rssi,
                  deviceID: device.id,
                  navigate: navigation.navigate
                }
                return (
                  <ListItem key={device.id} {...deviceProps} />
                )
              })}
            </View>
          }
          {scanning ?
            <View style={styles.progressContainer}>
              <ActivityIndicator />
              <Text>Scanning...</Text>
            </View>
            :
            <Button
              title="Scan devices"
              onPress={() => {
                bluetoothEnabled ?
                  BLE_modules.scanDevices(setDevices, setScanning)
                  : BLE_modules.enableBluetooth(setDevices, setScanning, setBluetoothEnabled);
              }}
            />}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


export default ListOfDevices;
