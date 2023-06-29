import React from 'react';
import SubscribeConfirmScreen from './OrderConfirmScreen';

const SubscribeConfirm = ({
  onContinue,
  selectedCarId,
  userCars,
  selectedPlan,
  cleanPlans,
  orderDiscount,
  timeSlots,
  selectedTimeSlot,
  paymentLoading,
  setModalVisible,
  totalDiscount,
  tipAmmount,
  setTipAmmount,
  showTips,
}) => {
  const confirmCleanPlan = cleanPlans.find(plan => plan.id === selectedPlan.id);
  const confirmTimeSlot = timeSlots.find(
    timeSlot => timeSlot.id === selectedTimeSlot,
  );
  const getCarDetails = userCars.find(car => car.id === selectedCarId);

  return (
    <SubscribeConfirmScreen
      onContinue={onContinue}
      confirmCleanPlan={confirmCleanPlan}
      orderDiscount={orderDiscount}
      confirmTimeSlot={confirmTimeSlot}
      getCarDetails={getCarDetails}
      paymentLoading={paymentLoading}
      setModalVisible={setModalVisible}
      totalDiscount={totalDiscount}
      tipAmmount={tipAmmount}
      setTipAmmount={setTipAmmount}
      showTips={showTips}
    />
  );
};

export default SubscribeConfirm;
