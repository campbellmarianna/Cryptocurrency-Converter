import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, ImageBackground, View, StyleSheet } from 'react-native';

import styles from './styles';

class Logo extends Component {
  static propTypes = {
    tintColor: PropTypes.string,
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          resizeode="contain"
          style={[StyleSheet.absoluteFill]}
          source={require('./images/background.png')}>
          <Image resizeMode="contain"
          source={require('./images/logo.png')}/>
          </ImageBackground>
      </View>
    )
  }
}

export default Logo;