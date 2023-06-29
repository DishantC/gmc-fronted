import React, { useEffect, useState } from 'react';
import { car_details_by_plan_id } from '../../../apis/cleaningApis';

import CurrentPlanDetailsScreen from './CurrentPlanDetailsScreen';

const CurrentPlanDetails = ({ route }) => {
  const [carHistoryDetails, setCarHistoryDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const { car_plan_id, car_id } = route.params;

  const getCarDetails = async () => {
    setLoading(true);

    try {
      const response = await car_details_by_plan_id(car_plan_id);
      if (response) {
        setCarHistoryDetails(response);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCarDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <CurrentPlanDetailsScreen
      carHistoryDetails={carHistoryDetails}
      loading={loading}
      car_id={car_id}
      car_plan_id={car_plan_id}
      getCarDetails={getCarDetails}
    />
  );
};

export default CurrentPlanDetails;
