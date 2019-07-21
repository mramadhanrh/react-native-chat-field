import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: '#eee'
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 50,
    marginLeft: 5
  }
});
