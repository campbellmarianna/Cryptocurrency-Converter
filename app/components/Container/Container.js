import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';
// Logo attribution https://www.flaticon.com/authors/vitaly-gorbachev
const Container = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => KeyboardEvent.dismiss()}>
    <View style={styles.container}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);

Container.proptypes = {
  children: PropTypes.any,
};

export default Container;