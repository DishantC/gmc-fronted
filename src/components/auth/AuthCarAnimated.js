import React from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Image, StyleSheet } from 'react-native';

const AuthCarAnimated = ({ animated }) => {
  return animated ? (
    <View style={styles.container}>
      <View style={styles.carbg}>
        <Animatable.View animation="bounceInDown" duration={500} delay={100}>
          <View>
            <Image
              source={require('../../assets/images/car-bg.png')}
              resizeMode="contain"
            />
          </View>
        </Animatable.View>
      </View>
      <View style={styles.car}>
        <Animatable.View animation="bounceInUp" duration={600} delay={500}>
          <View>
            <Image
              source={require('../../assets/images/car-big.png')}
              resizeMode="contain"
            />
          </View>
        </Animatable.View>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.carbg}>
        <View>
          <Image
            source={require('../../assets/images/car-bg.png')}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.car}>
        <View>
          <Image
            source={require('../../assets/images/car-big.png')}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default AuthCarAnimated;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: -10,
  },
  carbg: {
    position: 'absolute',
    bottom: -50,
    flex: 1,
    zIndex: -10,
  },
  car: {
    position: 'absolute',
    bottom: -50,
    flex: 1,
    zIndex: -2,
  },
});
