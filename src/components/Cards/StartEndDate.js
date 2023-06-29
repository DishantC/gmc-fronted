import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CalanderSmall from '../../assets/icons/CalanderSmall';
import color from '../../theme/color';
import commonStyles from '../../theme/common';
import SizedBoxHeight from '../Common/SizedBoxHeight';
import SizedBoxWidth from '../Common/SizedBoxWidth';

import { fsize, fWeight } from '../../theme/font';
import { dateFormatShortYear, getDayShort } from '../../utils/dates';

const StartEndDate = ({ form_date, to_date }) => {
  return (
    <View>
      <Text style={commonStyles.h5Text}>Start / End Date</Text>
      <SizedBoxHeight height={8} />
      <View style={commonStyles.rowACenterJBetween}>
        <View style={styles.datecard}>
          <View style={styles.itemWrapper}>
            <CalanderSmall />
            <SizedBoxWidth width={5} />
            {form_date && (
              <Text style={styles.textItem}>{getDayShort(form_date)}</Text>
            )}
          </View>
          {form_date && <View style={styles.whiteLine} />}
          {form_date && (
            <Text style={styles.textItem}>
              {dateFormatShortYear(form_date)}
            </Text>
          )}
        </View>
        <SizedBoxWidth width={10} />
        <View style={styles.datecard}>
          <View style={styles.itemWrapper}>
            <CalanderSmall />
            <SizedBoxWidth width={5} />
            {to_date && (
              <Text style={styles.textItem}>{getDayShort(to_date)}</Text>
            )}
          </View>
          {to_date && <View style={styles.whiteLine} />}
          {to_date && (
            <Text style={styles.textItem}>{dateFormatShortYear(to_date)}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default StartEndDate;

const styles = StyleSheet.create({
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
  whiteLine: {
    height: 20,
    width: 1,
    backgroundColor: color.white,
    marginHorizontal: 5,
  },
  itemWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textItem: {
    fontSize: fsize.h6,
    color: color.white,
    fontWeight: fWeight.semiBold,
  },
});
