import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import CarCard from '../../../components/Cards/CarCard';
import PackageCard from '../../../components/Cards/PackageCard';
import TimeSlotsCards from '../../../components/Cards/TimeSlotsCards';
import ScreenHeader from '../../../components/Common/ScreenHeader';
import SizedBoxHeight from '../../../components/Common/SizedBoxHeight';
import GoButton from '../../../components/GoComponents/GoButton';
import buttonStyles from '../../../theme/button';
import color from '../../../theme/color';
import commonStyles from '../../../theme/common';

const DemoOrderScreen = ({
  car,
  demoData,
  onContinue,
  selectedTimeSlot,
  setSelectedTimeSlot,
}) => {
  const navigation = useNavigation();

  const item = {
    attributes: {
      price: demoData?.demo_plan_price?.price,
      plan: {
        data: {
          attributes: {
            ...demoData?.demo_plan_price?.plan,
          },
        },
      },
    },
  };

  const timeSlots = demoData.time_slot.map(itemDemo => {
    return {
      id: itemDemo.id,
      attributes: {
        ...itemDemo,
      },
    };
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScreenHeader
        title="Book a Demo"
        onClose={() => navigation.goBack()}
        bgColor={color.blueMain}
      />
      <View style={styles.wrap}>
        <View
          style={{
            flex: 1,
          }}>
          <Text style={{ ...commonStyles.h3Text, textAlign: 'center' }}>
            Demo Order Details
          </Text>
          <SizedBoxHeight height={20} />
          <CarCard
            carImg={car?.car_model?.Car_Image?.url}
            carModel={car?.car_model?.Model_name}
            carBrand={car?.car_model?.Model_name}
            carNumber={car?.car_number}
            carFule={car?.fuel_type.Type}
          />
          <Text
            style={{
              ...commonStyles.smallText,
              textAlign: 'center',
              marginBottom: -16,
            }}>
            Demo Package
          </Text>
          <PackageCard item={item} />
          <SizedBoxHeight height={20} />
          <Text
            style={{
              ...commonStyles.smallText,
              textAlign: 'center',
            }}>
            Select Timeslot
          </Text>
          <SizedBoxHeight height={6} />
          <TimeSlotsCards
            timeSlots={timeSlots}
            selectedTimeSlot={selectedTimeSlot}
            setSelectedTimeSlot={setSelectedTimeSlot}
          />
        </View>
        <GoButton
          text="Book a Free Demo Now"
          onPress={onContinue}
          style={buttonStyles.primaryButton}
          textStyle={buttonStyles.primaryButtonText}
        />
      </View>
    </SafeAreaView>
  );
};

export default DemoOrderScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  wrap: {
    flex: 1,
    paddingVertical: 20,
    ...commonStyles.paddingHorizontal,
  },
});
