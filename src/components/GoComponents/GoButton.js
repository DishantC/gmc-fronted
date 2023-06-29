import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoButton = ({
  text,
  onPress,
  icon,
  style,
  textStyle,
  iconStyle,
  disabled,
  centerItems,
}) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={() => onPress()}
      disabled={disabled}>
      {centerItems ? (
        <Text style={textStyle}>{text}</Text>
      ) : (
        <View style={styles.textWrap}>
          <Text style={textStyle}>{text}</Text>
        </View>
      )}
      {icon && <View style={iconStyle}>{icon}</View>}
    </TouchableOpacity>
  );
};

export default GoButton;

const styles = StyleSheet.create({
  textWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
