import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import EditCarScreen from './EditCarScreen';
import { edit_car, fuel_types } from '../../apis/addCarApis';

import { showtoast } from '../../utils/error';
import { useSelector } from 'react-redux';

const EditCarMain = ({ route }) => {
  const carDetails = useSelector(state => state.currentCar.car);
  const navigation = useNavigation();

  const [carFuelTypeLoading, setCarFuelTypeLoading] = useState(false);
  const [addCarLoading, setAddCarLoading] = useState(false);
  const [carFuelTypes, setCarFuelTypes] = useState([]);
  const [carNumber, setCarNumber] = useState(carDetails.car_number);
  const [selectedFuelType, setSelectedFuelType] = useState(
    carDetails.fuel_type,
  );

  useEffect(() => {
    getCarFuelType();
    // eslint-disable-next-line
  }, []);

  const getCarFuelType = async () => {
    setCarFuelTypeLoading(true);
    try {
      const response = await fuel_types();
      if (response) {
        setCarFuelTypes(response.data);
      }
      setCarFuelTypeLoading(false);
    } catch (error) {
      setCarFuelTypeLoading(false);
    }
  };

  const onContinue = async () => {
    setAddCarLoading(true);
    const body = {
      data: {
        fuel_type: selectedFuelType.id,
        car_number: carNumber,
      },
    };
    const response = await edit_car(carDetails.id, body);

    if (response) {
      showtoast('Car updated successfully');
      navigation.goBack();
      setAddCarLoading(false);
    }
  };

  return (
    <EditCarScreen
      carDetails={carDetails}
      carFuelTypeLoading={carFuelTypeLoading}
      addCarLoading={addCarLoading}
      carFuelTypes={carFuelTypes}
      selectedFuelType={selectedFuelType}
      setSelectedFuelType={setSelectedFuelType}
      carNumber={carNumber}
      setCarNumber={setCarNumber}
      onContinue={onContinue}
    />
  );
};

export default EditCarMain;
