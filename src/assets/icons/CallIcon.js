import React from 'react';
import { Image } from 'react-native';

const CallIcon = () => {
  return (
    <Image
      style={{ height: 28, width: 28 }}
      source={require('../images/callicon.png')}
    />
  );
};

export default CallIcon;
