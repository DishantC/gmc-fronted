import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CallIcon from '../../assets/icons/CallIcon';
import Indevidual from '../../assets/icons/Indevidual';
import color from '../../theme/color';
import { fsize, fWeight } from '../../theme/font';

const PersonCallCard = ({ postName, personName, personPhone }) => {
  return (
    <View style={styles.chip}>
      <Indevidual />
      <View style={styles.textContent}>
        <Text style={styles.postNameText}>{postName}</Text>
        <Text style={styles.personNameText}>{personName}</Text>
      </View>
      <TouchableOpacity onPress={() => Linking.openURL(`tel:${personPhone}`)}>
        <CallIcon />
      </TouchableOpacity>
    </View>
  );
};

export default PersonCallCard;

const styles = StyleSheet.create({
  chip: {
    backgroundColor: color.white,
    borderWidth: 1,
    flex: 1,
    borderColor: color.blue,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  textContent: { marginHorizontal: 8, flexGrow: 1 },
  postNameText: {
    fontWeight: fWeight.semiBold,
    fontSize: fsize.p1,
    color: color.black,
  },
  personNameText: {
    color: color.black,
    fontSize: fsize.mp1,
    flexWrap: 'wrap',
    maxWidth: 60,
  },
});
