import request from '../utils/fetch';

export const get_feedback = scheduleId =>
  request.get(`/order-schedules/${scheduleId}`);

export const send_feedback = (scheduleId, data) =>
  request.put(`/order-schedules/${scheduleId}`, data);

export const send_tip = data => request.post('/tips', data);

export const send_complaint = data => request.post('/complaints', data);
