import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


const styles = EStyleSheet.create({
  $underlayColor: '$border',
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '$white',
  },
  text: {
    fontSize: 16,
    color: '$darkText',

  },
  separator: {
    marginLeft: 20,
    backgroundColor: '$border',
    flex: 1,
    // Smallest possible value for the device the application is running on
    height: StyleSheet.hairlineWidth,
  },
  icon: {
    backgroundColor: 'transparent',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconVisible: {
    backgroundColor: '$primaryPink',
  },
  checkIcon: {
    width: 18,
  },
});

export default styles;
