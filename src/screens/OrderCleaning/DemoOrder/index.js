import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import DemoOrderScreen from './DemoOrderScreen';
import selector from '../../../redux/selector';
import { navigator } from '../../../navigation/navigator';
import { cleaning_order, mark_demo_done } from '../../../apis/cleaningApis';
import { showtoast } from '../../../utils/error';

const DemoOrder = ({ route }) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState();

  const { demo_data } = route.params;
  const car = useSelector(state => state.currentCar.car);

  const navigation = useNavigation();
  const userId = useSelector(selector.userId);

  const onContinue = async () => {
    if (!selectedTimeSlot) {
      showtoast('Please select a time slot');
      return;
    }
    try {
      const orderBody = {
        razorpay_payment_id: 'demo_plan',
        car_id: car.id,
        planPrice_id: demo_data?.demo_plan_price?.id,
        plan_price: demo_data?.demo_plan_price?.price,
        apartment_id: car.apartment.id,
        timeSlot_id: selectedTimeSlot,
      };

      const orderResponse = await cleaning_order(orderBody);

      if (orderResponse) {
        const demo_response = await mark_demo_done(userId);

        if (demo_response) {
          showtoast('Demo order placed successfully');
          navigation.navigate(navigator.userCarList, {
            reload: `${Math.random() * 100000}`,
          });
        }
      }
    } catch (error) {}
  };

  return (
    <DemoOrderScreen
      car={car}
      demoData={demo_data}
      onContinue={onContinue}
      selectedTimeSlot={selectedTimeSlot}
      setSelectedTimeSlot={setSelectedTimeSlot}
    />
  );
};

export default DemoOrder;
