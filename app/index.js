// entry point
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import store from './config/store';

EStyleSheet.build({
  $primaryPink: '#CC2B5E',

  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#C6C3CC',
  $darkText: '#343434',
});

export default () => (
<Provider store={store}>
  <AlertProvider>
    <Navigator onNavigationStateChange={null} />
  </AlertProvider>
</Provider>);
