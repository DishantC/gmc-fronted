import React from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const HomeSlider = () => {
  const slides = [
    {
      key: '1',
      title: 'Title 1',
      image: require('../../assets/images/slider-banner.png'),
    },
    {
      key: '2',
      title: 'Title 1',
      image: require('../../assets/images/slider-banner.png'),
    },
    {
      key: '3',
      title: 'Title 1',
      image: require('../../assets/images/slider-banner.png'),
    },
  ];
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: width * 0.05 }}>
      {slides.map((item, index) => (
        <View
          key={index}
          style={{ ...styles.item, marginLeft: index === 0 ? 0 : 16 }}>
          <Image
            source={item.image}
            resizeMode="cover"
            style={{ width: 215, height: 107 }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default HomeSlider;

const styles = StyleSheet.create({
  item: {
    elevation: 20,
    shadowColor: '#52006A',
  },
});
