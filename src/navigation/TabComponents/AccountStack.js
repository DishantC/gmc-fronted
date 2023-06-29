import React from 'react';
import { useDispatch } from 'react-redux';

import { clearUser } from '../../redux/auth/authSlice';
import AccountScreen from '../../screens/TabScreens/AccountScreen';

const AccountStack = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(clearUser());
  };

  return <AccountScreen logout={logout} />;
};

export default AccountStack;
