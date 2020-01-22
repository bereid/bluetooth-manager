import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import styles from '../../styles';
import * as BLE_modules from '../../BLE_modules';

const ListItem = (props) => {
  const { deviceName, id, rssi, navigation, advertising } = props;
  const [isConnecting, setConnection] = useState(false)
  const deviceInfo = {
    isConnectable: advertising.isConnectable,
    localName: advertising.localName ? advertising.localName : 'N/A',
    deviceName: deviceName !== 'Unknown device' ? deviceName : 'N/A',
    mac: id,
    rssi: rssi
  }

  const connectThenNavigate = () => {
    BLE_modules.connectToDevice(id, navigation.navigate, deviceInfo, setConnection)
  }

  return (
    <>
      <View
        style={styles.listItemContainer}>
        <View style={styles.listItemTextContainer}>
          <Text>Name: {deviceName}</Text>
          <Text>MAC: {id}</Text>
          <Text>RSSI: {rssi}</Text>
        </View>
        <View style={styles.listItemButtonContainer}>
          {isConnecting ?
            <ActivityIndicator size={30} color={'rgb(86, 213, 250)'} />
            : <Button
              color={'rgb(86, 213, 250)'}
              onPress={() => connectThenNavigate()}
              title="Connect"
            />}
        </View>
      </View>
    </>
  );
};

export default ListItem;