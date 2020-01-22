import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import styles from '../../styles';

const ListItem = (props) => {
  const { deviceName, id, rssi, navigation, advertising } = props;
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
          <Button
            color={'rgb(86, 213, 250)'}
            onPress={() => navigation.navigate('Details', {
              isConnectable: advertising.isConnectable,
              localName: advertising.localName ? advertising.localName : 'N/A',
              deviceName: deviceName !== 'Unknown device' ? deviceName : 'N/A',
              mac: id,
              rssi: rssi
            })}
            title="Connect"
          />
        </View>
      </View>
    </>
  );
};

export default ListItem;