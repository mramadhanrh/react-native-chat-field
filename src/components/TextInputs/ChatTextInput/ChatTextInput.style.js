import { StyleSheet } from 'react-native';
import themesSetting from '../../../themes/themesSetting';

const { borderRadius } = themesSetting;

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    borderRadius: borderRadius.md,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  iconView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    maxWidth: 50,
    padding: 5
  },
  input: {
    flex: 6,
    width: '100%'
  }
});
