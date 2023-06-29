import request from '../utils/fetch';

export const send_register_otp = data => request.post('/user/create_new', data);

export const verify_register_otp = data =>
  request.post('/user/verify_new', data);

export const send_login_otp = data =>
  request.post('/user/login_send_otp', data);

export const verify_login_otp = data =>
  request.post('/user/login_verify_otp', data);
