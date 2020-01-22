import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Button } from 'react-native';
import styles from '../../styles';
import * as BLE_modules from '../../BLE_modules';

const DeviceDetails = (props) => {
  const { navigation } = props;

  let deviceDetails = {
    "Name": navigation.getParam('deviceName', 'N/A'),
    "Local name": navigation.getParam('localName', 'NO-ID'),
    "MAC": navigation.getParam('mac', 'N/A'),
    "Is connectable": JSON.stringify(navigation.getParam('isConnectable', 'NO-ID')),
    "RSSI": navigation.getParam('rssi', 'NO-ID')
  }

  const disconnectAndNavigateBack = () => {
    BLE_modules.disConnectFromDevice(deviceDetails.MAC, navigation.goBack)
  }

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>
          <View style={styles.detailsBoxContainer}>
            {Object.entries(deviceDetails).map((detail, index) => (
              <View key={index} style={index % 2 !== 0 ? styles.detailsBoxRowOdd : styles.detailsBoxRowEven}>
                <View style={styles.detailsCell}>
                  <Text>{detail[0]}:</Text>
                </View>
                <View style={styles.detailsCell}>
                  <Text>{detail[1]}</Text>
                </View>
              </View>
            ))}
          </View>
          <Button
            color={'rgb(86, 213, 250)'}
            title="Disconnect from device"
            onPress={()=> disconnectAndNavigateBack()}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


export default DeviceDetails;
