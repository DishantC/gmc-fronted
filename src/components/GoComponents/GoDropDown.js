import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import DownArrow from '../../assets/icons/DownArrow';
import color from '../../theme/color';
import commonStyles from '../../theme/common';
import { fWeight } from '../../theme/font';

const GoDropDown = ({ title, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.itemWrapper,
        backgroundColor: isSelected ? color.blueLight : color.white,
      }}>
      <Text style={{ ...commonStyles.pText, fontWeight: fWeight.semiBold }}>
        {title}
      </Text>
      <DownArrow />
    </TouchableOpacity>
  );
};

export default GoDropDown;

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: color.grayLite,
    ...commonStyles.paddingHorizontal,
  },
});
