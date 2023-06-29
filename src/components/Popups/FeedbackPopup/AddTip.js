import React, { useState } from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import buttonStyles from '../../../theme/button';
import color from '../../../theme/color';
import commonStyles from '../../../theme/common';
import LineHorizontal from '../../Common/LineHorizontal';
import GoButton from '../../GoComponents/GoButton';

import { send_tip } from '../../../apis/feedbackApis';
import { fsize, fWeight } from '../../../theme/font';
import { showtoast } from '../../../utils/error';
import { razorPay } from '../../../utils/razorpay';

const AddTip = ({ car_id, setModalType, dateData, cleaner_id }) => {
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

  const [ammount, setAmmount] = useState(0);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const onConfirm = async () => {
    if (ammount <= 0) {
      showtoast('Please enter a valid amount');
      return;
    }
    try {
      setPaymentLoading(true);
      const paid_results = await razorPay(ammount * 100);

      if (paid_results && paid_results?.razorpay_payment_id) {
        const data = {
          data: {
            Amount: ammount,
            razorpay_id: paid_results.razorpay_payment_id,
            given_by_user: true,
            given_on: dateData,
            cleaner: cleaner_id,
            car: car_id,
          },
        };

        try {
          const response = await send_tip(data);
          if (response) {
            setModalType('root');
            showtoast('Tip added successfully');
          }
        } catch (error) {
          setPaymentLoading(false);
          showtoast(error.message);
        }
      }
    } catch (error) {
      showtoast(error.message);
      setPaymentLoading(false);
    }
  };

  return (
    <View>
      <Text style={commonStyles.h5Text}>Leave Feedback</Text>
      <LineHorizontal
        height={2}
        width="100%"
        linecolor={color.blueLight2}
        marginTop={12}
      />
      <Text style={commonStyles.pText}>Frequent Tips</Text>
      <View style={styles.tipCards}>
        {tips.map((tip, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setAmmount(tip.tip)}
            style={{
              ...styles.tipCard,
              backgroundColor: ammount === tip.tip ? color.blue : color.white,
            }}>
            <Text
              style={{
                color: ammount === tip.tip ? color.white : color.blue,
                fontWeight: fWeight.semiBold,
              }}>
              Rs: {tip.tip}/-
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <LineHorizontal
        height={2}
        width="100%"
        linecolor={color.blueLight2}
        marginBottom={16}
      />

      <Text style={commonStyles.pText}>Enter a custom tip amount</Text>
      <TextInput
        maxLength={10}
        keyboardType={Platform.OS === 'android' ? 'numeric' : 'phone-pad'}
        style={styles.textInput}
        value={ammount}
        placeholder="Enter tip amount"
        placeholderTextColor={color.grayLighter}
        onChangeText={value => {
          let customTip = value.replace(/\D/gm, '');
          setAmmount(customTip);
        }}
      />
      <LineHorizontal
        height={2}
        width="100%"
        linecolor={color.blueLight2}
        marginBottom={16}
      />
      <GoButton
        onPress={onConfirm}
        text={
          paymentLoading ? <ActivityIndicator color={color.white} /> : 'Add Tip'
        }
        disabled={paymentLoading}
        style={buttonStyles.primaryButton}
        textStyle={buttonStyles.primaryButtonText}
      />
    </View>
  );
};

export default AddTip;

const styles = StyleSheet.create({
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
    marginTop: 16,
    borderColor: color.blue2,
    height: 40,
  },
});
