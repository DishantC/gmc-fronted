import { Platform, StyleSheet } from 'react-native';

import commonStyles from '../../theme/common';
import { color, ffamily, fsize, fWeight } from '../../theme/font';

const authStyles = StyleSheet.create({
  buttonSection: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 20,
    zIndex: 100,
    ...commonStyles.paddingHorizontal,
  },
  pretext: {
    fontSize: Platform.OS === 'android' ? fsize.h4 : fsize.h3,
    fontFamily: ffamily.robotoRegular,
    top: '-50%',
    left: 8,
    maxWidth: 49,
    color: color.blue,
  },
  otpSupportText: {
    ...commonStyles.smallText,
    marginTop: -16,
    marginBottom: 16,
  },
  codeInputField: {
    borderColor: color.white,
    borderBottomColor: color.grayLighter,
    borderBottomWidth: 2,
    borderWidth: 0,
    color: color.blue,
    fontWeight: fWeight.bold,
  },
  topWrapSignup: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 15,
    justifyContent: 'flex-start',
    position: 'relative',
    zIndex: 1,
  },
  topWrapLogin: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    justifyContent: 'flex-start',
  },
});

export default authStyles;
