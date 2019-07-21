import { StyleSheet } from 'react-native';
import themesSetting from '../../../themes/themesSetting';

const { borderRadius } = themesSetting;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    borderTopLeftRadius: borderRadius.lg,
    borderTopRightRadius: borderRadius.lg,
    maxHeight: 150,
    padding: 15
  }
});
