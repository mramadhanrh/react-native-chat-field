import React, { useState } from 'react';
import { View } from 'react-native';
import ChatField from '../ChatField/ChatField';
import ChatTextInput from '../../TextInputs/ChatTextInput/ChatTextInput';
import SendButton from '../../Buttons/SendButton/SendButton';
import Media from '../Media/Media';

import styles from './Chat.style';

const Chat = () => {
  const [height, setHeight] = useState(0);

  return (
    <View style={styles.container}>
      <ChatField
        onLayout={e => {
          const { height } = e.nativeEvent.layout;
          setHeight(height);
        }}
      >
        <View style={styles.wrapper}>
          <ChatTextInput>
            <View style={styles.iconView}>
              <SendButton />
            </View>
          </ChatTextInput>
        </View>
      </ChatField>
      <View>
        <Media offset={height} />
      </View>
    </View>
  );
};

export default Chat;
