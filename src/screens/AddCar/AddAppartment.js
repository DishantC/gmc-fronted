import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NonAppartment from '../../assets/icons/NonAppartment';
import Appartment from '../../assets/icons/Appartment';
import GoButton from '../../components/GoComponents/GoButton';
import color from '../../theme/color';
import commonStyles from '../../theme/common';
import { fsize, fWeight } from '../../theme/font';
import SizedBoxHeight from '../../components/Common/SizedBoxHeight';
import SizedBoxWidth from '../../components/Common/SizedBoxWidth';
import AppartmentAdd from '../../components/Appartment/AppartmentAdd';

const AddAppartment = ({ handleAppartmentSnapPress }) => {
  const [type, setType] = useState(null);
  return (
    <View style={commonStyles.paddingHorizontal}>
      <SizedBoxHeight height={10} />
      <Text style={commonStyles.smallText}>Select Residency</Text>
      <SizedBoxHeight height={10} />
      <View style={commonStyles.rowAlignCenter}>
        <GoButton
          text="Non Apartment"
          onPress={() => {
            setType('nonapartment');
            handleAppartmentSnapPress(1);
          }}
          style={{
            ...styles.buttonStyle,
            borderStyle: type === 'nonapartment' ? 'dashed' : 'solid',
          }}
          textStyle={{
            ...styles.textStyles,
          }}
          active={type === 'nonapartment'}
          icon={<Appartment />}
          centerItems
        />
        <SizedBoxWidth width={16} />
        <GoButton
          text="Apartment"
          onPress={() => {
            setType('apartment');
            handleAppartmentSnapPress(1);
          }}
          style={{
            ...styles.buttonStyle,
            borderStyle: type === 'apartment' ? 'dashed' : 'solid',
          }}
          textStyle={{
            ...styles.textStyles,
          }}
          active={type === 'apartment'}
          icon={<NonAppartment />}
          centerItems
        />
      </View>

      {type === 'apartment' && <AppartmentAdd />}
    </View>
  );
};

export default AddAppartment;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: color.btnLight,
    ...commonStyles.rowAlignCenter,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: color.blueDark,
    paddingVertical: 10,
    paddingHorizontal: 8,
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    color: color.black,
    fontSize: fsize.mh5,
    fontWeight: fWeight.semiBold,
    textAlign: 'center',
    marginLeft: 5,
  },
});
