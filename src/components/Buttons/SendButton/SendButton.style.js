import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  wrapper: {
    borderRadius: 100,
    width: '100%',
    aspectRatio: 1 / 1
  },
  iconView: {
    backgroundColor: '#59ABF2',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    aspectRatio: 1 / 1
  },
  icon: {
    color: '#FFFFFF',
    transform: [
      {
        translateX: -2.5
      }
    ]
  }
});
