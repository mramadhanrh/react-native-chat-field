import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';
import styles from './MediaItem.style';

const MediaItem = ({ icon, size, margin, backgroundColor, onPress, disabled, hide }) => {
  return (
    <TouchableNativeFeedback onPress={onPress} disabled={hide || disabled}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: hide ? 'transparent' : backgroundColor,
            width: size,
            height: size,
            margin
          }
        ]}
      >
        {hide ? null : icon}
      </View>
    </TouchableNativeFeedback>
  );
};

MediaItem.propTypes = {
  icon: PropTypes.element,
  size: PropTypes.number,
  margin: PropTypes.number,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  hide: PropTypes.bool
};

MediaItem.defaultProps = {
  icon: null,
  size: 75,
  margin: 5,
  backgroundColor: '#9c27b0',
  onPress: () => {},
  disabled: false,
  hide: false
};

export default MediaItem;
