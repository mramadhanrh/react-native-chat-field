import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import MediaButton from '../../Buttons/MediaButton/MediaButton';
import styles from './ChatTextInput.style';

const ChatTextInput = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.iconView}>
          <MediaButton style={styles.mediaIcon} />
        </View>
        <TextInput style={styles.input} multiline />
      </View>
      {children}
    </View>
  );
};

ChatTextInput.propTypes = {
  children: PropTypes.element
};

ChatTextInput.defaultProps = {
  children: null
};

export default ChatTextInput;
