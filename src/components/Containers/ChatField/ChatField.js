import React from 'react';
import { View } from 'react-native';
import PropsTypes from 'prop-types';

import styles from './ChatField.style';

const ChatField = ({ backgroundColor, children, style, onLayout }) => {
  return (
    <View style={[styles.container, { backgroundColor }, style]} onLayout={onLayout}>
      {children}
    </View>
  );
};

ChatField.propTypes = {
  backgroundColor: PropsTypes.string,
  children: PropsTypes.element,
  style: PropsTypes.shape({ root: PropsTypes.string }),
  onLayout: PropsTypes.func
};

ChatField.defaultProps = {
  backgroundColor: '#ffffff',
  children: null,
  style: {},
  onLayout: () => {}
};

export default ChatField;
