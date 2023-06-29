import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

import CarCard from '../../../components/Cards/CarCard';
import ScreenHeader from '../../../components/Common/ScreenHeader';
import SizedBoxHeight from '../../../components/Common/SizedBoxHeight';
import StartEndDate from '../../../components/Cards/StartEndDate';
import commonStyles from '../../../theme/common';
import LineVertical from '../../../components/Common/LineVertical';
import HeadingSub from '../../../components/Cards/HeadingSub';
import FullWidthLoader from '../../../components/Loaders/FullWidthLoader';
import DateCardLoader from '../../../components/Loaders/DateCardLoader';

import { onLayout } from '../../../utils/helpers';
import { color } from '../../../theme/font';
import { navigator } from '../../../navigation/navigator';
import dayjs from 'dayjs';
import { Calendar, CalendarProvider } from 'react-native-calendars';
import CalendarGuideCard from '../../../components/Cards/CalendarGuideCard';

const UpcomingPlanScreen = ({
  upcomingPlanDetails,
  car_plan_id,
  car_id,
  loading,
  getUpcomingPlanDetails,
}) => {
  const navigation = useNavigation();
  const car = useSelector(state => state.currentCar.car);
  const form_date = upcomingPlanDetails?.from_date;
  const to_date = upcomingPlanDetails?.to_date;
  const markedDate = upcomingPlanDetails?.calendar;

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader
        title="Upcoming Plan Details"
        onClose={() => navigation.goBack()}
        bgColor={color.blueMain}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.background}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={getUpcomingPlanDetails}
          />
        }>
        {loading ? (
          <View>
            <FullWidthLoader height={138} marginBottom={16} />
            <FullWidthLoader height={61} marginBottom={16} />
            <DateCardLoader />
          </View>
        ) : (
          <>
            <CarCard
              carImg={car?.car_model?.Car_Image?.url}
              carModel={car?.car_model.Model_name}
              carBrand={car?.car_model?.car_company?.Company_name}
              carNumber={car?.car_number}
              carFule={car?.fuel_type?.Type}
              actions={
                <View
                  style={{
                    backgroundColor: color.btnLight,
                    padding: 8,
                    ...commonStyles.rowACenterJBetween,
                  }}>
                  <Text style={commonStyles.pText}>Current Plan</Text>
                  <Text style={commonStyles.pText}>
                    {upcomingPlanDetails?.planDetails?.Name}
                  </Text>
                </View>
              }
            />

            <View style={styles.planCard} onLayout={onLayout}>
              <View style={commonStyles.rowACenterJBetween}>
                <HeadingSub
                  heading={
                    <Text>
                      {upcomingPlanDetails?.planDetails?.exterior_cleaning || 0}
                    </Text>
                  }
                  subHeading="External"
                />
                <LineVertical />
                <HeadingSub
                  heading={
                    <Text>
                      {upcomingPlanDetails?.planDetails?.interior_cleanings ||
                        0}
                    </Text>
                  }
                  subHeading="Internal"
                />
                <LineVertical />
                <HeadingSub
                  subHeading={`Cleaning ${'\n'} Balance`}
                  onPress={() => {
                    navigation.navigate(navigator.cleaningRecord, {
                      car_id,
                      car_plan_id,
                    });
                  }}
                />
              </View>
            </View>
            <SizedBoxHeight height={8} />
            <StartEndDate form_date={form_date} to_date={to_date} />

            {markedDate && (
              <View>
                <SizedBoxHeight />
                <Text style={{ ...commonStyles.h4Text, textAlign: 'center' }}>
                  Cleaning Schedule
                </Text>
                <CalendarGuideCard />
                <CalendarProvider
                  showTodayButton={false}
                  todayButtonStyle={{
                    backgroundColor: color.white,
                    color: color.black,
                  }}>
                  <Calendar
                    hideExtraDays
                    style={styles.calender}
                    markingType={'custom'}
                    markedDates={markedDate}
                  />
                </CalendarProvider>
                <SizedBoxHeight height={32} />
              </View>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpcomingPlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',
  },
  background: {
    ...commonStyles.paddingHorizontal,
    paddingVertical: 20,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  datecard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderRadius: 8,
    backgroundColor: color.blueDark2,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  card: {
    marginVertical: 8,
    backgroundColor: color.white,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginHorizontal: 3,
  },
  planCard: {
    marginBottom: 8,
    backgroundColor: color.blue2,
    paddingVertical: 8,
    paddingHorizontal: 2,
    borderRadius: 8,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.07)',
    paddingBottom: 8,
  },
  whiteLine: {
    height: 20,
    width: 1,
    backgroundColor: color.white,
  },
  calender: {
    marginHorizontal: 4,
    borderRadius: 8,
    marginTop: 14,
  },
});
