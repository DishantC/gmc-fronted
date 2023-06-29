import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import RedCloseCircle from '../../assets/icons/RedCloseCircle';
import commonStyles from '../../theme/common';

const GoBackClose = ({ text, backAction }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={commonStyles.h4Text}>{text}</Text>
      <TouchableOpacity
        onPress={() => {
          if (backAction) {
            backAction();
          } else {
            navigation.goBack();
          }
        }}>
        <RedCloseCircle />
      </TouchableOpacity>
    </View>
  );
};

export default GoBackClose;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
