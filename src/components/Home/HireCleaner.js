import React from 'react';
import { View, StyleSheet } from 'react-native';

import GoIconRow from '../GoComponents/GoIconRow';
import ImageCard from './ImageCard';
import color from '../../theme/color';
import Rupee from '../../assets/icons/home/Rupee';
import Clock from '../../assets/icons/home/Clock';
import QRCode from '../../assets/icons/home/QRCode';
import Calander from '../../assets/icons/home/Calander';
import { useNavigation } from '@react-navigation/native';
import { navigator } from '../../navigation/navigator';

const HireCleaner = () => {
  const navigation = useNavigation();
  const iconRow = [
    {
      key: '1',
      title: 'Daily cleaning with updates',
      icon: <Clock />,
    },
    {
      key: '2',
      title: 'Pay per usage only',
      icon: <Rupee />,
    },
    {
      key: '3',
      title: 'QR code and app based monitering',
      icon: <QRCode />,
    },
    {
      key: '4',
      title: 'Monthly subsciption',
      icon: <Calander />,
    },
  ];

  const navigateToCarList = () => {
    navigation.navigate(navigator.userCarList);
  };

  return (
    <View style={styles.mainWrap}>
      <ImageCard
        image={require('../../assets/images/hire-a-cleaner.png')}
        title="Hire A Car Cleaner"
        description="Subscribe to a car cleaning service today!"
        buttnText="SUBSCRIBE NOW"
        buttonAction={navigateToCarList}
      />
      <GoIconRow icons={iconRow} />
    </View>
  );
};

export default HireCleaner;

const styles = StyleSheet.create({
  mainWrap: {
    paddingBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: color.borderColor,
  },
});
