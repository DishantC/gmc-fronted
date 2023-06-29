import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  ScrollView,
} from 'react-native';

import CarCard from '../../../components/Cards/CarCard';
import SizedBoxHeight from '../../../components/Common/SizedBoxHeight';
import GoButton from '../../../components/GoComponents/GoButton';
import PackageCard from '../../../components/Cards/PackageCard';
import color from '../../../theme/color';
import commonStyles from '../../../theme/common';
import RedCloseCircle from '../../../assets/icons/RedCloseCircle';
import { fsize, fWeight } from '../../../theme/font';
import buttonStyles from '../../../theme/button';

const OrderConfirmScreen = ({
  onContinue,
  confirmCleanPlan,
  confirmTimeSlot,
  orderDiscount,
  getCarDetails,
  setModalVisible,
  totalDiscount,
  tipAmmount,
  setTipAmmount,
  showTips,
}) => {
  const giveDiscount = orderDiscount.giveDiscount;
  const planPrice = confirmCleanPlan.attributes.price;

  const tips = [
    {
      id: 1,
      tip: 20,
    },
    {
      id: 2,
      tip: 50,
    },
    {
      id: 3,
      tip: 100,
    },
  ];

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView style={styles.container}>
        <View style={styles.fullheight}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={() => setModalVisible(false)}>
            <RedCloseCircle />
          </TouchableOpacity>
          <Text style={styles.heading}>Subscription Details</Text>
          <SizedBoxHeight />
          <CarCard
            carImg={getCarDetails.car_model.Car_Image.url}
            carModel={getCarDetails.car_model.Model_name}
            carBrand={getCarDetails.car_model.car_company.Company_name}
            carNumber={getCarDetails.car_number}
          />
          <View style={styles.section}>
            <Text style={{ ...styles.centertxt, marginBottom: -16 }}>
              Selected Package
            </Text>
            <PackageCard
              item={confirmCleanPlan}
              orderDiscount={orderDiscount}
              giveDiscount={giveDiscount}
            />
          </View>
          {showTips && (
            <View style={{ ...styles.section, marginTop: -10 }}>
              <Text style={styles.heading}>Add a Tip</Text>
              <Text style={commonStyles.pText}>Frequent Tips</Text>
              <View style={styles.tipCards}>
                {tips.map((tip, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      setTipAmmount(tipAmmount === tip.tip ? 0 : tip.tip)
                    }
                    style={{
                      ...styles.tipCard,
                      backgroundColor:
                        tipAmmount === tip.tip ? color.blue : color.white,
                    }}>
                    <Text
                      style={{
                        color:
                          tipAmmount === tip.tip ? color.white : color.blue,
                        fontWeight: fWeight.semiBold,
                      }}>
                      Rs: {tip.tip}/-
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <Text
                style={{
                  ...commonStyles.pText,
                  marginTop: 12,
                }}>
                Enter a custom tip amount
              </Text>
              <TextInput
                maxLength={10}
                keyboardType={
                  Platform.OS === 'android' ? 'numeric' : 'phone-pad'
                }
                style={styles.textInput}
                value={tipAmmount}
                placeholder="Enter tip amount"
                placeholderTextColor={color.grayLighter}
                onChangeText={value => {
                  let customTip = value.replace(/\D/gm, '');
                  setTipAmmount(Number(customTip));
                }}
              />
            </View>
          )}
          <View style={styles.section}>
            <Text style={styles.centertxt}>Selected Timeslot</Text>
            <Text style={styles.highlight}>
              {confirmTimeSlot.attributes.From.substring(0, 5)} to{' '}
              {confirmTimeSlot.attributes.To.substring(0, 5)}
            </Text>
          </View>
          <View style={styles.section}>
            {giveDiscount ? (
              <Text style={styles.centertxt}>Final Price After Discount</Text>
            ) : (
              <Text style={styles.centertxt}>Final Price</Text>
            )}
            <Text style={styles.highlight}>
              {giveDiscount && (
                <>
                  <Text style={styles.linethrough}>₹{planPrice}</Text>
                  <View
                    style={{
                      width: 8,
                    }}
                  />
                </>
              )}
              {giveDiscount ? (
                <Text style={styles.highlight}>
                  ₹
                  {planPrice - totalDiscount > 0
                    ? Number(planPrice) -
                      Number(totalDiscount) +
                      (tipAmmount || 0)
                    : 1 + tipAmmount}
                </Text>
              ) : (
                <Text style={styles.highlight}>
                  ₹{Number(planPrice) + (tipAmmount || 0)}
                </Text>
              )}
            </Text>
          </View>
        </View>

        <GoButton
          text="Pay Now"
          onPress={onContinue}
          style={buttonStyles.primaryButton}
          textStyle={buttonStyles.primaryButtonText}
        />
        <SizedBoxHeight />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderConfirmScreen;

const styles = StyleSheet.create({
  background: {
    flexGrow: 1,
    backgroundColor: color.white,
    paddingTop: Platform.OS === 'ios' ? 10 : 20,
  },
  container: {
    ...commonStyles.paddingHorizontal,
    flex: 1,
    position: 'relative',
    paddingBottom: Platform.OS === 'ios' ? 0 : 30,
  },
  closeIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1,
  },
  heading: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: fsize.h3,
    fontWeight: fWeight.semiBold,
    textAlign: 'center',
    color: color.black,
  },
  fullheight: {
    flex: 1,
  },
  section: {
    paddingBottom: 20,
  },

  carnumber: {
    fontSize: fsize.h5,
    fontWeight: fWeight.bold,
    color: color.blue,
    paddingBottom: 50,
  },
  highlight: {
    fontSize: fsize.h4,
    color: color.black,
    fontWeight: fWeight[600],
    textAlign: 'center',
  },
  linethrough: {
    fontSize: fsize.h5,
    textAlign: 'center',
    color: color.black,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  centertxt: {
    textAlign: 'center',
    color: color.black,
  },
  tipCards: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  tipCard: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: color.blue,
    borderRadius: 7,
    marginRight: 10,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    color: color.blue,
    paddingLeft: 16,
    fontSize: fsize.h5,
    marginTop: 5,
    borderColor: color.blue2,
    height: 40,
  },
});
