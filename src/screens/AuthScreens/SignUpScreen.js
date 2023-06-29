import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import AuthCarAnimated from '../../components/auth/AuthCarAnimated';
import AuthHeader from '../../components/auth/AuthHeader';
import color from '../../theme/color';
import AuthChange from '../../components/auth/AuthChange';
import commonStyles from '../../theme/common';
import SizedBoxHeight from '../../components/Common/SizedBoxHeight';
import GoButton from '../../components/GoComponents/GoButton';
import authStyles from '../../components/auth/AuthStyles';
import buttonStyles from '../../theme/button';

import { useKeyboard } from '../../hooks/useKeyBoard';
import { showtoast } from '../../utils/error';
import { send_register_otp } from '../../apis/authApis';
import { useNavigation } from '@react-navigation/native';
import { authNavigator } from '../../navigation/navigator';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const keyboardHeight = useKeyboard();

  const [formData, setFormData] = useState({
    phone: null,
    email: null,
    username: null,
    isValidPhone: true,
    isValidUsername: true,
    isValidEmail: true,
  });

  const [isSendOtp, setIsSendOtp] = useState(false);

  const onInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFieldValidation = (name, value) => {
    switch (name) {
      case 'username':
        const nameRegExp = /^[a-zA-Z ]{2,30}$/;
        if (value.length < 4 || !nameRegExp.test(value)) {
          setFormData({
            ...formData,
            isValidUsername: false,
          });
        } else {
          setFormData({
            ...formData,
            isValidUsername: true,
          });
        }
        break;
      case 'email':
        var emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
        if (value.length < 4 || !emailRegEx.test(value)) {
          setFormData({
            ...formData,
            isValidEmail: false,
          });
        } else {
          setFormData({
            ...formData,
            isValidEmail: true,
          });
        }
        break;
      case 'phone':
        var phoneRegex = /^[6789]\d{9}$/;
        if (value.length < 4 || !phoneRegex.test(value)) {
          setFormData({
            ...formData,
            isValidPhone: false,
          });
        } else {
          setFormData({
            ...formData,
            isValidPhone: true,
          });
        }
        break;
    }
  };

  const onContinuePhone = async () => {
    try {
      if (!formData.phone || !formData.username) {
        showtoast('Please enter all the fields.');
        return;
      }
      handleFieldValidation('phone', formData.phone);
      handleFieldValidation('username', formData.username);
      const { isValidPhone, isValidUsername } = formData;

      if (!isValidUsername) {
        showtoast('Username must contain min 4 characters.');
        return;
      }
      if (!isValidPhone) {
        showtoast('Please enter 10 digit mobile number.');
        return;
      }
      setIsSendOtp(true);

      const data = {
        username: `91${formData.phone}`,
        full_name: formData.username,
      };

      const response = await send_register_otp(data);

      setIsSendOtp(false);

      if (response.data === null) {
        showtoast('User already exists.');
        return;
      }

      if (response && response.type === 'success') {
        navigation.navigate(authNavigator.signUpOtp, {
          data: {
            ...formData,
            phone: `+91${formData.phone}`,
            phoneOnly: `91${formData.phone}`,
            onlyPhone: formData.phone,
          },
        });
      }
    } catch (error) {
      setIsSendOtp(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={authStyles.topWrapSignup}>
        <AuthHeader heading="WELCOME" subHeading="Create Your Account" />
        <SizedBoxHeight height={10} />
        <View>
          <TextInput
            placeholder="Full Name"
            onChangeText={value => {
              onInputChange('username', value);
            }}
            placeholderTextColor={color.grayLighter}
            value={formData.username}
            style={styles.textInputName}
          />
          <SizedBoxHeight height={12} />
          <View
            style={{
              position: 'relative',
            }}>
            <TextInput
              maxLength={10}
              keyboardType={Platform.OS === 'android' ? 'numeric' : 'phone-pad'}
              style={styles.textInput}
              value={formData.phone}
              placeholder="Mobile Number"
              placeholderTextColor={color.grayLighter}
              onChangeText={value => {
                let phoneNum = value.replace(/\D/gm, '');
                onInputChange('phone', phoneNum);
              }}
            />
            <Text style={authStyles.pretext}>+91 -</Text>
          </View>
          <Text style={authStyles.otpSupportText}>
            You will receive an SMS verification code
          </Text>
        </View>

        <GoButton
          disabled={
            !formData.phone || formData.phone.length !== 10 || isSendOtp
          }
          text="Send OTP"
          onPress={onContinuePhone}
          style={buttonStyles.primaryButton}
          textStyle={{
            color:
              !formData.phone || formData.phone.length !== 10
                ? color.grayLight
                : color.white,
            ...buttonStyles.primaryButtonTextCap,
          }}
        />
      </View>

      <View
        style={{
          marginBottom: Platform.OS === 'ios' ? 0 : -keyboardHeight,
          position: 'relative',
          zIndex: 10,
        }}>
        <AuthCarAnimated animated />

        <View style={authStyles.buttonSection}>
          <Animatable.View animation="bounceInUp" duration={600} delay={500}>
            <GoButton
              text="Sign Up"
              onPress={onContinuePhone}
              style={buttonStyles.primaryButton}
              textStyle={buttonStyles.primaryButtonTextCap}
            />
            <AuthChange
              target={authNavigator.login}
              targetText="Login"
              text="Already have an account?"
            />
          </Animatable.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...commonStyles.paddingHorizontal,
  },
  textInputName: {
    ...commonStyles.authInputs,
    paddingLeft: 16,
  },
  textInput: {
    ...commonStyles.authInputs,
    paddingLeft: 62,
  },
  topWrapSignup: {
    position: 'relative',
    zIndex: 1000,
  },
});
