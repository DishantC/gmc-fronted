import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Platform,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { car_companies } from '../../apis/addCarApis';
import SizedBoxHeight from '../../components/Common/SizedBoxHeight';
import GoButton from '../../components/GoComponents/GoButton';
import GoImageName from '../../components/GoComponents/GoImageName';
import ImageBoxLoader from '../../components/Loaders/ImageBoxLoader';
import { setCarData } from '../../redux/newCar/newCarSlice';
import buttonStyles from '../../theme/button';
import commonStyles from '../../theme/common';
import { showtoast } from '../../utils/error';

// Gap stuff
const { width } = Dimensions.get('window');
const gap = 12;
const itemPerRow = 3;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width * 0.89;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;

const AddCarCompany = ({ openSelectModelModal }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [carCompanies, setCarCompanies] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);

  const carData = useSelector(state => state.newCar);

  const getCarCompanies = async () => {
    setLoading(true);
    try {
      const response = await car_companies();
      if (response) {
        setCarCompanies(response.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCarCompanies();
  }, []);

  const onContinue = () => {
    if (!selectedModel) {
      return showtoast('Please select your car company');
    } else {
      dispatch(
        setCarData({
          ...carData,
          carCompanyId: selectedModel.id,
          carCompany: selectedModel.attributes.Company_name,
        }),
      );
      openSelectModelModal();
    }
  };

  return (
    <SafeAreaView
      style={{
        ...commonStyles.paddingHorizontal,
        justifyContent: 'space-between',
        marginVertical: 16,
        flex: 1,
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getCarCompanies} />
        }>
        <Text style={{ ...commonStyles.h5Text, textAlign: 'center' }}>
          Car Brands
        </Text>
        <View style={styles.itemsWrap}>
          {loading ? (
            <ImageBoxLoader childWidth={childWidth} count={3} />
          ) : (
            carCompanies.map((item, index) => (
              <GoImageName
                key={index + item.attributes.Company_name}
                onPress={() => setSelectedModel(item)}
                image={{
                  uri: item?.attributes?.brand_logo?.data?.attributes?.url,
                }}
                name={item.attributes.Company_name}
                isSelected={selectedModel && selectedModel.id === item.id}
                itemStyles={styles.singleItem}
              />
            ))
          )}
        </View>
      </ScrollView>

      <GoButton
        text="Confirm"
        onPress={() => onContinue()}
        style={buttonStyles.primaryButton}
        textStyle={buttonStyles.primaryButtonText}
      />
      <SizedBoxHeight height={Platform.OS === 'ios' ? 16 : 5} />
    </SafeAreaView>
  );
};

export default AddCarCompany;

const styles = StyleSheet.create({
  itemsWrap: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 2),
    marginBottom: 20,
    marginTop: 10,
  },
  singleItem: {
    marginTop: 8,
    marginHorizontal: gap / 2,
    minWidth: childWidth,
    maxWidth: childWidth,
  },
});
