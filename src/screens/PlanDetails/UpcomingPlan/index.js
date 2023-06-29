import React, { useEffect, useState } from 'react';
import { car_details_by_plan_id } from '../../../apis/cleaningApis';
import UpcomingPlanScreen from './UpcomingPlanScreen';

const UpcomingPlan = ({ route }) => {
  const [upcomingPlanDetails, setUpcomingPlanDetails] = useState();
  const [loading, setLoading] = useState(false);
  const { upcoming_order_id, car_plan_id, car_id } = route.params;

  const getUpcomingPlanDetails = async () => {
    setLoading(true);

    try {
      const response = await car_details_by_plan_id(upcoming_order_id);
      if (response) {
        setUpcomingPlanDetails(response);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUpcomingPlanDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <UpcomingPlanScreen
      upcomingPlanDetails={upcomingPlanDetails}
      loading={loading}
      car_id={car_id}
      car_plan_id={car_plan_id}
      getUpcomingPlanDetails={getUpcomingPlanDetails}
    />
  );
};

export default UpcomingPlan;
