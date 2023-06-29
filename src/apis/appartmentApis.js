import request from '../utils/fetch';

export const get_apartments = () => request.get('/apartments');
