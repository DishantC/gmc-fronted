import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color, ffamily, fsize, fWeight } from '../../theme/font';

const AuthHeader = ({ heading, subHeading }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading} numberOfLines={1} adjustsFontSizeToFit>
        {heading}
      </Text>
      <Text style={styles.subHeading}>{subHeading}</Text>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  heading: {
    fontSize: fsize.xxlarge,
    fontFamily: ffamily.bebasNeueRegular,
    color: color.black,
    textTransform: 'uppercase',
  },
  subHeading: {
    marginTop: -10,
    fontSize: fsize.p1,
    fontWeight: fWeight[600],
    fontFamily: ffamily.robotoRegular,
    color: color.black,
    textTransform: 'uppercase',
  },
});
