import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';

// root navigator , the only navigator our app cares about
export default createStackNavigator(
  {
    Home: {
      screen: Home,
      
      navigationOptions: {
        header: () => null,
      },
    },
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: {
        headerTitle: 'Quote CurrencyList',
      },
    },
  }, {
  mode: 'modal',
  cardStyle: { paddingTop: StatusBar.currentHeight },
  // headerMode: 'none',
},
);
