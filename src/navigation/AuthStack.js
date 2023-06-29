import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { authNavigator } from './navigator';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';
import LoginScreenOtp from '../screens/AuthScreens/LoginScreenOtp';
import SignUpScreenOtp from '../screens/AuthScreens/SignUpScreenOtp';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={authNavigator.authStart}
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name={authNavigator.login}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={authNavigator.loginOtp}
        component={LoginScreenOtp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={authNavigator.signUp}
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={authNavigator.signUpOtp}
        component={SignUpScreenOtp}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
