import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Button, Alert } from 'react-native';

const ListOfDevices = (props) => {
  const { navigation } = props;
  const navigateToDeviceDetails = () => {
    navigation.navigate('Details');
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


export default ListOfDevices;
