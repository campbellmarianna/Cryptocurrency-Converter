import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';
import Icon from './Icon';

const ListItem = ({
  text, onPress, selected = false, checkmark = true, visible = true, customIcon = null, iconBackground,
}) => (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
      <View style={styles.row}>
        <Text style={styles.text}>{text}</Text>
        {/* Icon should be rendered at all times and will just specify if it should be visible or not */}
        {selected ? <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground} /> : <Icon />}
        {customIcon}
      </View>
    </TouchableHighlight>
  );

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};

export default ListItem;
