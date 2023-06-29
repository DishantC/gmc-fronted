import React, { useState, useEffect } from 'react';
import {
  CommonActions,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import { Modal } from 'react-native';
import RenewPackageScreen from './RenewPackageScreen';
import { navigator } from '../../../navigation/navigator';
import {
  user_cars,
  cleaning_packages,
  time_slots,
  order_renew_discount,
  cleaning_renew_order,
} from '../../../apis/cleaningApis';
import { razorPay } from '../../../utils/razorpay';
import { showtoast } from '../../../utils/error';
import SubscribeConfirm from '../OrderConfirm';
import { send_tip } from '../../../apis/feedbackApis';

export default ({ route }) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && getUserCars();
  }, [isFocused]);

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
  const [tipAmmount, setTipAmmount] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getUserCars();
    // eslint-disable-next-line
  }, [route.params.isCarAdded]);

  useEffect(() => {
    getCleanPlans();
    // eslint-disable-next-line
  }, [selectedCarTypeId, selectedCarId]);

  useEffect(() => {
    getTimeSlotsOfApartment();
    getUserCars();
    getCleanPlans();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getOrderDiscount();
    // eslint-disable-next-line
  }, [selectedCarId]);

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
      const response = await order_renew_discount(selectedCarId);
      if (response) {
        setOrderDiscount(response);
      }
    } catch (error) {}
  };

  const filterCars = userCars.filter(car => car.id === selectedCarId);
  const cleanerId = filterCars[0]?.cleaner?.id;

  const totalDiscount =
    orderDiscount.totalInteriorDiscount + orderDiscount.totalExteriorDiscount;

  let planPrice = orderDiscount.giveDiscount
    ? Number(selectedPlan?.price) - Number(totalDiscount) + tipAmmount
    : Number(selectedPlan?.price) + tipAmmount;

  const onContinue = async () => {
    try {
      if (!selectedPlan.id) {
        showtoast('Please select plan');
      }
      if (selectedTimeSlot === undefined) {
        showtoast('Please select time slot');
      }

      setPaymentLoading(true);
      let paid_results;
      if (selectedPlan && selectedPlan.price && selectedTimeSlot) {
        paid_results = await razorPay((planPrice > 0 ? planPrice : 1) * 100);
      } else {
        setPaymentLoading(false);
      }
      if (paid_results && paid_results.razorpay_payment_id) {
        try {
          const body = getOrderBody(paid_results.razorpay_payment_id);
          const tipBody = getTipBody(paid_results.razorpay_payment_id);
          const response = await cleaning_renew_order(body);
          if (response) {
            const tipRes = await send_tip(tipBody);
            if (tipRes) {
              setPaymentLoading(false);
              setModalVisible(false);
              navigation.push(navigator.paymentSuccess);
            }
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

  const getOrderBody = payment_id => {
    return {
      razorpay_payment_id: payment_id,
      car_id: selectedCarId,
      planPrice_id: selectedPlan.id,
      plan_price: planPrice > 0 ? planPrice : 1,
      apartment_id: route.params.carApartmentId,
      timeSlot_id: selectedTimeSlot,
      subscriptionDiscountGiven: orderDiscount.giveDiscount || false,
      discountOrders: orderDiscount.discountOrders || [],
    };
  };

  const getTipBody = payment_id => {
    return {
      data: {
        Amount: tipAmmount,
        razorpay_id: payment_id,
        given_by_user: true,
        given_on: new Date(),
        cleaner: cleanerId,
        car: selectedCarId,
      },
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
      <RenewPackageScreen
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
          tipAmmount={tipAmmount}
          setTipAmmount={setTipAmmount}
          showTips
        />
      </Modal>
    </>
  );
};
