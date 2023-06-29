import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import GoText from '../../../components/GoComponents/GoText';
import GoButton from '../../../components/GoComponents/GoButton';
import commonStyles from '../../../theme/common';
import CorrectCircle from '../../../assets/icons/CorrectCircle';

import { fsize, color, fAlign, ffamily } from '../../../theme/font';
import buttonStyles from '../../../theme/button';
import SizedBoxHeight from '../../../components/Common/SizedBoxHeight';

export default ({ onContinue }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={style.scrollView}>
      <View style={style.wrap}>
        <CorrectCircle />
        <GoText
          fontFamily={ffamily.bold}
          style={{ marginTop: 12 }}
          fontSize={fsize.h6}
          textAlign={fAlign.center}>
          Payment Accepted Thank you
        </GoText>

        <GoText
          fontFamily={ffamily.semiBold}
          color={color.gray}
          fontSize={fsize.p1}
          style={{ marginTop: 12, marginHorizontal: 30 }}
          textAlign={fAlign.center}>
          Full cleaning package is activated for 1 month
        </GoText>
        <SizedBoxHeight />
        <GoButton
          text="Back to Cars"
          onPress={onContinue}
          style={buttonStyles.primaryButton}
          textStyle={buttonStyles.primaryButtonText}
        />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: color.white,
  },
  wrap: {
    ...commonStyles.paddingHorizontal,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
