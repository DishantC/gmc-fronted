import React from 'react';
import { View } from 'react-native';

const SizedBoxWidth = ({ width = 20 }) => {
  return (
    <View
      style={{
        width: width,
      }}
    />
  );
};

export default SizedBoxWidth;
