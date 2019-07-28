import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './ChatTextInput.style';

const ChatTextInput = ({ button, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.iconView}>{button}</View>
        <TextInput style={styles.input} multiline />
      </View>
      {children}
    </View>
  );
};

ChatTextInput.propTypes = {
  children: PropTypes.element,
  button: PropTypes.element
};

ChatTextInput.defaultProps = {
  children: null,
  button: null
};

export default ChatTextInput;
