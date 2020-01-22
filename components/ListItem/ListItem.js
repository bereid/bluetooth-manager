import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import styles from '../../styles';

const ListItem = (props) => {
  const { deviceName, deviceID, deviceRSSI, navigate } = props;
  return (
    <>
      <View
        style={styles.listItemContainer}>
        <View style={styles.listItemTextContainer}>
          <Text>Name: {deviceName}</Text>
          <Text>ID: {deviceID}</Text>
          <Text>RSSI: {deviceRSSI}</Text>
        </View>
        <View style={styles.listItemButtonContainer}>
          <Button
            onPress={() => navigate('Details')}
            title="Connect"
          />
        </View>
      </View>
    </>
  );
};

export default ListItem;