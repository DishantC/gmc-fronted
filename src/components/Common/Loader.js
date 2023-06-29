import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import color from '../../theme/color';
import { fAlign, fsize } from '../../theme/font';

export default ({ style, text }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.white,
      }}>
      <ActivityIndicator color={color.blue_Dark} size="large" style={style} />
      {text && (
        <Text
          style={{
            marginTop: 20,
            textAlign: fAlign.center,
            color: color.blue,
            fontSize: fsize.h5,
          }}>
          {text}
        </Text>
      )}
    </View>
  );
};
