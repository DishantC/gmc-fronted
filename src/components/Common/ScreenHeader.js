import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BackArrowCircle from '../../assets/icons/BackArrowCircle';
import color from '../../theme/color';
import commonStyles from '../../theme/common';
import { fsize, fWeight } from '../../theme/font';

const ScreenHeader = ({ title, onClose, bgColor }) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: bgColor ? bgColor : color.haederbg,
      }}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={onClose}>
          <BackArrowCircle />
        </TouchableOpacity>
        {title && (
          <View style={styles.textWrap}>
            <Text style={styles.header}>{title}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 16,
    ...commonStyles.paddingHorizontal,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    color: color.black,
    fontSize: fsize.h4,
    fontWeight: fWeight.bold,
  },
  textWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
