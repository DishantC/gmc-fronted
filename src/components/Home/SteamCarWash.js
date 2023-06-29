import React from 'react';
import { View, StyleSheet } from 'react-native';

import SaveWater from '../../assets/icons/home/SaveWater';
import KillBacteria from '../../assets/icons/home/KillBacteria';
import Hyginic from '../../assets/icons/home/Hyginic';
import EcoFiendly from '../../assets/icons/home/EcoFiendly';
import GoIconRow from '../GoComponents/GoIconRow';
import ImageCard from './ImageCard';
import color from '../../theme/color';

const SteamCarWash = () => {
  const iconRow = [
    {
      key: '1',
      title: 'Helps Save Water',
      icon: <SaveWater />,
    },
    {
      key: '2',
      title: 'Kills Bacteria',
      icon: <KillBacteria />,
    },
    {
      key: '3',
      title: 'Hygienic Steam Wash',
      icon: <Hyginic />,
    },
    {
      key: '4',
      title: 'Eco-Friendly Wash',
      icon: <EcoFiendly />,
    },
  ];
  return (
    <View style={styles.mainWrap}>
      <ImageCard
        image={require('../../assets/images/steam-wash.png')}
        title="Steam Car Wash"
        description="Book Now and avail a portable steam car wash today!"
        buttnText="Book Now"
        buttonAction={() => {}}
      />
      <GoIconRow icons={iconRow} />
    </View>
  );
};

export default SteamCarWash;

const styles = StyleSheet.create({
  mainWrap: {
    paddingBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: color.borderColor,
  },
});
