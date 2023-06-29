import request from '../utils/fetch';

export const car_companies = () => request.get('/car-companies?populate=*');

export const car_models = model_name =>
  request.get(
    `/car-models?filters[car_company][Company_name][$eq]=${model_name}&populate=*`,
  );

export const fuel_types = () => request.get('/fuel-types?populate=*');

export const add_car = body => request.post('/cars', body);

export const edit_car = (car_id, body) => request.put(`/cars/${car_id}`, body);
