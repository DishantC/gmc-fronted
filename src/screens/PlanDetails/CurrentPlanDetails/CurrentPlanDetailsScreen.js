import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CalendarProvider, Calendar } from 'react-native-calendars';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

import ScreenHeader from '../../../components/Common/ScreenHeader';
import CarCard from '../../../components/Cards/CarCard';
import commonStyles from '../../../theme/common';
import SizedBoxWidth from '../../../components/Common/SizedBoxWidth';
import SizedBoxHeight from '../../../components/Common/SizedBoxHeight';
import StartEndDate from '../../../components/Cards/StartEndDate';
import RightArrow from '../../../assets/icons/RightArrow';
import CalendarGuideCard from '../../../components/Cards/CalendarGuideCard';
import LineVertical from '../../../components/Common/LineVertical';
import PersonCallCard from '../../../components/Cards/PersonCallCard';
import HeadingSub from '../../../components/Cards/HeadingSub';
import FullWidthLoader from '../../../components/Loaders/FullWidthLoader';
import DateCardLoader from '../../../components/Loaders/DateCardLoader';
import FeedbackRoot from '../../../components/Popups/FeedbackPopup/FeedbackRoot';

import { navigator } from '../../../navigation/navigator';
import { color, ffamily, fsize } from '../../../theme/font';

const CurrentPlanDetailsScreen = ({
  carHistoryDetails,
  car_id,
  car_plan_id,
  loading,
  getCarDetails,
}) => {
  const navigation = useNavigation();
  const car = useSelector(state => state.currentCar.car);
  const markedDate = carHistoryDetails?.calendar;

  const [showFeedback, setShowFeedback] = useState(false);
  const [scheduleId, setScheduleId] = useState(null);
  const [dateData, setDateData] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {scheduleId && (
        <FeedbackRoot
          showFeedback={showFeedback}
          setShowFeedback={setShowFeedback}
          scheduleId={scheduleId}
          car_id={car_id}
          cleaner_id={carHistoryDetails?.cleanerId}
          dateData={dateData}
        />
      )}
      <ScreenHeader
        title="Current Plan Details"
        onClose={() => navigation.goBack()}
        bgColor={color.blueMain}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.background}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getCarDetails} />
        }>
        {loading ? (
          <View>
            <FullWidthLoader height={138} marginBottom={16} />
            <FullWidthLoader height={50.18} width={171.63} />
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
                    {carHistoryDetails?.planDetails?.Name}
                  </Text>
                </View>
              }
            />
            <View style={styles.row}>
              <PersonCallCard
                postName="Car Cleaner"
                personName={carHistoryDetails?.cleaner_name}
                personPhone={carHistoryDetails?.cleaner_phone}
              />
              <SizedBoxWidth width={10} />
              <PersonCallCard
                postName="Supervisor"
                personName={carHistoryDetails?.cleanerSupervisor_name}
                personPhone={carHistoryDetails?.cleanerSupervisor_phone}
              />
            </View>
            <SizedBoxHeight height={12} />
            <View style={styles.planCard}>
              <View style={commonStyles.rowACenterJBetween}>
                <HeadingSub
                  heading={
                    <Text>
                      {carHistoryDetails?.completedExteriorCleaning || 0}/
                      {carHistoryDetails?.exteriorCleaning || 0}
                    </Text>
                  }
                  subHeading="External"
                />
                <LineVertical />
                <HeadingSub
                  heading={
                    <Text>
                      {carHistoryDetails?.completedFullCleaning || 0}/
                      {carHistoryDetails?.fullCleaning || 0}
                    </Text>
                  }
                  subHeading="Internal"
                />
                <LineVertical />
                <HeadingSub
                  subHeading={`Cleaning${'\n'} Balance`}
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
            <StartEndDate
              form_date={carHistoryDetails?.from_date}
              to_date={carHistoryDetails?.to_date}
            />
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
                    onDayPress={day => {
                      if (
                        dayjs().isSame(dayjs(day.dateString)) ||
                        dayjs().isAfter(dayjs(day.dateString))
                      ) {
                        [markedDate].map(item => {
                          if (Object.keys(item).includes(day.dateString)) {
                            setShowFeedback(true);
                            setScheduleId(item[day.dateString].id);
                            setDateData(day.dateString);
                          }
                        });
                      }
                    }}
                  />
                  <Text
                    style={{
                      ...commonStyles.smallText,
                      textAlign: 'center',
                      marginTop: 12,
                    }}>
                    Click on a completed cleaning to submit feedback or raise an
                    issue
                  </Text>
                </CalendarProvider>
              </View>
            )}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.cleaningButton}
              onPress={() => {
                navigation.navigate(navigator.cleaningRecord, {
                  car_id,
                  car_plan_id,
                });
              }}>
              <Text
                style={{
                  color: color.blue,
                  fontFamily: ffamily.semiBold,
                  fontSize: fsize.h4,
                }}>
                Cleaning Balance
              </Text>
              <RightArrow />
            </TouchableOpacity>
            <SizedBoxHeight height={32} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CurrentPlanDetailsScreen;

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
    justifyContent: 'space-between',
  },
  h4Text: {
    fontSize: fsize.mh5,
    fontFamily: ffamily.regular,
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
    marginVertical: 8,
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
  calender: {
    marginHorizontal: 4,
    borderRadius: 8,
    marginTop: 14,
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 3,
    marginHorizontal: 8,
  },
  markerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 12,
  },
  worktext: {
    fontSize: fsize.p1,
    color: color.blue,
  },
  cleaningButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 6,
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.blue,
    borderRadius: 10,
    marginTop: 20,
  },
});
