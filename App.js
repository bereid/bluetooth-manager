import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ListOfDevices from './components/ListOfDevices';
import DeviceDetails from './components/DeviceDetails';

const MainNavigator = createStackNavigator({
  ListOfDevices: { screen: ListOfDevices },
  DeviceDetails: { screen: DeviceDetails },
});

const App = createAppContainer(MainNavigator);

export default App;
