import React from 'react';
import { View } from 'react-native';
import color from '../../theme/color';

const LineHorizontal = ({
  height,
  width,
  linecolor,
  marginBottom,
  marginTop,
}) => {
  return (
    <View>
      <View
        style={{
          flexGrow: 1,
          height: height || 0.5,
          backgroundColor: linecolor || color.borderColor,
          width: width,
          marginTop: marginTop || 16,
          marginBottom: marginBottom || 16,
        }}
      />
    </View>
  );
};

export default LineHorizontal;
