import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  ScrollView,
  Platform,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import CarCard from '../../components/Cards/CarCard';
import ScreenHeader from '../../components/Common/ScreenHeader';
import SizedBoxHeight from '../../components/Common/SizedBoxHeight';

import GoButtonLoader from '../../components/GoComponents/GoButtonLoader';
import GoImageName from '../../components/GoComponents/GoImageName';
import GoText from '../../components/GoComponents/GoText';
import buttonStyles from '../../theme/button';
import commonStyles from '../../theme/common';
import { color, ffamily, fsize } from '../../theme/font';

// Gap stuff
const { width } = Dimensions.get('window');
const gap = 12;
const itemPerRow = 3;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width * 0.89;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;

const EditCarScreen = ({
  carDetails,
  addCarLoading,
  carFuelTypes,
  selectedFuelType,
  setSelectedFuelType,
  carNumber,
  setCarNumber,
  onContinue,
}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color.white,
      }}>
      <ScreenHeader
        title="Edit Details"
        onClose={() => navigation.goBack()}
        bgColor={color.blueMain}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        style={{
          flex: 1,
        }}
        keyboardShouldPersistTaps="always">
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
          enabled>
          <SizedBoxHeight />
          <CarCard
            carModel={carDetails?.car_model?.Model_name}
            carNumber={carDetails?.car_number}
            carImg={carDetails?.car_model?.Car_Image?.url}
            carBrand={carDetails?.car_model?.car_company?.Company_name}
            carFule={carDetails?.fuel_type?.Type}
          />
          <GoText
            fontFamily={ffamily.bold}
            color={color.orange}
            fontSize={fsize.h6}
            style={commonStyles.h5Text}>
            Edit Your Car Fuel Type
          </GoText>

          <View style={{ flexGrow: 1, marginTop: 16 }}>
            <View style={styles.itemsWrap}>
              {carFuelTypes?.map((item, index) => (
                <GoImageName
                  key={index}
                  onPress={() => setSelectedFuelType(item)}
                  image={{ uri: item.attributes?.image?.data?.attributes?.url }}
                  name={item.attributes.Type}
                  fontSize={fsize.h6}
                  borderRadius={0}
                  itemStyles={styles.singleItem}
                  isSelected={
                    (selectedFuelType && selectedFuelType.id) === item.id
                  }
                />
              ))}
            </View>
          </View>
          <View>
            <GoText
              fontFamily={ffamily.bold}
              color={color.orange}
              fontSize={fsize.h6}
              style={commonStyles.h5Text}>
              Edit Car Registration Number
            </GoText>

            <TextInput
              placeholder="Edit Car number"
              style={styles.carNumberInput}
              value={carNumber}
              onChangeText={value => setCarNumber(value?.trim())}
              autoCapitalize="characters"
              maxLength={11}
              keyboardType="default"
            />
          </View>

          <GoButtonLoader
            loading={addCarLoading}
            text="Save Car"
            onPress={onContinue}
            style={buttonStyles.primaryButton}
            textStyle={buttonStyles.primaryButtonText}
          />
          <SizedBoxHeight height={Platform.OS === 'ios' ? 50 : 20} />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditCarScreen;

const styles = StyleSheet.create({
  scrollView: {
    ...commonStyles.paddingHorizontal,
    flexGrow: 1,
  },
  carNumberInput: {
    borderColor: color.blue,
    borderWidth: 1,
    borderRadius: 10,
    padding: 6,
    marginTop: 12,
    fontFamily: ffamily.semiBold,
    paddingLeft: 12,
    height: 45,
    marginBottom: 24,
  },
  itemsWrap: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 2),
    marginBottom: 20,
  },
  singleItem: {
    marginTop: 8,
    marginHorizontal: gap / 2,
    minWidth: childWidth,
    maxWidth: childWidth,
  },
});
