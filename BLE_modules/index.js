import BleManager from 'react-native-ble-manager';
import { Alert, PermissionsAndroid } from 'react-native';

export function startModule() {
  BleManager.start({ showAlert: false }).then(() => {
    console.log('Module initialized');
  });
}

export async function scanDevices(setDevices, devices, setScanning) {
  setScanning(true)
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
      BleManager.scan([], 15, true)
        .then(() => {
          console.log('Scan started');
          let timer = setInterval(() => {
            BleManager.getDiscoveredPeripherals()
              .then(scannedDevices => {
                setDevices([
                  ...devices,
                  scannedDevices
                ])
              })
              .catch(e => console.log(e))
          }, 200);
          setTimeout(() => { clearInterval(timer); setScanning(false) }, 15000);
        })
        .catch(e => console.log(e));
    }
  }
  catch {
    Alert.alert('To scanning, you have to give access to your location!')
  }
};

export function setAvailableDevices() {
  BleManager.getDiscoveredPeripherals()
    .then(devices => {
      console.log(devices)
    })
    .catch(e => console.log(e))
}