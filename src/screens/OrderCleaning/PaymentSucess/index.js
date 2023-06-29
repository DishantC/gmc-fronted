import React from 'react';
import { useNavigation } from '@react-navigation/native';

import PaymentSucessScreen from './PaymentSucessScreen';
import { navigator } from '../../../navigation/navigator';

export default () => {
  const navigation = useNavigation();

  const onContinue = () => {
    navigation.replace(navigator.userCarList, {
      reload: `${Math.random() * 100000}`,
    });
  };

  return <PaymentSucessScreen onContinue={onContinue} />;
};
