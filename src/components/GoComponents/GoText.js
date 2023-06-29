import React from 'react';
import { Text } from 'react-native';

import { ffamily, fsize, fWeight } from '../../theme/font';
import colors from '../../theme/color';

export default ({
  children,
  color = colors.black,
  fontWeight = fWeight.normal,
  fontFamily = ffamily.regular,
  fontSize = fsize.h5,
  letterSpacing,
  lineHeight,
  textAlign,
  style,
  textDecorationLine,
  numberOfLines,
  onPress,
  adjustsFontSizeToFit,
}) => {
  return (
    <Text
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      style={{
        fontFamily,
        fontWeight,
        fontSize,
        color,
        letterSpacing,
        lineHeight,
        textAlign,
        textDecorationLine,
        ...style,
      }}
      numberOfLines={numberOfLines}
      onPress={onPress}>
      {children}
    </Text>
  );
};
