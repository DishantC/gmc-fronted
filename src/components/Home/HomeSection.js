import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CarServicing from '../../assets/icons/home/CarServicing';
import CarTyre from '../../assets/icons/home/CarTyre';
import CarWash from '../../assets/icons/home/CarWash';
import color from '../../theme/color';
import { fsize, fWeight } from '../../theme/font';
import SizedBoxHeight from '../Common/SizedBoxHeight';
import GoIconSvg from '../GoComponents/GoIconSvg';

const HomeSection = ({ title }) => {
  const iconRow = [
    {
      key: '1',
      title: 'Car Wash',
      icon: <CarWash />,
    },
    {
      key: '2',
      title: 'Air and Tyre Puncture',
      icon: <CarTyre />,
    },
    {
      key: '3',
      title: 'Car Servicing',
      icon: <CarServicing />,
    },
  ];

  return (
    <View>
      {title && <Text style={styles.heading}>{title}</Text>}
      <SizedBoxHeight height={10} />
      <View style={styles.container}>
        {iconRow.map((item, index) => (
          <GoIconSvg
            key={index}
            title={item.title}
            icon={item.icon}
            styles={{
              flex: 1,
              borderRadius: 4,
              borderWidth: 0.1,
              borderColor: color.borderColor,
              paddingHorizontal: 10,
              paddingVertical: 8,
              marginLeft: index === 0 ? 0 : 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            iconStyles={{
              minHeight: 20,
            }}
            textStyles={{
              textAlign: 'center',
              fontSize: fsize.p1,
              color: color.black,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default HomeSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  heading: {
    color: color.black,
    fontWeight: fWeight.semiBold,
  },
});
