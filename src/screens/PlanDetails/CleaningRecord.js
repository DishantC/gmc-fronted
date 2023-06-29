import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

import RightArrow from '../../assets/icons/RightArrow';
import CarCard from '../../components/Cards/CarCard';
import CleaningBalance from '../../components/Car/CleaningBalance';
import ScreenHeader from '../../components/Common/ScreenHeader';
import color from '../../theme/color';
import commonStyles from '../../theme/common';
import SizedBoxHeight from '../../components/Common/SizedBoxHeight';
import FullWidthLoader from '../../components/Loaders/FullWidthLoader';

import { user_car_cleaning_history_details } from '../../apis/cleaningApis';

const CleaningRecord = () => {
  const navigation = useNavigation();
  const [carPlanHistoryDetails, setCarPlanHistoryDetails] = useState();
  const [loading, setLoading] = useState(false);

  const item = useSelector(state => state.currentCar.car);

  const getCarCleaningBalance = async () => {
    setLoading(true);
    try {
      const response = await user_car_cleaning_history_details(item.id);
      if (response) {
        setCarPlanHistoryDetails(response);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCarCleaningBalance();
    // eslint-disable-next-line
  }, []);

  const PackageStatus = () => {
    return (
      <View>
        <Text style={{ color: color.blue }}>Active Package</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScreenHeader
        title="Cleaning Record"
        onClose={() => navigation.goBack()}
        bgColor={color.blueMain}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainWrap}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={getCarCleaningBalance}
          />
        }>
        {loading ? (
          <View>
            <FullWidthLoader height={161.09} marginBottom={16} />
            <FullWidthLoader height={10} marginBottom={16} />
          </View>
        ) : (
          <>
            <CarCard
              carImg={item?.car_model?.Car_Image?.url}
              carModel={item?.car_model?.Model_name}
              carBrand={item?.car_model?.Model_name}
              carNumber={item?.car_number}
              carFule={item.fuel_type.Type}
              additionalInfo={<PackageStatus />}
              actions={
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 10,
                    paddingHorizontal: 12,
                    paddingVertical: 10,
                    backgroundColor: color.btnLight,
                  }}>
                  <Text style={commonStyles.pText}>Manage Package</Text>
                  <RightArrow />
                </TouchableOpacity>
              }
            />
            <CleaningBalance
              carPlanHistoryDetails={carPlanHistoryDetails}
              car_plan_id={item?.current_order?.id}
            />
            <SizedBoxHeight height={90} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CleaningRecord;

const styles = StyleSheet.create({
  mainWrap: {
    ...commonStyles.paddingHorizontal,
    paddingVertical: 20,
  },
});
