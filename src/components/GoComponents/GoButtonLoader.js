import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import color from '../../theme/color';

const GoButtonLoader = ({
  text,
  onPress,
  icon,
  style,
  textStyle,
  iconStyle,
  disabled,
  centerItems,
  loading,
}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress} disabled={disabled}>
      {loading ? (
        <ActivityIndicator size="small" color={color.white} />
      ) : (
        <>
          {centerItems ? (
            <Text style={textStyle}>{text}</Text>
          ) : (
            <View style={styles.textWrap}>
              <Text style={textStyle}>{text}</Text>
            </View>
          )}
          {icon && <View style={iconStyle}>{icon}</View>}
        </>
      )}
    </TouchableOpacity>
  );
};

export default GoButtonLoader;

const styles = StyleSheet.create({
  textWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
