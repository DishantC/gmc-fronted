import request from '../utils/fetch';

export const file_upload = (img, details = {}) =>
  request.post('/upload', img, details);
