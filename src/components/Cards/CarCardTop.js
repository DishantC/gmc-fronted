import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import commonStyles from '../../theme/common';

const CarCardTop = ({
  carImg,
  carModel,
  carBrand,
  carNumber,
  carFule,
  additionalInfo,
}) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.imageWrap}>
        <Image
          resizeMode="contain"
          source={{
            uri: carImg,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.textWrap}>
        {carModel && <Text style={commonStyles.h2Text}>{carModel}</Text>}
        {carBrand && <Text style={commonStyles.h4Text}>{carBrand}</Text>}
        {carNumber && <Text style={commonStyles.smallText}>{carNumber}</Text>}
        {carFule && <Text style={commonStyles.smallText}>{carFule}</Text>}
        {additionalInfo && additionalInfo}
      </View>
    </View>
  );
};

export default CarCardTop;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrap: {
    flex: 1,
  },
  image: { height: 100, width: '100%' },
  textWrap: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
