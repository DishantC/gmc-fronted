import React, { useMemo, useRef } from 'react';
import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';

import SizedBoxHeight from '../../components/Common/SizedBoxHeight';
import LineHorizontal from '../../components/Common/LineHorizontal';
import HireCleaner from '../../components/Home/HireCleaner';
import HomeHeader from '../../components/Home/HomeHeader';
import HomeSearch from '../../components/Home/HomeSearch';
import HomeSection from '../../components/Home/HomeSection';
import HomeSlider from '../../components/Home/HomeSlider';
import HomeUser from '../../components/Home/HomeUser';
import SteamCarWash from '../../components/Home/SteamCarWash';
import commonStyles from '../../theme/common';
import AddCarBottomSheets from '../AddCar/AddCarBottomSheets';

import { gradients } from '../../theme/color';

const DashboardScreen = () => {
  const { dismissAll } = useBottomSheetModal();
  const dismissAllBottomSheets = () => {
    dismissAll();
  };

  // Add Car Bottom Sheet
  const addCarRef = useRef(null);
  const addCarSnapPoints = useMemo(() => ['60%'], []);

  const openAddCarModal = () => {
    addCarRef?.current?.present();
  };

  const closeAddCarModal = () => {
    addCarRef?.current?.dismiss();
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={gradients.mainBlue} useAngle={true} angle={90}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
          contentInsetAdjustmentBehavior="automatic">
          <View style={styles.headerWrap}>
            <HomeHeader openAddCarModal={openAddCarModal} />
          </View>

          <View style={commonStyles.floatingWrap}>
            <HomeSlider />
            <SizedBoxHeight />
            <View style={commonStyles.paddingHorizontal}>
              <HomeSearch />
              <SizedBoxHeight />
              <HomeUser />
              <LineHorizontal />
              <SteamCarWash />
              <SizedBoxHeight />
              <HireCleaner />
              <LineHorizontal />
              <HomeSection title="Recommended Services" />
              <LineHorizontal />
              <HomeSection title="What's New?" />
              <LineHorizontal />
              <HomeSection title="All Servces" />
              <HomeSection />
              <SizedBoxHeight />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>

      <AddCarBottomSheets
        addCarRef={addCarRef}
        addCarSnapPoints={addCarSnapPoints}
        closeAddCarModal={closeAddCarModal}
        dismissAllBottomSheets={dismissAllBottomSheets}
      />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingTop: Platform.OS === 'ios' ? 0 : 12,
  },
  headerWrap: {
    ...commonStyles.paddingHorizontal,
    paddingBottom: 10,
  },
});
