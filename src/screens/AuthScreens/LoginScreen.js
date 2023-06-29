import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  TextInput,
  Keyboard,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import AuthCarAnimated from '../../components/auth/AuthCarAnimated';
import AuthHeader from '../../components/auth/AuthHeader';
import color from '../../theme/color';
import AuthChange from '../../components/auth/AuthChange';
import commonStyles from '../../theme/common';
import GoButton from '../../components/GoComponents/GoButton';
import authStyles from '../../components/auth/AuthStyles';
import buttonStyles from '../../theme/button';

import { send_login_otp } from '../../apis/authApis';
import { showtoast } from '../../utils/error';
import { useKeyboard } from '../../hooks/useKeyBoard';
import { authNavigator } from '../../navigation/navigator';

const LoginScreen = () => {
  const keyboardHeight = useKeyboard();
  const navigation = useNavigation();

  const [phone, setPhone] = useState('');
  const [isSendOtp, setIsSendOtp] = useState(false);

  const onContinuePhone = async () => {
    if (phone) {
      try {
        setIsSendOtp(true);
        const data = {
          username: `91${phone}`,
        };

        const response = await send_login_otp(data);
        setIsSendOtp(false);

        if (response && response?.json?.type === 'success') {
          Keyboard.dismiss();
          navigation.navigate(authNavigator.loginOtp, {
            phone: `+91${phone}`,
            phoneOnly: `91${phone}`,
            onlyPhone: phone,
            isLogin: true,
          });
        }
      } catch (error) {
        setIsSendOtp(false);
      }
    } else {
      showtoast('Please enter Mobile Number');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={authStyles.topWrapLogin}>
        <AuthHeader heading="WELCOME" subHeading="Proceed with your login" />
        <View
          style={{
            marginTop: 20,
          }}>
          <TextInput
            maxLength={10}
            keyboardType={Platform.OS === 'android' ? 'numeric' : 'phone-pad'}
            style={styles.textInput}
            value={phone}
            placeholder="Mobile Number"
            placeholderTextColor={color.grayLighter}
            onChangeText={value => {
              let phoneNum = value.replace(/\D/gm, '');
              setPhone(phoneNum);
            }}
          />
          <Text style={authStyles.pretext}>+91 -</Text>
        </View>
        <Text style={authStyles.otpSupportText}>
          You will receive an SMS verification code
        </Text>
        <GoButton
          disabled={!phone || phone.length !== 10 || isSendOtp}
          text="Send OTP"
          onPress={onContinuePhone}
          style={buttonStyles.primaryButton}
          textStyle={{
            color:
              !phone || phone.length !== 10 ? color.grayLight : color.white,
            ...buttonStyles.primaryButtonTextCap,
          }}
        />
      </View>
      <View
        style={{
          marginBottom: Platform.OS === 'ios' ? 0 : -keyboardHeight,
          position: 'relative',
        }}>
        <AuthCarAnimated animated />

        <View style={authStyles.buttonSection}>
          <Animatable.View animation="bounceInUp" duration={600} delay={500}>
            <GoButton
              text="Login"
              onPress={onContinuePhone}
              style={buttonStyles.primaryButton}
              textStyle={buttonStyles.primaryButtonTextCap}
            />
            <AuthChange
              target={authNavigator.signUp}
              targetText="Sign Up"
              text="Don't have an account?"
            />
          </Animatable.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...commonStyles.paddingHorizontal,
  },
  textInput: {
    ...commonStyles.authInputs,
    paddingLeft: 56,
  },
});
