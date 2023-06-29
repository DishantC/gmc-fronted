import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { color, ffamily, fsize } from '../../theme/font';
import SizedBoxWidth from '../Common/SizedBoxWidth';

const TimeSlotsCards = ({
  timeSlots,
  selectedTimeSlot,
  setSelectedTimeSlot,
}) => {
  return (
    <View style={styles.slotWrap}>
      {timeSlots.map((timeslots, index) => {
        return (
          <React.Fragment key={timeslots?.id}>
            <TouchableOpacity
              onPress={() => setSelectedTimeSlot(timeslots?.id)}
              style={{
                ...styles.timeSlotItem,
                backgroundColor:
                  selectedTimeSlot === timeslots?.id ? color.blue : color.white,
              }}>
              <Text
                style={{
                  ...styles.slotText,
                  color:
                    selectedTimeSlot === timeslots.id
                      ? color.white
                      : color.black,
                }}>
                {`${timeslots?.attributes?.From?.substring(
                  0,
                  5,
                )} to ${timeslots?.attributes?.To?.substring(0, 5)}`}
              </Text>
            </TouchableOpacity>
            {index !== timeSlots?.length - 1 && <SizedBoxWidth width={10} />}
          </React.Fragment>
        );
      })}
    </View>
  );
};

export default TimeSlotsCards;

const styles = StyleSheet.create({
  slotWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  timeSlotItem: {
    borderWidth: 1,
    borderColor: color.blue,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    flex: 1,
  },
  slotText: {
    fontSize: fsize.h5,
    fontFamily: ffamily.regular,
    textAlign: 'center',
  },
});
