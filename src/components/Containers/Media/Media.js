import React, { useState, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Media.style';
import MediaItemList from '../../List/MediaItemList/MediaItemList';

const Media = ({ offset, isActive }) => {
  const [containerHeight, setContainerHeight] = useState(null);
  const [isReady, setReady] = useState(false);
  const [translateY] = useState(new Animated.Value(0));
  const minHeight = 100;

  const setTranslateY = (height = containerHeight) => {
    Animated.timing(translateY, {
      toValue: isActive ? 0 : height,
      duration: isReady ? 500 : 0,
      easing: Easing.inOut(Easing.cubic)
    }).start(() => {
      if (!isReady) setReady(true);
    });
  };

  const onLayoutInit = e => {
    const { height } = e.nativeEvent.layout;

    setContainerHeight(height);
    setTranslateY(height);
  };

  const onLayout = e => {
    if (containerHeight) return;
    onLayoutInit(e);
  };

  useEffect(() => {
    if (isReady && containerHeight) setTranslateY();
  });

  return (
    <Animated.View
      onLayout={onLayout}
      style={[
        styles.container,
        {
          minHeight: offset + minHeight,
          marginBottom: -offset,
          paddingBottom: offset + styles.container.padding,
          transform: [{ translateY }],
          opacity: isReady ? 1 : 0
        }
      ]}
    >
      <MediaItemList />
    </Animated.View>
  );
};

Media.propTypes = {
  offset: PropTypes.number,
  isActive: PropTypes.bool
};

Media.defaultProps = {
  offset: 0,
  isActive: false
};

export default Media;
