import { StyleSheet } from 'react-native';
import themesSetting from '../../../themes/themesSetting';

const { borderRadius } = themesSetting;

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.xs
  }
});
