import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import BackArrowCircle from '../../assets/icons/BackArrowCircle';
import color from '../../theme/color';
import { fsize, fWeight } from '../../theme/font';

const { width } = Dimensions.get('window');

const BottomSheetHeader = ({ headerText, onClose, bgColor }) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: bgColor ? bgColor : color.blueMain,
      }}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={onClose}>
          <BackArrowCircle />
        </TouchableOpacity>
        {headerText && (
          <View style={styles.textWrap}>
            <Text style={styles.header}>{headerText}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default BottomSheetHeader;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: width * 0.05,
    paddingVertical: 16,
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
