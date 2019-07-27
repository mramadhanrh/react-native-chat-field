import { StyleSheet } from 'react-native';
import themesSetting from '../../../themes/themesSetting';

const { borderRadius } = themesSetting;

export default StyleSheet.create({
  container: {
    backgroundColor: '#59ABF2',
    zIndex: -1,
    borderTopLeftRadius: borderRadius.lg,
    borderTopRightRadius: borderRadius.lg,
    paddingTop: 20
  }
});
