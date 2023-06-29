import React from 'react';
import { View } from 'react-native';

const SizedBoxHeight = ({ height = 20 }) => {
  return (
    <View
      style={{
        height: height,
      }}
    />
  );
};

export default SizedBoxHeight;
