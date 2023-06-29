import React from 'react';
import { View } from 'react-native';

import color from '../../theme/color';

const LineVertical = ({
  fillcolor,
  width,
  height,
  marginHorizontal,
  additionalStyles,
}) => {
  return (
    <View
      style={{
        width: width || 1,
        height: height || 30,
        marginHorizontal: marginHorizontal || 0,
        backgroundColor: fillcolor || color.black,
        ...additionalStyles,
      }}
    />
  );
};

export default LineVertical;
