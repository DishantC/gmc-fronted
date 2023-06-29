import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import color from '../../theme/color';
import CarCardTop from './CarCardTop';

const CarCard = ({
  carImg,
  carModel,
  carBrand,
  carNumber,
  carFule,
  actions,
  additionalInfo,
  isSelected,
  onPress,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        borderColor: isSelected ? color.blueDark : color.blue,
        borderStyle: isSelected ? 'dashed' : 'solid',
      }}>
      <TouchableOpacity onPress={onPress}>
        <CarCardTop
          carImg={carImg}
          carModel={carModel}
          carBrand={carBrand}
          carNumber={carNumber}
          carFule={carFule}
          additionalInfo={additionalInfo}
        />
      </TouchableOpacity>
      {actions && actions}
    </View>
  );
};

export default CarCard;

const styles = StyleSheet.create({
  container: {
    borderColor: color.blue2,
    borderWidth: 0.6,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  imageWrap: {
    flex: 1,
  },
  textWrap: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
