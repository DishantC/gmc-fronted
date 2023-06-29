import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useDispatch } from 'react-redux';

import AuthCarAnimated from '../../components/auth/AuthCarAnimated';
import AuthHeader from '../../components/auth/AuthHeader';
import AuthChange from '../../components/auth/AuthChange';
import commonStyles from '../../theme/common';
import SizedBoxHeight from '../../components/Common/SizedBoxHeight';
import authStyles from '../../components/auth/AuthStyles';
import buttonStyles from '../../theme/button';
import GoButton from '../../components/GoComponents/GoButton';

import { useKeyboard } from '../../hooks/useKeyBoard';
import { registerUser } from '../../redux/auth/thunk';
import { showtoast } from '../../utils/error';
import { send_register_otp } from '../../apis/authApis';
import { authNavigator } from '../../navigation/navigator';

const SignUpScreenOtp = ({ route }) => {
  const dispatch = useDispatch();
  const keyboardHeight = useKeyboard();

  // eslint-disable-next-line no-unused-vars
  const [otp, setOtp] = useState('');
  const [isVerifyOtp, setVerifyOtp] = useState(false);

  const onContinueOtp = async otpcode => {
    const data = {
      username: route.params.data.phoneOnly,
      full_name: route.params.data.username,
      otp: otpcode,
      role_id: 1,
    };

    const cb = () => {
      setVerifyOtp(false);
    };
    setVerifyOtp(true);
    dispatch(registerUser(data, cb));
  };

  const resentOtp = async () => {
    try {
      const data = {
        username: route.params.data.phoneOnly,
        full_name: route.params.data.username,
      };
      await send_register_otp(data);
      showtoast('OTP sent successfully');
      setOtp('');
    } catch (error) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={authStyles.topWrapSignup}>
        <AuthHeader heading="WELCOME" subHeading="Create Your Account" />
        <SizedBoxHeight height={10} />
        <View>
          <TextInput
            value={route.params.data.username}
            style={styles.textInputName}
            editable={false}
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
              value={route.params.data.onlyPhone}
              editable={false}
            />
            <Text style={authStyles.pretext}>+91 -</Text>
          </View>
          <Text style={authStyles.otpSupportText}>
            You will receive an SMS verification code
          </Text>
        </View>
        <SizedBoxHeight height={12} />
        <View>
          <OTPInputView
            autoFocusOnLoad={false}
            pinCount={4}
            style={{
              ...commonStyles.paddingHorizontal,
              ...commonStyles.otpStyles,
            }}
            codeInputFieldStyle={authStyles.codeInputField}
            editable={!isVerifyOtp}
            onCodeFilled={code => {
              onContinueOtp(code);
            }}
            onCodeChanged={code => {
              setOtp(code);
            }}
            code={otp}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              zIndex: 1,
            }}
            onPress={() => {
              resentOtp();
            }}>
            <Text style={commonStyles.smallText}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginBottom: Platform.OS === 'ios' ? 0 : -keyboardHeight,
          position: 'relative',
        }}>
        <AuthCarAnimated />

        <View style={authStyles.buttonSection}>
          <GoButton
            text="Sign Up"
            onPress={() => {}}
            style={buttonStyles.primaryButton}
            textStyle={buttonStyles.primaryButtonTextCap}
          />
          <AuthChange
            target={authNavigator.login}
            targetText="Login"
            text="Already have an account?"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreenOtp;

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
    paddingLeft: 56,
  },
});
