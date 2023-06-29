import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Platform,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import GoText from '../../../components/GoComponents/GoText';
import GoButton from '../../../components/GoComponents/GoButton';
import commonStyles from '../../../theme/common';
import ScreenHeader from '../../../components/Common/ScreenHeader';
import CarCard from '../../../components/Cards/CarCard';
import RightArrow from '../../../assets/icons/RightArrow';
import SizedBoxHeight from '../../../components/Common/SizedBoxHeight';
import SizedBoxWidth from '../../../components/Common/SizedBoxWidth';
import TimeSlotsCards from '../../../components/Cards/TimeSlotsCards';
import GoBackClose from '../../../components/Common/GoBackClose';
import FullWidthLoader from '../../../components/Loaders/FullWidthLoader';

import { navigator } from '../../../navigation/navigator';
import { setCurrentCar } from '../../../redux/currentCar/currentCarSlice';
import {
  fsize,
  color,
  fAlign,
  ffamily,
  radius,
  fWeight,
} from '../../../theme/font';
import buttonStyles from '../../../theme/button';

export default ({
  onShowOrderConfirm,
  cleanPlans,
  userCars,
  selectedCar,
  setSelectedPlan,
  selectedPlan,
  userCarLoading,
  cleanPlanLoading,
  selectedCarId,
  timeSlots,
  orderDiscount,
  selectedTimeSlot,
  setSelectedTimeSlot,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const filterCars = userCars.filter(car => car.id === selectedCarId);
  const car = filterCars[0];

  return (
    <SafeAreaView>
      <ScreenHeader
        title="Select Package"
        onClose={() => navigation.goBack()}
        bgColor={color.blueMain}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View>
          <GoBackClose />

          {userCarLoading ? (
            <FullWidthLoader height={152} />
          ) : (
            <CarCard
              carImg={car?.car_model?.Car_Image?.url}
              carModel={car?.car_model?.Model_name}
              carBrand={car?.car_model?.Model_name}
              carNumber={car?.car_number}
              carFule={car?.fuel_type?.Type}
              actions={
                <TouchableOpacity
                  onPress={() => {
                    dispatch(setCurrentCar({ car: car }));
                    navigation.navigate(navigator.editCar);
                  }}
                  style={{
                    backgroundColor: color.blueDark2,
                    ...commonStyles.cardActionPrimary,
                  }}>
                  <Text style={commonStyles.pText}>Edit Car</Text>
                  <RightArrow />
                </TouchableOpacity>
              }
            />
          )}

          <View>
            <Text style={commonStyles.h4Text}>Choose Subscription Pack</Text>

            {cleanPlanLoading ? (
              <View
                style={{
                  marginTop: 15,
                }}>
                <FullWidthLoader height={135} count={3} />
              </View>
            ) : (
              <>
                {orderDiscount.giveDiscount && (
                  <View
                    style={{
                      marginTop: 5,
                      backgroundColor: color.blueLight,
                      borderColor: color.blue,
                      borderWidth: 1,
                      padding: 8,
                      borderRadius: radius.default,
                    }}>
                    <GoText
                      textAlign={fAlign.center}
                      fontSize={fsize.h6}
                      fontFamily={ffamily.semiBold}>
                      Thank you for subscribing your next car, you have been
                      given a discount of Rs.
                      {orderDiscount.totalInteriorDiscount} for pending Interior
                      cleanings and a discount of Rs.
                      {orderDiscount.totalExteriorDiscount} for pending Exterior
                      cleanings
                    </GoText>
                  </View>
                )}

                <View>
                  {cleanPlans.map(item => (
                    <Packages
                      key={item.id}
                      item={item}
                      id={item.id}
                      selectedCar={selectedCar}
                      setSelectedPlan={setSelectedPlan}
                      selectedPlan={selectedPlan}
                      orderDiscount={orderDiscount}
                      giveDiscount={orderDiscount.giveDiscount}
                    />
                  ))}
                </View>

                <SizedBoxHeight />
                <View style={styles.rowStart}>
                  <Text style={commonStyles.h4Text}>Choose Timeslot</Text>
                  <SizedBoxWidth width={7} />
                  <Text style={commonStyles.superSmallText}>
                    {timeSlots.length} time slots available
                  </Text>
                </View>

                <SizedBoxHeight height={16} />

                <TimeSlotsCards
                  timeSlots={timeSlots}
                  selectedTimeSlot={selectedTimeSlot}
                  setSelectedTimeSlot={setSelectedTimeSlot}
                />

                <SizedBoxHeight height={10} />

                <GoButton
                  text="Pay Now"
                  onPress={onShowOrderConfirm}
                  style={buttonStyles.primaryButton}
                  textStyle={buttonStyles.primaryButtonText}
                />
              </>
            )}
          </View>
        </View>

        <SizedBoxHeight height={Platform.OS === 'ios' ? 30 : 56} />
      </ScrollView>
    </SafeAreaView>
  );
};

const Packages = ({
  id,
  item,
  setSelectedPlan,
  selectedPlan,
  orderDiscount,
  giveDiscount,
}) => {
  const { price, plan } = item.attributes;

  let planDetail = plan?.data?.attributes;
  let plan_price = price;

  const totalDiscount =
    orderDiscount.totalInteriorDiscount + orderDiscount.totalExteriorDiscount;

  return (
    <View style={styles.cardWrap}>
      <TouchableOpacity
        style={{
          ...styles.cardItem,
          borderStyle: selectedPlan.id === id ? 'dashed' : 'solid',
        }}
        onPress={() => {
          setSelectedPlan({
            id: id,
            price: plan_price,
          });
        }}>
        <View
          style={{
            backgroundColor: color.backgroundLite,
            paddingHorizontal: 14,
            paddingVertical: 6,
            ...commonStyles.rowACenterJBetween,
          }}>
          <Text style={commonStyles.h5Text}>{planDetail?.Name}</Text>
          <Text style={commonStyles.h5Text}>
            {planDetail?.duration_months} month
          </Text>
        </View>

        <View style={styles.sectionWrapper}>
          <GoText style={styles.section}>
            <GoText style={styles.heading}>
              {planDetail?.exterior_cleaning || 0}
            </GoText>
            {'\n'}
            <GoText style={styles.description}>Exterior</GoText>
          </GoText>
          <View style={styles.line} />
          <GoText style={styles.section}>
            <GoText style={styles.heading}>
              {planDetail?.interior_cleanings || 0}
            </GoText>
            {'\n'}
            <GoText style={styles.description}>Interior</GoText>
          </GoText>
          <View style={styles.line} />

          <GoText style={styles.section}>
            {giveDiscount && (
              <>
                <GoText
                  color={color.black}
                  fontSize={fsize.h6}
                  fontFamily={ffamily.semiBold}
                  textAlign={fAlign.center}
                  textDecorationLine="line-through">
                  ₹{plan_price}
                </GoText>
                <View
                  style={{
                    width: 8,
                  }}
                />
              </>
            )}
            {giveDiscount ? (
              <GoText style={styles.heading}>
                ₹
                {plan_price - totalDiscount > 0
                  ? plan_price - totalDiscount
                  : 1}
              </GoText>
            ) : (
              <GoText style={styles.heading}>₹{plan_price}</GoText>
            )}
            {'\n'}
            <GoText style={styles.description}>per month</GoText>
          </GoText>
        </View>
      </TouchableOpacity>
      <Text style={styles.cardMoreInfo}>More Info</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    ...commonStyles.paddingHorizontal,
    backgroundColor: color.white,
    paddingBottom: 20,
  },
  rowStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardWrap: {
    marginBottom: 8,
  },
  cardMoreInfo: {
    ...commonStyles.pText,
    textAlign: 'right',
    paddingRight: 2,
  },
  cardItem: {
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: color.blue2,
    overflow: 'hidden',
  },
  line: {
    height: 50,
    width: 1,
    backgroundColor: color.blue,
  },
  sectionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  section: {
    flex: 1,
    textAlign: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  heading: {
    color: color.black,
    fontSize: fsize.h2,
    textAlign: fAlign.center,
    fontWeight: fWeight.bold,
  },
  description: {
    color: color.black,
    fontSize: fsize.h6,
    textAlign: fAlign.center,
  },
});
