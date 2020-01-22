import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DeviceDetails from './screens/DeviceDetails';
import ListOfDevices from './screens/ListOfDevices';

const App = createStackNavigator({
  ListOfDevices: {
    screen: ListOfDevices,
  },
  Details: {
    screen: DeviceDetails
  }
});

export default createAppContainer(App);