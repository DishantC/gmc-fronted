import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import PlusIcon from '../../assets/icons/PlusIcon';
import GoButton from '../../components/GoComponents/GoButton';
import commonStyles from '../../theme/common';
import UserCars from '../../components/Car/UserCars';
import buttonStyles from '../../theme/button';

const AddCarScreen = ({ openCarNumberModal }) => {
  return (
    <SafeAreaView style={styles.container}>
      <UserCars />
      <View>
        <GoButton
          text="Add New Vehicle"
          onPress={openCarNumberModal}
          style={buttonStyles.dashedButton}
          textStyle={buttonStyles.dashedButtonText}
          icon={<PlusIcon />}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddCarScreen;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.paddingHorizontal,
    paddingVertical: 16,
    flex: 1,
  },
});
