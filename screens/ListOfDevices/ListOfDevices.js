import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Button, ActivityIndicator, TextInput } from 'react-native';
import * as BLE_modules from '../../BLE_modules';
import ListItem from '../../components/ListItem';
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

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>
          <TextInput
            style={{ height: 40 }}
            autoCorrect={false}
            placeholder={'Tap to search by name or MAC...'}
            value={search}
            onChange={(e) => setSearch(e.nativeEvent.text)}
          />
          {devices.length > 0 &&
            <View style={styles.listContainer}>
              {filteredDevices().map((device) => {
                let deviceProps = {
                  deviceName: device.name ? device.name : 'Unknown device',
                  navigation: navigation,
                  ...device
                }
                return (
                  <ListItem key={device.id} {...deviceProps} />
                )
              })}
            </View>
          }
          {scanning ?
            <View style={styles.progressContainer}>
              <ActivityIndicator size={30} color={'rgb(86, 213, 250)'} />
              <Text style={styles.scanningText}>Scanning...</Text>
            </View>
            :
            <Button
              color={'rgb(86, 213, 250)'}
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
