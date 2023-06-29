import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
