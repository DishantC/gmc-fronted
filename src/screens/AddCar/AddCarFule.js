import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fuel_types } from '../../apis/addCarApis';
import SizedBoxHeight from '../../components/Common/SizedBoxHeight';
import SizedBoxWidth from '../../components/Common/SizedBoxWidth';
import GoButton from '../../components/GoComponents/GoButton';
import GoImageName from '../../components/GoComponents/GoImageName';
import { setCarData } from '../../redux/newCar/newCarSlice';
import buttonStyles from '../../theme/button';
import commonStyles from '../../theme/common';
import { color, fsize } from '../../theme/font';
import { showtoast } from '../../utils/error';

// Gap stuff
const { width } = Dimensions.get('window');
const gap = 12;
const itemPerRow = 3;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width * 0.89;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;

const AddCarFule = ({ openSelecAppartmentModal }) => {
  const dispatch = useDispatch();
  const carData = useSelector(state => state.newCar);

  const [loading, setLoading] = useState(false);
  const [carFuelTypes, setCarFuelTypes] = useState([]);
  const [selectedFuelType, setSelectedFuelType] = useState(null);
  const [transmission, setTransmission] = useState(null);

  useEffect(() => {
    getCarFuelType();
    // eslint-disable-next-line
  }, []);

  const getCarFuelType = async () => {
    setLoading(true);
    try {
      const response = await fuel_types();
      if (response) {
        setCarFuelTypes(response.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const onContinue = () => {
    if (!selectedFuelType) {
      showtoast('Please select your car fuel type');
      return;
    }
    if (!transmission) {
      showtoast('Please select your car transmission');
      return;
    }

    dispatch(
      setCarData({
        ...carData,
        carFuel: selectedFuelType.id,
        transmission,
      }),
    );
    openSelecAppartmentModal();
  };

  return (
    <SafeAreaView
      style={{
        justifyContent: 'space-between',
        marginVertical: 16,
        flex: 1,
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getCarFuelType} />
        }>
        <View style={styles.itemsWrap}>
          {carFuelTypes.map((item, index) => (
            <GoImageName
              key={index}
              onPress={() => setSelectedFuelType(item)}
              image={{ uri: item.attributes?.image?.data?.attributes?.url }}
              name={item.attributes.Type}
              fontSize={fsize.h6}
              borderRadius={0}
              isSelected={(selectedFuelType && selectedFuelType.id) === item.id}
              itemStyles={styles.singleItem}
            />
          ))}
        </View>
        {!loading && (
          <View style={commonStyles.paddingHorizontal}>
            <Text style={commonStyles.h5Text}>Select Transmission</Text>
            <SizedBoxHeight height={10} />
            <View style={commonStyles.rowACenterJBetween}>
              <TouchableOpacity
                style={styles.transmissionItem}
                onPress={() => setTransmission('manual')}>
                <View
                  style={{
                    ...styles.circleButton,
                    backgroundColor:
                      transmission === 'manual' ? color.blue3 : color.white,
                  }}
                />
                <Text style={commonStyles.h5Text}>Manual</Text>
              </TouchableOpacity>
              <SizedBoxWidth width={12} />
              <TouchableOpacity
                style={styles.transmissionItem}
                onPress={() => setTransmission('automatic')}>
                <View
                  style={{
                    ...styles.circleButton,
                    backgroundColor:
                      transmission === 'automatic' ? color.blue3 : color.white,
                  }}
                />
                <Text style={commonStyles.h5Text}>Automatic</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>

      <View style={commonStyles.paddingHorizontal}>
        <GoButton
          text="Confirm"
          onPress={() => onContinue()}
          style={buttonStyles.primaryButton}
          textStyle={buttonStyles.primaryButtonText}
        />
      </View>
      <SizedBoxHeight height={Platform.OS === 'ios' ? 16 : 5} />
    </SafeAreaView>
  );
};

export default AddCarFule;

const styles = StyleSheet.create({
  itemsWrap: {
    ...commonStyles.paddingHorizontal,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 2),
    marginBottom: 16,
  },
  singleItem: {
    marginTop: 8,
    marginHorizontal: gap / 2,
    minWidth: childWidth,
    maxWidth: childWidth,
  },
  transmissionItem: {
    flex: 1,
    borderWidth: 1,
    borderColor: color.blue3,
    borderRadius: 5,
    paddingVertical: 9,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleButton: {
    height: 16,
    width: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: color.blue3,
    marginRight: 8,
  },
});
