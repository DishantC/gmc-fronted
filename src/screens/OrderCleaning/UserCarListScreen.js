import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CarCardAction from '../../components/Cards/CarCardAction';
import ScreenHeader from '../../components/Common/ScreenHeader';
import GoBackClose from '../../components/Common/GoBackClose';
import commonStyles from '../../theme/common';
import FullWidthLoader from '../../components/Loaders/FullWidthLoader';
import SizedBoxHeight from '../../components/Common/SizedBoxHeight';

import { color, fsize } from '../../theme/font';
import { get_user_cars } from '../../apis/userCarsApis';
import { navigator } from '../../navigation/navigator';

const UserCarListScreen = ({ route }) => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [userAddedCars, setUserAddedCars] = useState([]);

  useEffect(() => {
    loadUserCars();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    loadUserCars();
    // eslint-disable-next-line
  }, [route?.params?.reload]);

  const loadUserCars = async () => {
    setLoading(true);
    try {
      const response = await get_user_cars();

      if (response) {
        setUserAddedCars(response.cars);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  if (loading || userAddedCars.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <ScreenHeader
          title="Hire Car Cleaner"
          onClose={() => navigation.navigate(navigator.dashboard)}
          bgColor={color.blueMain}
        />
        <View style={commonStyles.paddingHorizontal}>
          <SizedBoxHeight height={12} />
          <GoBackClose text="Select Car" />
        </View>
        <View
          style={[
            styles.background,
            { justifyContent: 'center', alignItems: 'center' },
          ]}>
          {loading ? (
            <FullWidthLoader height={230} />
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.background}
              refreshControl={
                <RefreshControl refreshing={loading} onRefresh={loadUserCars} />
              }>
              <Text style={styles.noCar}>No cars added</Text>
            </ScrollView>
          )}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader
        title="Hire Car Cleaner"
        onClose={() => navigation.navigate(navigator.dashboard)}
        bgColor={color.blueMain}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.background}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={loadUserCars} />
        }>
        <GoBackClose
          text="Select Car"
          backAction={() => navigation.navigate(navigator.dashboard)}
        />

        {userAddedCars.map((item, index) => (
          <CarCardAction
            key={item.id}
            item={item}
            index={index}
            loadUserCars={loadUserCars}
          />
        ))}
        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserCarListScreen;

const styles = StyleSheet.create({
  background: {
    paddingVertical: 12,
    ...commonStyles.paddingHorizontal,
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',
  },
  noCar: {
    fontSize: fsize.h4,
    color: color.black,
  },
});
