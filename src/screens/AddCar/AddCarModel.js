import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Platform,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import SizedBoxHeight from '../../components/Common/SizedBoxHeight';
import GoButton from '../../components/GoComponents/GoButton';
import GoImageName from '../../components/GoComponents/GoImageName';
import ImageBoxLoader from '../../components/Loaders/ImageBoxLoader';
import commonStyles from '../../theme/common';

import { showtoast } from '../../utils/error';
import { car_models } from '../../apis/addCarApis';
import { setCarData } from '../../redux/newCar/newCarSlice';
import buttonStyles from '../../theme/button';

// Gap stuff
const { width } = Dimensions.get('window');
const gap = 12;
const itemPerRow = 3;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width * 0.89;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;

const AddCarModel = ({ openSelectFuelModal }) => {
  const dispatch = useDispatch();

  const carData = useSelector(state => state.newCar);

  const [loading, setLoading] = useState(false);
  const [carModels, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);

  const carCompany = useSelector(state => state.newCar.carCompany);

  useEffect(() => {
    getCarModels();
    // eslint-disable-next-line
  }, []);

  const getCarModels = async () => {
    setLoading(true);
    try {
      const response = await car_models(carCompany);
      if (response) {
        setModels(response.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const onContinue = () => {
    if (!selectedModel) {
      return showtoast('Please select your car model');
    } else {
      dispatch(
        setCarData({
          ...carData,
          carType: selectedModel.attributes.car_type?.data?.attributes,
          carModel: selectedModel.id,
        }),
      );
      // dismissAllBottomSheets();
      openSelectFuelModal();
    }
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
          <RefreshControl refreshing={loading} onRefresh={getCarModels} />
        }>
        <View style={styles.itemsWrap}>
          {loading ? (
            <ImageBoxLoader childWidth={childWidth} count={3} />
          ) : (
            carModels.map((item, index) => (
              <GoImageName
                key={index}
                onPress={() => setSelectedModel(item)}
                image={{
                  uri: item.attributes?.Car_Image?.data?.attributes?.url,
                }}
                name={item.attributes.Model_name}
                isSelected={(selectedModel && selectedModel.id) === item.id}
                itemStyles={styles.singleItem}
              />
            ))
          )}
        </View>
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

export default AddCarModel;

const styles = StyleSheet.create({
  itemsWrap: {
    ...commonStyles.paddingHorizontal,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 2),
    marginBottom: 20,
  },
  singleItem: {
    marginTop: 8,
    marginHorizontal: gap / 2,
    minWidth: childWidth,
    maxWidth: childWidth,
  },
});
