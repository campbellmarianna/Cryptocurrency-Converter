// entry point
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
  $primaryPink: '#CC2B5E',
  $white: '#FFFFFF',
})

export default () => <Home />;
