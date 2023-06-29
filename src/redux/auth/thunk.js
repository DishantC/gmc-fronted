import { verify_login_otp, verify_register_otp } from '../../apis/authApis';
import { setUser } from './authSlice';

export const loginUser = (data, cb) => async dispatch => {
  try {
    const response = await verify_login_otp(data);
    if (response) {
      const { jwt, user } = response;
      dispatch(setUser({ user, token: jwt }));
    }
    cb();
  } catch (error) {
    cb();
  }
};

export const registerUser = (data, cb) => async dispatch => {
  try {
    const response = await verify_register_otp(data);

    if (response) {
      const { jwt, user } = response;
      dispatch(setUser({ user, token: jwt }));
    }
  } catch (error) {
  } finally {
    cb();
  }
};
