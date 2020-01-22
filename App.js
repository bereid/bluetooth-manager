import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DeviceDetails from './screens/DeviceDetails';
import ListOfDevices from './screens/ListOfDevices';

const App = createStackNavigator({
  ListOfDevices: {
    screen: ListOfDevices,
    navigationOptions: () => ({
      title: 'Available Bluetooth devices',
    }),
  },
  Details: {
    screen: DeviceDetails,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.deviceName !== 'N/A' ? navigation.state.params.deviceName : 'Unknown device'}'s details`,
    }),
  }
});

export default createAppContainer(App);