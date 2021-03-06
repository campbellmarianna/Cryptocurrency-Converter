import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  View,
  Text,
  Keyboard,
  Animated,
  Platform,
  StyleSheet,
} from 'react-native';

import styles from './styles';

// Logo attribution https://www.flaticon.com/authors/vitaly-gorbachev

const ANIMATION_DURATION = 250;

class Logo extends Component {
  static propTypes = {
    tintColor: PropTypes.string,
  };

  // to set up how the background image and image should change
  constructor(props) {
    super(props);

    this.state = {
      containerImageWidth: new Animated.Value(styles.$largeContainerSize),
      imageWidth: new Animated.Value(styles.$largeImageSize),
    };
  }

  componentDidMount() {
    // listen to the keyboard as it unmountes
    const name = Platform.OS === 'ios' ? 'Will' : 'Did';
    // Show Listener
    this.keyboardDidShowListener = Keyboard.addListener(
      `keyboard${name}Show`, this.keyboardWillShow,
    );
    // Hide Listener
    this.keyboardDidHideListener = Keyboard.addListener(
      `keyboard${name}Hide`, this.keyboardWillHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardWillShow = () => {
    const { containerImageWidth, imageWidth } = this.state;
    // Decrease the size of the Container/Background Image at the same time when the keyboard appears
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardWillHide = () => {
    const { containerImageWidth, imageWidth } = this.state;
    // Decrease the size of the Container/Background Image at the same time
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    const { containerImageWidth, imageWidth } = this.state;
    const { tintColor } = this.props;

    const containerImageStyles = [
      styles.containerImage,
      { width: containerImageWidth, height: containerImageWidth },
    ];

    const imageStyles = [
      styles.logo,
      { width: imageWidth },
      tintColor ? { tintColor } : null,
    ];

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyles}>
          <Animated.Image
            resizeMode="contain"
            style={[StyleSheet.absoluteFill, containerImageStyles]}
            source={require('./images/background.png')}
          />
          <Animated.Image
            resizeMode="contain"
            style={imageStyles}
            source={require('./images/logo.png')}
          />
        </Animated.View>
        <Text style={styles.text}>Crypto-Currency Converter</Text>
      </View>
    );
  }
}
export default Logo;