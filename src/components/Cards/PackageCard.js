import React from 'react';
import { Text, View } from 'react-native';
import GoText from '../GoComponents/GoText';
import color from '../../theme/color';
import { fAlign, ffamily, fsize, fWeight } from '../../theme/font';

const PackageCard = ({ item }) => {
  const { price, plan } = item.attributes;

  let planDetail = plan.data.attributes;
  let plan_price = price;

  return (
    <View>
      <View
        style={{
          marginTop: 12,
          paddingVertical: 8,
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: color.blueDark2,
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderWidth: 1,
            borderColor: color.blueDark2,
          }}>
          <Text
            style={{
              color: color.white,
              fontSize: fsize.h5,
              fontFamily: ffamily.semiBold,
              fontWeight: fWeight.semiBold,
            }}>
            {planDetail?.Name}
          </Text>

          <Text
            style={{
              color: color.white,
              fontSize: fsize.h5,
              fontFamily: ffamily.semiBold,
              fontWeight: fWeight.semiBold,
            }}>
            {planDetail?.duration_months} month
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopWidth: 0,
            borderWidth: 1,
            borderColor: color.blueDark2,
          }}>
          <GoText
            fontSize={fsize.h6}
            fontFamily={ffamily.semiBold}
            textAlign={fAlign.center}
            style={{
              borderRightColor: color.gray_Light,
              borderRightWidth: 1,
              flex: 1,
            }}>
            <GoText
              color={color.black}
              fontSize={fsize.h1}
              textAlign={fAlign.center}
              fontWeight={fWeight.bold}>
              {planDetail?.exterior_cleaning || 0}
            </GoText>
            {'\n'}
            <GoText
              color={color.black}
              fontSize={fsize.h6}
              textAlign={fAlign.center}
              fontFamily={ffamily.semiBold}>
              Exterior
            </GoText>
          </GoText>
          <GoText
            fontSize={fsize.h6}
            fontFamily={ffamily.semiBold}
            textAlign={fAlign.center}
            style={{
              borderRightColor: color.gray_Light,
              borderRightWidth: 1,
              flex: 1,
            }}>
            <GoText
              color={color.black}
              fontSize={fsize.h1}
              textAlign={fAlign.center}
              fontWeight={fWeight.bold}>
              {planDetail?.interior_cleanings || 0}
            </GoText>
            {'\n'}
            <GoText
              color={color.black}
              fontSize={fsize.h6}
              textAlign={fAlign.center}
              fontFamily={ffamily.semiBold}>
              Interior
            </GoText>
          </GoText>
          <GoText
            color={color.black}
            fontSize={fsize.h6}
            fontFamily={ffamily.semiBold}
            textAlign={fAlign.center}
            style={{ flex: 1 }}>
            <GoText
              color={color.black}
              fontSize={fsize.h1}
              textAlign={fAlign.center}
              fontWeight={fWeight.bold}>
              ₹{plan_price}
            </GoText>
            {'\n'}
            <GoText
              color={color.gray}
              fontSize={fsize.p1}
              fontFamily={ffamily.semiBold}
              textAlign={fAlign.center}>
              per month
            </GoText>
          </GoText>
        </View>
      </View>
    </View>
  );
};

export default PackageCard;
