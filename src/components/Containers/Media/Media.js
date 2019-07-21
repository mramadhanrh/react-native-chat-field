import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Media.style';

const Media = ({ offset }) => {
  return (
    <View
      style={[styles.container, { paddingBottom: offset, transform: [{ translateY: offset }] }]}
    >
      <View />
    </View>
  );
};

Media.propTypes = {
  offset: PropTypes.number
};

Media.defaultProps = {
  offset: 0
};

export default Media;
