import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import PlusBorder from '../../assets/icons/PlusBorder';
import LocationPin from '../../assets/icons/LocationPin';
import color from '../../theme/color';
import commonStyles from '../../theme/common';

const HomeHeader = ({ openAddCarModal }) => {
  const [cityName, setCityName] = useState('');
  const [iscityName, setIsCityName] = useState(false);

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);

        // Geocoder.init('AIzaSyClDjPX_2bzduWI0sIpppvcMkQB7ZhanKQ');
        // Geocoder.from(currentLatitude, currentLongitude)
        //   .then((json) => {
        //     const addressComponent =
        //       json.results[0].address_components[1].short_name;
        //     // console.log('Address json data =>', json.results[0]);
        //     setCityName(addressComponent);
        //     setIsCityName(true);
        //   })
        //   .catch((error) => console.warn(error));
      },
      error => {},
    );
  };

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getCurrentPosition();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getCurrentPosition();
          } else {
            console.log('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <LocationPin />
          <Text
            style={{
              ...commonStyles.h4Text,
              color: color.white,
            }}>
            Home
          </Text>
        </View>
      </View>

      <View>
        <Image
          source={require('../../assets/logo/logo-text-white.png')}
          resizeMode="contain"
          style={{
            width: 180,
            height: 55,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => openAddCarModal()}
        style={{
          alignItems: 'center',
        }}>
        <PlusBorder />
        <Text
          style={{
            ...commonStyles.superSmallText,
            color: color.white,
            marginTop: 2,
          }}>
          Add a Car
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
