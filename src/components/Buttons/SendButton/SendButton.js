import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './SendButton.style';

const SendButton = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.wrapper}>
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#9e9e9e', true)}>
          <View style={styles.iconView}>
            <Icon name="paper-plane" style={styles.icon} size={25} />
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

SendButton.propTypes = {
  style: PropTypes.shape()
};

SendButton.defaultProps = {
  style: {}
};

export default SendButton;
