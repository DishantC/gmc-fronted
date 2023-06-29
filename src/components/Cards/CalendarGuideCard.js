import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import color from '../../theme/color';
import { fsize } from '../../theme/font';
import SizedBoxWidth from '../Common/SizedBoxWidth';

// Gap stuff
const { width } = Dimensions.get('window');
const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width * 0.85;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;

const CalendarGuideCard = () => {
  const CalendarGuide = [
    {
      text: 'Completed External Cleaning',
      color: color.green,
      border: color.green,
    },
    {
      text: 'Completed Internal  Cleaning',
      color: color.blue,
      border: color.blue,
    },
    {
      text: 'Scheduled External Cleaning',
      color: color.white,
      border: color.green,
    },
    {
      text: 'Scheduled Internal  Cleaning',
      color: color.white,
      border: color.blue,
    },
  ];

  return (
    <View style={styles.itemsWrap}>
      {CalendarGuide.map(item => (
        <View key={item.text} style={styles.singleItem}>
          <View
            style={{
              ...styles.box,
              backgroundColor: item.color,
              borderColor: item.border,
            }}
          />
          <SizedBoxWidth width={8} />
          <Text
            style={{
              fontSize: fsize.p2,
              color: color.black,
            }}>
            {item.text}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default CalendarGuideCard;

const styles = StyleSheet.create({
  itemsWrap: {
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 2),
    marginBottom: 8,
    marginTop: 8,
  },
  singleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginHorizontal: gap / 2,
    minWidth: childWidth,
    maxWidth: childWidth,
  },
  box: {
    height: 18,
    width: 18,
    backgroundColor: color.green,
    borderWidth: 1,
    borderColor: color.blue,
    borderRadius: 12,
  },
});
