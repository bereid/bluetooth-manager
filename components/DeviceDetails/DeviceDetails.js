import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import styles from '../../styles';

const DeviceDetails = (props) => {

  let deviceDetails = {
    "Name": JSON.stringify(props.navigation.getParam('deviceName', 'N/A')),
    "Local name": JSON.stringify(props.navigation.getParam('localName', 'NO-ID')),
    "MAC": JSON.stringify(props.navigation.getParam('mac', 'N/A')),
    "Is connectable": JSON.stringify(props.navigation.getParam('isConnectable', 'NO-ID')),
    "RSSI": JSON.stringify(props.navigation.getParam('rssi', 'NO-ID'))
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


export default DeviceDetails;
