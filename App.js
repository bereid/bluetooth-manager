import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DeviceDetails from './components/DeviceDetails';
import ListOfDevices from './components/ListOfDevices';

const App = createStackNavigator({
  ListOfDevices: {
    screen: ListOfDevices,
  },
  Details: {
    screen: DeviceDetails
  }
});

export default createAppContainer(App);