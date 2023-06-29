import React, { useState } from 'react';
import { Keyboard, Platform, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import GoButton from '../../components/GoComponents/GoButton';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import commonStyles from '../../theme/common';
import { useDispatch } from 'react-redux';
import { setCarData } from '../../redux/newCar/newCarSlice';
import { showtoast } from '../../utils/error';
import buttonStyles from '../../theme/button';

const AddNumberScreen = ({ openSelectCompanyModal }) => {
  const dispatch = useDispatch();
  const [carNumber, setCarNumber] = useState('');

  const addCarNumber = () => {
    if (!carNumber) {
      showtoast('Please enter your car number');
    } else {
      dispatch(
        setCarData({
          carNumber: carNumber,
        }),
      );
      Keyboard.dismiss();
      openSelectCompanyModal();
    }
  };

  return (
    <SafeAreaView>
      <View style={commonStyles.paddingHorizontal}>
        <View style={styles.inputContainer}>
          <BottomSheetTextInput
            style={commonStyles.primaryInput}
            keyboardType="default"
            value={carNumber}
            onChangeText={value => setCarNumber(value?.trim())}
            autoCapitalize="characters"
            maxLength={11}
            placeholder="Plate No"
          />
        </View>
        <GoButton
          text="Confirm"
          onPress={() => addCarNumber()}
          style={buttonStyles.primaryButton}
          textStyle={buttonStyles.primaryButtonText}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddNumberScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: Platform.OS === 'ios' ? -16 : 20,
    paddingBottom: 20,
  },
});
