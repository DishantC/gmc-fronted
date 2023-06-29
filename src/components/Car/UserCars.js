import React, { useEffect, useState } from 'react';
import { RefreshControl, StyleSheet, View } from 'react-native';

import color from '../../theme/color';
import CarCardAction from '../Cards/CarCardAction';
import SizedBoxHeight from '../Common/SizedBoxHeight';
import FullWidthLoader from '../Loaders/FullWidthLoader';

import { get_user_cars } from '../../apis/userCarsApis';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';

const UserCars = ({ route }) => {
  const [loading, setLoading] = useState(true);
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

  return (
    <BottomSheetScrollView
      onRefresh={loadUserCars}
      refreshing={loading}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={loadUserCars} />
      }>
      {loading ? (
        <FullWidthLoader height={230} count={2} marginBottom={16} />
      ) : (
        <View showsVerticalScrollIndicator={false} style={styles.background}>
          {userAddedCars.map((item, index) => (
            <CarCardAction
              key={item.id}
              item={item}
              index={index}
              loadUserCars={loadUserCars}
            />
          ))}
          <SizedBoxHeight height={10} />
        </View>
      )}
    </BottomSheetScrollView>
  );
};

export default UserCars;

const styles = StyleSheet.create({
  background: {
    backgroundColor: color.white,
  },
});
