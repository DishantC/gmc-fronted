import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  TextInput,
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

import { authNavigator } from '../../navigation/navigator';
import { loginUser } from '../../redux/auth/thunk';
import { send_login_otp } from '../../apis/authApis';
import { showtoast } from '../../utils/error';
import { useKeyboard } from '../../hooks/useKeyBoard';

const LoginScreenOtp = ({ route }) => {
  const keyboardHeight = useKeyboard();
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [otp, setOtp] = useState('');
  const [isVerifyOtp, setVerifyOtp] = useState(false);

  const onContinueOtp = async otpcode => {
    const data = {
      username: route.params.phoneOnly,
      otp: otpcode,
    };

    const cb = () => {
      setVerifyOtp(false);
    };
    setVerifyOtp(true);
    dispatch(loginUser(data, cb));
  };

  async function reSendOtp() {
    try {
      const data = {
        username: route.params.phoneOnly,
      };
      const response = await send_login_otp(data);
      if (response && response?.json?.type === 'success') {
        showtoast('OTP sent successfully');
        setOtp('');
      }
    } catch (err) {
      showtoast('Something went wrong');
    }
  }

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
            style={styles.textInput}
            value={route.params.onlyPhone}
            editable={false}
          />
          <Text style={authStyles.pretext}>+91 -</Text>
        </View>
        <Text style={authStyles.otpSupportText}>
          You will receive an SMS verification code
        </Text>
        <View>
          <SizedBoxHeight height={5} />
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
          <SizedBoxHeight height={8} />
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              zIndex: 1,
            }}
            onPress={() => {
              reSendOtp();
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
            text="Login"
            onPress={() => {}}
            style={buttonStyles.primaryButton}
            textStyle={buttonStyles.primaryButtonTextCap}
          />
          <AuthChange
            target={authNavigator.signUp}
            targetText="Sign Up"
            text="Don't have an account?"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreenOtp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...commonStyles.paddingHorizontal,
  },
  textInput: {
    ...commonStyles.authInputs,
    paddingLeft: 62,
  },
});
