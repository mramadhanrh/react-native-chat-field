import React, { useState } from 'react';
import { View } from 'react-native';
import ChatField from '../ChatField/ChatField';
import ChatTextInput from '../../TextInputs/ChatTextInput/ChatTextInput';
import SendButton from '../../Buttons/SendButton/SendButton';
import Media from '../Media/Media';

import styles from './Chat.style';
import MediaButton from '../../Buttons/MediaButton/MediaButton';

const Chat = () => {
  const [fieldHeight, setFieldHeight] = useState(0);
  const [isMediaActive, setMediaActive] = useState(false);

  const onMediaPress = () => {
    setMediaActive(!isMediaActive);
  };

  return (
    <View style={styles.container}>
      <ChatField
        onLayout={e => {
          const { height } = e.nativeEvent.layout;
          setFieldHeight(height);
        }}
      >
        <ChatTextInput button={<MediaButton onPress={() => onMediaPress()} />}>
          <View style={styles.iconView}>
            <SendButton />
          </View>
        </ChatTextInput>
      </ChatField>
      <Media offset={fieldHeight} isActive={isMediaActive} />
    </View>
  );
};

export default Chat;
