import {
  BottomSheetTextInput,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { useDispatch, useSelector } from 'react-redux';

import color from '../../theme/color';
import commonStyles from '../../theme/common';
import SizedBoxHeight from '../Common/SizedBoxHeight';
import GoButtonLoader from '../GoComponents/GoButtonLoader';

import { add_car } from '../../apis/addCarApis';
import { get_apartments } from '../../apis/appartmentApis';
import { add_car_to_user, user_cars } from '../../apis/userCarsApis';
import { reset } from '../../redux/newCar/newCarSlice';
import { fsize, fWeight } from '../../theme/font';
import { showtoast } from '../../utils/error';
import buttonStyles from '../../theme/button';

const AppartmentAdd = () => {
  const { dismissAll } = useBottomSheetModal();
  const dismissAllBottomSheets = () => {
    dismissAll();
  };

  const dispatch = useDispatch();

  const carNumber = useSelector(state => state.newCar.carNumber);
  const carModel = useSelector(state => state.newCar.carModel);
  const carFuelType = useSelector(state => state.newCar.carFuel);
  const transmission = useSelector(state => state.newCar.transmission);

  // eslint-disable-next-line no-unused-vars
  const [searchText, setSearchText] = useState('');
  const [allApartments, setAllApartments] = useState([]);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [flatNumber, setFlatNumber] = useState('');
  const [garageNumber, setGarageNumber] = useState('');
  const [wingNumber, setWingNumber] = useState('');
  const [createLoading, setCreateLoading] = useState(false);

  const getApartments = async () => {
    try {
      const { data } = await get_apartments();
      setAllApartments(data);
    } catch (error) {}
  };

  useEffect(() => {
    getApartments();
  }, []);

  let formatApartments = allApartments.map(apartment => {
    return {
      id: apartment.id,
      name: apartment.attributes.Name,
    };
  });

  const onContinue = async () => {
    if (!selectedApartment) {
      showtoast('Please select an apartment');
      return;
    }
    if (flatNumber === '') {
      showtoast('Please enter flat number');
      return;
    }
    if (garageNumber === '') {
      showtoast('Please enter garage number');
      return;
    }
    if (wingNumber === '') {
      showtoast('Please enter wing number');
      return;
    }

    try {
      setCreateLoading(true);

      const carBody = {
        data: {
          car_number: carNumber,
          car_model: carModel,
          fuel_type: carFuelType,
          apartment: selectedApartment.id,
          flat_number: flatNumber,
          garage_number: garageNumber,
          wing: wingNumber,
          transmission: transmission,
        },
      };

      const carResponse = await add_car(carBody);

      if (carResponse) {
        const userCars = await user_cars();
        const userCarIds = userCars.cars.map(car => car.id);
        const carId = carResponse.data.id;

        const body = {
          cars: [...userCarIds, carId],
        };

        const addCarRes = add_car_to_user(body);

        if (addCarRes) {
          dismissAllBottomSheets();
          showtoast('Car added successfully');
          setCreateLoading(false);
          dispatch(reset());
          selectedApartment(null);
          setFlatNumber('');
          setGarageNumber('');
          setWingNumber('');
        }
      }
    } catch (error) {
      setCreateLoading(false);
    }
  };

  return (
    <View style={styles.scrollview}>
      <View>
        <SizedBoxHeight height={10} />
        <Text style={styles.labelText}>Select Appartment</Text>
        <SizedBoxHeight height={5} />
        <SearchableDropdown
          items={formatApartments}
          onTextChange={text => setSearchText(text)}
          onItemSelect={item => setSelectedApartment(item)}
          itemStyle={{
            padding: 10,
            backgroundColor: color.white,
            borderColor: color.blue,
            borderWidth: 1,
          }}
          itemTextStyle={{
            color: color.black,
            fontSize: fsize.h5,
          }}
          itemsContainerStyle={{
            maxHeight: 300,
          }}
          textInputProps={{
            placeholder: selectedApartment
              ? selectedApartment.name
              : 'Select Apartment',
            style: {
              ...commonStyles.primaryInput,
            },
            // eslint-disable-next-line
            onTextChange: text => alert(text),
          }}
          placeholderTextColor={color.black}
          resetValue={false}
        />
        <SizedBoxHeight height={10} />
        <Text style={styles.labelText}>Flat Number</Text>
        <SizedBoxHeight height={5} />
        <BottomSheetTextInput
          style={commonStyles.primaryInput}
          keyboardType="default"
          value={flatNumber}
          onChangeText={value => setFlatNumber(value)}
          autoCapitalize="characters"
          placeholder="Flat Number"
          placeholderTextColor={color.black}
        />
        <SizedBoxHeight height={10} />
        <Text style={styles.labelText}>Garage Number</Text>
        <SizedBoxHeight height={5} />
        <BottomSheetTextInput
          style={commonStyles.primaryInput}
          keyboardType="default"
          value={garageNumber}
          onChangeText={value => setGarageNumber(value)}
          autoCapitalize="characters"
          placeholder="Garage Number"
          placeholderTextColor={color.black}
        />
        <SizedBoxHeight height={10} />
        <Text style={styles.labelText}>Wing Number</Text>
        <SizedBoxHeight height={5} />
        <BottomSheetTextInput
          style={commonStyles.primaryInput}
          keyboardType="default"
          value={wingNumber}
          onChangeText={value => setWingNumber(value)}
          autoCapitalize="characters"
          placeholder="Wing Number"
          placeholderTextColor={color.black}
        />
      </View>
      <SizedBoxHeight />
      <GoButtonLoader
        text="Add Car"
        onPress={onContinue}
        style={buttonStyles.primaryButton}
        textStyle={buttonStyles.primaryButtonText}
        loading={createLoading}
      />
    </View>
  );
};

export default AppartmentAdd;

const styles = StyleSheet.create({
  scrollview: {
    flexGrow: 1,
  },
  labelText: {
    color: color.black,
    fontSize: fsize.h6,
    fontWeight: fWeight.semiBold,
  },
});
