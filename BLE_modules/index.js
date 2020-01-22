import BleManager from 'react-native-ble-manager';
import { Alert, PermissionsAndroid } from 'react-native';

export function enableBluetooth(setDevices, setScanning, setBluetoothEnabled) {
  BleManager.enableBluetooth()
    .then(() => {
      setBluetoothEnabled(true)
      startModule(setDevices, setScanning);
    })
    .catch((error) => {
      Alert.alert('You have to enable Bluetooth to use the application!')
    });
}

export function startModule(setDevices, setScanning) {
  BleManager.start({ showAlert: false })
    .then(() => {
      scanDevices(setDevices, setScanning);
    })
    .catch((error) => {
      Alert.alert('Module failed to start', 'Please enable bluetooth and restart the app!')
    });
}

export async function scanDevices(setDevices, setScanning) {
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
                setDevices(scannedDevices)
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

export function connectToDevice(id, navigate, deviceInfo, setConnection) {
  setConnection(true)
  BleManager.connect(id)
  .then((peripheralInfo) => {
    console.log('Connected');
    console.log(peripheralInfo);
    setConnection(false)
    navigate('Details', deviceInfo)
  })
  .catch((error) => {
    setConnection(false)
    Alert.alert('Unable to connecting to device', 'Please try again');
  });
}