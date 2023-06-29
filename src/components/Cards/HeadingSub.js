import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { color, fsize, fWeight } from '../../theme/font';

const HeadingSub = ({ heading, subHeading, onPress }) => {
  return onPress ? (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {heading && <Text style={styles.headingText}>{heading}</Text>}
      {subHeading && <Text style={styles.subHeadingText}>{subHeading}</Text>}
    </TouchableOpacity>
  ) : (
    <View style={styles.container}>
      {heading && <Text style={styles.headingText}>{heading}</Text>}
      {subHeading && <Text style={styles.subHeadingText}>{subHeading}</Text>}
    </View>
  );
};

export default HeadingSub;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingText: {
    fontSize: fsize.h3,
    fontWeight: fWeight.bold,
    color: color.black,
    textAlign: 'center',
  },
  subHeadingText: {
    fontSize: fsize.mh6,
    fontWeight: fWeight.regular,
    color: color.black,
    textAlign: 'center',
  },
});
