import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import GoText from './GoText';
import { ffamily, fsize, color, radius, fAlign } from '../../theme/font';

export default ({
  onPress,
  image,
  isSelected,
  name,
  containerStyle,
  imageHeight = 48,
  imageWidth = 56,
  borderRadius = 5,
  fontSize = fsize.p2,
  itemStyles,
}) => {
  const borderStyles = {
    borderWidth: isSelected ? 2 : 1,
    borderColor: isSelected ? color.blueDark : color.borderColorLight,
    borderStyle: isSelected ? 'dashed' : 'solid',
    ...containerStyle,
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.touchable, borderStyles, itemStyles]}>
      <Image
        source={image}
        resizeMode="contain"
        style={{
          height: imageHeight,
          width: imageWidth,
          borderRadius: borderRadius,
        }}
      />
      <GoText
        fontFamily={ffamily.semiBold}
        fontSize={fontSize}
        textAlign={fAlign.center}>
        {name}
      </GoText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    margin: 10,
    borderRadius: radius.default,
  },
});
