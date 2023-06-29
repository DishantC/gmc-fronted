import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';

import { color, ffamily, fsize, fWeight } from '../../theme/font';
import { navigator } from '../../navigation/navigator';
import { delete_car } from '../../apis/userCarsApis';
import selector from '../../redux/selector';
import CarCardTop from './CarCardTop';
import commonStyles from '../../theme/common';
import RedCloseCircle from '../../assets/icons/RedCloseCircle';
import { showtoast } from '../../utils/error';
import { setCurrentCar } from '../../redux/currentCar/currentCarSlice';
import { check_demo_available } from '../../apis/cleaningApis';

const CarCardAction = ({ item, index, loadUserCars }) => {
  const { dismissAll } = useBottomSheetModal();
  const dismissAllBottomSheets = () => {
    dismissAll();
  };
  const userId = useSelector(selector.userId);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [demoAvailable, setDemoAvailable] = useState(null);

  useEffect(() => {
    checkIfDemoAvailable();
    // eslint-disable-next-line
  }, []);

  const checkIfDemoAvailable = async () => {
    try {
      const response = await check_demo_available(item?.apartment?.id, userId);
      setDemoAvailable(response);
    } catch (error) {}
  };

  const currentPackageDetails = item.current_order;

  const dateToday = dayjs().format('YYYY-MM-DD');
  const packExpireyDate = dayjs(currentPackageDetails?.to_date);

  const getDiffForRenew = packExpireyDate.diff(dateToday, 'day');

  const findUpcomingOrders = item?.orders?.filter(order =>
    dayjs().isBefore(dayjs(order?.from_date)),
  );

  const excludeCurrenPlan = findUpcomingOrders?.filter(
    order => order.id !== currentPackageDetails?.id,
  );

  const sortUpcomingOrdersById = excludeCurrenPlan?.sort((a, b) => {
    return a.id - b.id;
  });

  const sortedOrders = item?.orders?.sort((a, b) => {
    return a.id - b.id;
  });

  const orderIds = sortedOrders?.map(object => {
    return object.id;
  });

  const max = Math.max(...orderIds);
  const findKLargestOrderItem = sortedOrders.find(
    orderObj => orderObj.id === max,
  );

  const packExpireyDateOrder = dayjs(findKLargestOrderItem?.to_date);
  const getDiffForRenewOrder = packExpireyDateOrder.diff(dateToday, 'day');

  const navigateToUpcomingPlans = () => {
    dismissAllBottomSheets();
    dispatch(setCurrentCar({ car: item }));
    navigation.navigate(navigator.upcomingPlans, {
      upcoming_order_id: sortUpcomingOrdersById[0].id,
      car_plan_id: currentPackageDetails?.id,
      car_id: item.id,
    });
  };

  const navigateCurrentPlanDetails = () => {
    if (currentPackageDetails && getDiffForRenew >= 0) {
      dismissAllBottomSheets();
      dispatch(setCurrentCar({ car: item }));
      navigation.navigate(navigator.currentPlan, {
        car_plan_id: currentPackageDetails?.id,
        car_id: item.id,
      });
    }
  };

  const navigateToSubscribePackage = async () => {
    try {
      if (userId) {
        dismissAllBottomSheets();
        navigation.navigate(navigator.subscribePackage, {
          isCarAdded: '',
          selectedIndex: index,
          car_index: item?.id,
          car_type: item?.car_model?.car_type?.id,
          carApartmentId: item?.apartment?.id,
        });
      }
    } catch (error) {}
  };

  const navigateToRenewPackage = () => {
    try {
      if (userId) {
        dismissAllBottomSheets();
        navigation.navigate(navigator.renewPackage, {
          isCarAdded: '',
          selectedIndex: index,
          car_index: item?.id,
          car_type: item?.car_model?.car_type?.id,
          carApartmentId: item?.apartment?.id,
        });
      }
    } catch (error) {}
  };

  const navigateToDemoOrder = async () => {
    try {
      if (userId) {
        dismissAllBottomSheets();
        dispatch(setCurrentCar({ car: item }));
        navigation.navigate(navigator.demoOrder, {
          demo_data: demoAvailable,
        });
      }
    } catch (error) {}
  };

  const navigateToCleaningBlanace = async () => {
    dismissAllBottomSheets();
    dispatch(setCurrentCar({ car: item }));
    navigation.navigate(navigator.cleaningRecord);
  };

  const deleteCar = async id => {
    try {
      const res = await delete_car(id);
      if (res) {
        showtoast('Car deleted successfully');
        loadUserCars();
      }
    } catch (error) {}
  };

  const PackageDetails = () => {
    return (
      <View
        style={{ ...commonStyles.rowACenterJBetween, paddingHorizontal: 14 }}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.bold, { color: color.blue }]}>
            Active Package
          </Text>
          <Text
            style={{
              fontFamily: ffamily.semiBold,
              color: color.blue,
              marginBottom: 5,
            }}>
            {currentPackageDetails?.plan_price?.plan?.Name}
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={{ fontFamily: ffamily.regular }}>
            Internal Cleaning:{' '}
            {currentPackageDetails?.plan_price?.plan?.interior_cleanings || 0}
          </Text>
          <Text style={{ fontFamily: ffamily.regular }}>
            External Cleaning:{' '}
            {currentPackageDetails?.plan_price?.plan?.exterior_cleaning || 0}
          </Text>
        </View>
      </View>
    );
  };

  const PackageStatus = () => {
    return (
      <View>
        {currentPackageDetails && (
          <Text style={{ color: color.blue }}>Active Package</Text>
        )}
        {!currentPackageDetails &&
          !sortUpcomingOrdersById.length > 0 &&
          !item.orders.length > 0 && (
            <Text style={{ color: color.red }}>No Subscription</Text>
          )}
      </View>
    );
  };

  return (
    <TouchableOpacity
      style={styles.cardWrap}
      disabled={!currentPackageDetails || currentPackageDetails?.error}
      activeOpacity={0.8}>
      {!currentPackageDetails &&
        !sortUpcomingOrdersById.length > 0 &&
        !item.orders.length > 0 &&
        currentPackageDetails === null && (
          <TouchableOpacity
            style={styles.deleteIcon}
            onPress={() => deleteCar(item.id)}>
            <RedCloseCircle />
          </TouchableOpacity>
        )}

      <TouchableOpacity
        onPress={() => {
          dismissAllBottomSheets();
          dispatch(setCurrentCar({ car: item }));
          navigation.navigate(navigator.editCar);
        }}
        style={styles.cardtop}>
        <CarCardTop
          carImg={item?.car_model?.Car_Image?.url}
          carModel={item?.car_model?.Model_name}
          carBrand={item?.car_model?.Model_name}
          carNumber={item?.car_number}
          carFule={item.fuel_type.Type}
          additionalInfo={<PackageStatus />}
        />
      </TouchableOpacity>

      {currentPackageDetails && <PackageDetails />}

      <View style={styles.cardBottom}>
        {currentPackageDetails ? (
          <View style={styles.cardActionRow}>
            {getDiffForRenew >= 0 && (
              <TouchableOpacity
                style={styles.button}
                onPress={navigateCurrentPlanDetails}>
                <Text style={styles.buttonTxt}>Current Plan</Text>
              </TouchableOpacity>
            )}

            {getDiffForRenew <= 10 &&
              sortUpcomingOrdersById &&
              sortUpcomingOrdersById.length > 0 && (
                <>
                  <View style={styles.borderBlack} />
                  <TouchableOpacity
                    style={styles.button}
                    onPress={navigateToUpcomingPlans}>
                    <Text style={styles.buttonTxt}>Upcoming Plan</Text>
                  </TouchableOpacity>
                </>
              )}

            {getDiffForRenewOrder <= 10 &&
              sortUpcomingOrdersById.length === 0 && (
                <>
                  <View style={styles.borderBlack} />
                  <TouchableOpacity
                    style={styles.button}
                    onPress={navigateToRenewPackage}>
                    <Text style={styles.buttonTxt}>Renew Package</Text>
                  </TouchableOpacity>
                </>
              )}
          </View>
        ) : sortUpcomingOrdersById.length > 0 ? (
          <View style={styles.cardActionRow}>
            <TouchableOpacity
              style={styles.button}
              onPress={navigateToUpcomingPlans}>
              <Text style={styles.buttonTxt}>Upcoming Plan</Text>
            </TouchableOpacity>
            <View style={styles.borderBlack} />
            <TouchableOpacity
              style={styles.button}
              onPress={navigateToCleaningBlanace}>
              <Text style={styles.buttonTxt}>Cleaning Balance</Text>
            </TouchableOpacity>
          </View>
        ) : item.orders.length > 0 ? (
          <View style={styles.cardActionRow}>
            <TouchableOpacity
              style={styles.button}
              onPress={navigateToRenewPackage}>
              <Text style={styles.buttonTxt}>Renew Package</Text>
            </TouchableOpacity>
            <View style={styles.borderBlack} />
            <TouchableOpacity
              style={styles.button}
              onPress={navigateToCleaningBlanace}>
              <Text style={styles.buttonTxt}>Cleaning Balance</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.cardActionRow}>
            <TouchableOpacity
              style={styles.button}
              onPress={navigateToSubscribePackage}>
              <Text style={styles.buttonTxt}>Subscribe Package</Text>
            </TouchableOpacity>
            {demoAvailable && (
              <>
                <View style={styles.borderBlack} />
                <TouchableOpacity
                  style={styles.button}
                  onPress={navigateToDemoOrder}>
                  <Text style={styles.buttonTxt}>Book a free demo</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CarCardAction;

const styles = StyleSheet.create({
  cardWrap: {
    borderWidth: 0.5,
    borderColor: color.blue,
    minHeight: 140,
    backgroundColor: color.white,
    marginVertical: 8,
    borderRadius: 8,
    paddingTop: 3,
    marginHorizontal: 2,
    shadowColor: '#888',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 0.1,
    overflow: 'hidden',
  },
  cardImage: {
    height: 80,
    width: 120,
  },
  bold: {
    fontSize: fsize.h6,
    fontFamily: ffamily.bold,
    fontWeight: fWeight[700],
  },
  centerItems: {
    paddingLeft: 8,
    paddingVertical: 8,
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  cardtop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  cardBottom: {
    backgroundColor: color.blueBgLight,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 8,
    marginTop: 10,
  },
  cardActionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {},
  buttonTxt: {
    fontSize: fsize.mh6,
    color: color.black,
    fontWeight: fWeight.semiBold,
  },
  borderBlack: {
    width: 2,
    height: 14,
    marginHorizontal: 6,
    backgroundColor: color.black,
  },
  deleteIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1,
  },
});
