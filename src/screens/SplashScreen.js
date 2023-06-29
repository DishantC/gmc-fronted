import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Animated,
} from 'react-native';

import color from '../theme/color';
import SplashLogo from '../assets/icons/SplashLogo';
import SplashLogoFull from '../assets/icons/SplashLogoFull';

var { height } = Dimensions.get('window');

const SplashScreen = () => {
  const [splashTime, setSplashTime] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const unfadeAnim = useRef(new Animated.Value(1)).current;
  const bgAnim = useRef(new Animated.Value(height * 0.5)).current;
  const carAnim = useRef(new Animated.Value(height * 0.5)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      delay: 1300,
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(unfadeAnim, {
      toValue: 0,
      duration: 1200,
      useNativeDriver: true,
    }).start();
    Animated.timing(bgAnim, {
      delay: 700,
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start();
    Animated.timing(carAnim, {
      delay: 700,
      toValue: -height * 0.67,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim, unfadeAnim, bgAnim, carAnim]);

  useEffect(() => {
    setTimeout(() => {
      setSplashTime(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.splashlogo}>
        {splashTime ? (
          <Animated.View
            style={{
              position: 'relative',
              zIndex: 2,
              opacity: unfadeAnim,
            }}>
            <SplashLogo />
          </Animated.View>
        ) : (
          <Animated.View
            style={{
              position: 'relative',
              zIndex: 2,
              opacity: fadeAnim,
            }}>
            <SplashLogoFull />
          </Animated.View>
        )}
      </View>
      <Animated.View
        style={{
          ...styles.absolutebg,
          top: bgAnim,
        }}>
        <Image
          source={require('../assets/images/splash-bg.png')}
          style={styles.image}
        />
      </Animated.View>
      <Animated.View
        style={{
          ...styles.absolutecar,
          top: carAnim,
        }}>
        <Image
          source={require('../assets/images/car-full.png')}
          style={styles.image}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
  },
  absolutebg: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  absolutecar: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: height * 0.5,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  splashlogo: {
    marginBottom: height * 0.1,
  },
});
