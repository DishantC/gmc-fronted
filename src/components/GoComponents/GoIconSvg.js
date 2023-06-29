import React from 'react';
import { View, Text } from 'react-native';

const GoIconSvg = ({ icon, title, styles, iconStyles, textStyles }) => {
  return (
    <View style={styles}>
      <Text style={iconStyles}>{icon}</Text>
      <Text style={textStyles}>{title}</Text>
    </View>
  );
};

export default GoIconSvg;
