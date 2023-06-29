import { StyleSheet } from 'react-native';
import { fsize, fWeight } from './font';
import color from './color';

const buttonStyles = StyleSheet.create({
  buttonText: {
    fontSize: fsize.h6,
    fontWeight: fWeight.semiBold,
    textTransform: 'uppercase',
  },
  primaryButton: {
    backgroundColor: color.blue,
    borderRadius: 10,
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  primaryButtonText: {
    color: color.white,
    fontSize: fsize.h5,
    fontWeight: fWeight.semiBold,
    textAlign: 'center',
    marginLeft: 10,
  },
  primaryButtonTextCap: {
    textTransform: 'uppercase',
    color: color.white,
    fontSize: fsize.h5,
    fontWeight: fWeight.semiBold,
    textAlign: 'center',
    marginLeft: 10,
  },
  outlinedButton: {
    borderWidth: 1,
    borderColor: color.blue,
    borderRadius: 10,
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outlinedButtonText: {
    color: color.black,
    fontSize: fsize.h5,
    fontWeight: fWeight.semiBold,
    textAlign: 'center',
    marginLeft: 10,
  },
  dashedButton: {
    backgroundColor: color.btnLight,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: color.blueDark,
    borderStyle: 'dashed',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashedButtonText: {
    color: color.blueDark,
    fontSize: fsize.h5,
    fontWeight: fWeight.semiBold,
    textAlign: 'center',
    marginLeft: 10,
  },
});

export default buttonStyles;
