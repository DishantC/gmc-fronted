import { Dimensions, StyleSheet } from 'react-native';
import { ffamily, fsize, fWeight } from './font';
import color from './color';

const { width, height } = Dimensions.get('window');

const commonStyles = StyleSheet.create({
  background: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: color.background,
    flex: 1,
  },
  h2Text: {
    fontSize: fsize.h2,
    fontFamily: ffamily.semiBold,
    color: color.black,
    fontWeight: fWeight.semiBold,
  },
  h3Text: {
    fontSize: fsize.h3,
    color: color.black,
    fontWeight: fWeight.semiBold,
  },
  h4Text: {
    fontSize: fsize.h4,
    color: color.black,
    fontWeight: fWeight.semiBold,
  },
  h5Text: {
    fontSize: fsize.h5,
    color: color.black,
    fontWeight: fWeight.semiBold,
  },
  pText: {
    fontSize: fsize.mh5,
    color: color.black,
  },
  smallText: {
    flexWrap: 'wrap',
    fontSize: fsize.mh6,
    color: color.black,
  },
  superSmallText: {
    fontSize: fsize.mp1,
    color: color.black,
  },
  buttonText: {
    fontSize: fsize.h6,
    fontWeight: fWeight.semiBold,
    textTransform: 'uppercase',
  },
  rowAlignCenter: { flexDirection: 'row', alignItems: 'center' },
  rowACenterJBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centerInFlex1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  authInputs: {
    borderWidth: 1,
    borderColor: color.blueLight,
    borderRadius: 4,
    fontFamily: ffamily.regular,
    color: color.blue,
    fontSize: fsize.h4,
    height: 50,
  },
  selectInput: {
    inputAndroid: {
      color: color.black,
      height: 45,
      borderColor: color.borderColorLight,
      padding: 10,
      borderWidth: 1,
      backgroundColor: color.lineColor,
      borderRadius: 5,
      marginTop: 10,
      marginBottom: 10,
    },
    inputIOS: {
      color: color.black,
      height: 45,
      borderColor: color.borderColorLight,
      padding: 10,
      borderWidth: 1,
      backgroundColor: color.lineColor,
      borderRadius: 5,
      marginTop: 10,
      marginBottom: 10,
    },
  },
  bottom: {
    backgroundColor: 'white',
    borderTopColor: 'rgba(0,0,0,.1)',
    borderTopWidth: 0.7,
  },
  floatingWrap: {
    borderRadius: 20,
    backgroundColor: color.white,
    marginBottom: 24,
    paddingBottom: 70,
    paddingTop: 30,
  },
  sizedBox: {
    height: 10,
  },
  paddingHorizontal: {
    paddingHorizontal: width * 0.05,
  },
  primaryInput: {
    height: 45,
    padding: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: color.blue,
    backgroundColor: color.white,
    color: color.blue,
  },
  otpStyles: {
    height: 60,
    marginHorizontal: 0,
    borderColor: color.grayLight,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  cardActionPrimary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: color.btnLight,
  },
  popupContainer: {
    flex: 1,
    backgroundColor: color.blackOpacity,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
  },
  popupCardWrap: {
    backgroundColor: color.white,
    width: '100%',
    maxHeight: height * 0.7,
    borderRadius: 20,
    padding: 20,
  },
});

export default commonStyles;
