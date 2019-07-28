import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Octicons';

import styles from './MediaButton.style';

const MediaButton = ({ onPress, style }) => {
  return (
    <View style={styles.iconView}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#9e9e9e', true)}
        onPress={onPress}
      >
        <View style={[styles.iconView, style]}>
          <Icon name="plus" style={styles.icon} size={25} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

MediaButton.propTypes = {
  style: PropTypes.shape(),
  onPress: PropTypes.func
};

MediaButton.defaultProps = {
  style: {},
  onPress: () => {}
};

export default MediaButton;
