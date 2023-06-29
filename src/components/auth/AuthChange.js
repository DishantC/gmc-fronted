import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import color from '../../theme/color';
import { fWeight } from '../../theme/font';

const AuthChange = ({ target, targetText, text }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.linkWrapper}>
      {text && <Text style={styles.txt}>{text}</Text>}
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate(target)}>
        <Text style={styles.targetText}>{targetText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthChange;

const styles = StyleSheet.create({
  linkWrapper: {
    marginTop: 10,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 10000,
  },
  link: {
    position: 'relative',
    textAlign: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  txt: {
    fontWeight: fWeight.bold,
    color: color.white,
  },
  targetText: {
    color: color.blue,
    marginLeft: 5,
    fontWeight: fWeight.semiBold,
  },
});
