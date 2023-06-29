import React, { useState, useEffect } from 'react';
import { Modal } from 'react-native';
import { useSelector } from 'react-redux';
import {
  CommonActions,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';

import SubscribePackageScreen from './SubscribePackageScreen';
import SubscribeConfirm from '../OrderConfirm';

import { navigator } from '../../../navigation/navigator';
import selector from '../../../redux/selector';
import {
  user_cars,
  cleaning_packages,
  time_slots,
  cleaning_order,
  order_discount,
} from '../../../apis/cleaningApis';
import { razorPay } from '../../../utils/razorpay';
import { showtoast } from '../../../utils/error';

export default ({ route }) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && getUserCars();
  }, [isFocused]);

  const user_id = useSelector(selector.userId);
  const navigation = useNavigation();

  const [userCarLoading, setUserCarsLoading] = useState(false);
  const [cleanPlanLoading, setCleanPlanLoading] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const [userCars, setUserCars] = useState([]);
  const [cleanPlans, setCleanPlans] = useState([]);
  const [selectedCar, setSelectedCar] = useState({});
  const [selectedCarTypeId, setSelectedCarTypeId] = useState(
    route.params?.car_type,
  );
  const [selectedCarId, setSelectedCarId] = useState(route.params?.car_index);

  const [selectedPlan, setSelectedPlan] = useState({});
  const [orderDiscount, setOrderDiscount] = useState({});
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getUserCars();
    // eslint-disable-next-line
  }, [route.params.isCarAdded]);

  useEffect(() => {
    getCleanPlans();
    getOrderDiscount();
    // eslint-disable-next-line
  }, [selectedCarTypeId, selectedCarId]);

  useEffect(() => {
    getUserCars();
    getCleanPlans();
    getTimeSlotsOfApartment();
    // eslint-disable-next-line
  }, []);

  const getUserCars = async () => {
    setUserCarsLoading(true);
    try {
      const response = await user_cars();
      if (response) {
        setUserCars(response.cars);
      }
      setUserCarsLoading(false);
    } catch (error) {
      setUserCarsLoading(false);
    }
  };

  const getCleanPlans = async () => {
    setCleanPlanLoading(true);
    try {
      const response = await cleaning_packages(
        route.params.carApartmentId,
        selectedCarTypeId,
      );
      if (response) {
        setCleanPlans(response.data);
      }
      setCleanPlanLoading(false);
    } catch (error) {
      setCleanPlanLoading(false);
    }
  };

  const getTimeSlotsOfApartment = async () => {
    try {
      const response = await time_slots(route.params.carApartmentId);
      if (response) {
        setTimeSlots(response.data.attributes.time_slot.data);
      }
    } catch (error) {}
  };

  const getOrderDiscount = async () => {
    try {
      const response = await order_discount(user_id, selectedCarId);
      if (response) {
        setOrderDiscount(response);
      }
    } catch (error) {}
  };

  const totalDiscount = orderDiscount?.subsequentCarDiscount;

  let planPrice = orderDiscount.giveDiscount
    ? selectedPlan?.price - totalDiscount
    : selectedPlan?.price;

  const onContinue = async () => {
    try {
      setPaymentLoading(true);
      let paid_results;
      if (selectedPlan && selectedPlan.price && selectedTimeSlot) {
        paid_results = await razorPay((planPrice > 0 ? planPrice : 1) * 100);
      } else {
        setPaymentLoading(false);
      }
      if (paid_results && paid_results.razorpay_payment_id) {
        try {
          const body = genOrderBody(paid_results.razorpay_payment_id);

          const response = await cleaning_order(body);
          if (response) {
            setPaymentLoading(false);
            setModalVisible(false);
            navigation.push(navigator.paymentSuccess);
          }
        } catch (error) {
          setPaymentLoading(false);
        }
      } else {
        setPaymentLoading(false);
      }
    } catch (e) {
      setPaymentLoading(false);
      if (e && e.description) {
        if (e.reason === 'payment_cancelled') {
          navigation.dispatch(CommonActions.goBack());
        }
      }
    }
  };

  const genOrderBody = payment_id => {
    return {
      razorpay_payment_id: payment_id,
      car_id: selectedCarId,
      planPrice_id: selectedPlan.id,
      plan_price: planPrice > 0 ? planPrice : 1,
      apartment_id: route.params.carApartmentId,
      timeSlot_id: selectedTimeSlot,
      subscriptionDiscountGiven: orderDiscount.giveDiscount,
      subsequentCarDiscount: orderDiscount.subsequentCarDiscount,
    };
  };

  const onCarAddPress = () => {
    navigation.navigate(navigator.selectCompany);
  };

  const onShowOrderConfirm = () => {
    if (!selectedPlan.id || selectedTimeSlot === undefined) {
      if (!selectedPlan.id) {
        showtoast('Please select plan');
      }
      if (selectedTimeSlot === undefined) {
        showtoast('Please select time slot');
      }
    } else {
      setModalVisible(true);
    }
  };

  return (
    <>
      <SubscribePackageScreen
        onShowOrderConfirm={onShowOrderConfirm}
        userCars={userCars}
        cleanPlans={cleanPlans}
        setSelectedCar={setSelectedCar}
        selectedCar={selectedCar}
        setSelectedPlan={setSelectedPlan}
        selectedPlan={selectedPlan}
        userCarLoading={userCarLoading}
        cleanPlanLoading={cleanPlanLoading}
        onCarAddPress={onCarAddPress}
        orderDiscount={orderDiscount}
        selectedCarTypeId={selectedCarTypeId}
        setSelectedCarTypeId={setSelectedCarTypeId}
        selectedCarId={selectedCarId}
        setSelectedCarId={setSelectedCarId}
        timeSlots={timeSlots}
        selectedTimeSlot={selectedTimeSlot}
        setSelectedTimeSlot={setSelectedTimeSlot}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <SubscribeConfirm
          onContinue={onContinue}
          userCars={userCars}
          selectedCarId={selectedCarId}
          cleanPlans={cleanPlans}
          selectedPlan={selectedPlan}
          orderDiscount={orderDiscount}
          timeSlots={timeSlots}
          selectedTimeSlot={selectedTimeSlot}
          paymentLoading={paymentLoading}
          setModalVisible={setModalVisible}
          totalDiscount={totalDiscount}
        />
      </Modal>
    </>
  );
};
