import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

import color from '../../theme/color';
import commonStyles from '../../theme/common';
import SizedBoxWidth from '../Common/SizedBoxWidth';
import RightArrow from '../../assets/icons/RightArrow';
import selector from '../../redux/selector';

const HomeUser = () => {
  const user = useSelector(selector.user);

  return (
    <View style={styles.container}>
      <View>
        <Text style={commonStyles.pText}>Hi</Text>
        <Text style={commonStyles.h2Text}>{user.Full_name}</Text>
      </View>
      <View style={commonStyles.rowAlignCenter}>
        <View style={styles.boderBlue} />
        <SizedBoxWidth width={12} />
        <View>
          <Text
            style={{
              ...commonStyles.h2Text,
              color: color.blue,
            }}>
            {dayjs().format('DD')}
          </Text>
          <Text
            style={{
              ...commonStyles.pText,
              color: color.blue,
            }}>
            {dayjs().format('MMM')}
          </Text>
        </View>
        <SizedBoxWidth width={12} />
        <View>
          <Text
            style={{
              ...commonStyles.superSmallText,
              color: color.blue,
            }}>
            Steam Car Wash
          </Text>
          <Text style={commonStyles.superSmallText}>23 Nov-24 Nov</Text>
          <Text style={commonStyles.superSmallText}>Steam Car Wash</Text>
        </View>
        <SizedBoxWidth width={10} />
        <RightArrow />
      </View>
    </View>
  );
};

export default HomeUser;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boderBlue: {
    backgroundColor: color.blue,
    height: 50,
    width: 4,
    borderRadius: 4,
  },
});
