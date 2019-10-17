// entry point
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import CurrencyList from './screens/CurrencyList';

EStyleSheet.build({
  $primaryPink: '#CC2B5E',

  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#C6C3CC',
  $darkText: '#343434',
});

export default () => <CurrencyList />;
