import request from '../utils/fetch';

export const car_details_by_plan_id = car_plan_id =>
  request.get(`/orders/fetchCurrentDetails/${car_plan_id}`);

export const user_car_cleaning_history_details = car_id =>
  request.get(`/orders/fetchHistory/${car_id}`);

export const all_apartments = () =>
  request.get('/apartments?approval=approved');

export const single_apartment = apartment_id =>
  request.get(`/apartments/${apartment_id}/cleaners`);

export const cleaning_packages = (apartment_id, car_type_id) =>
  request.get(
    `/plan-prices?populate[0]=apartments&populate[1]=plan&populate[2]=car_type&filters[$and][0][apartments][id][$eq]=${apartment_id}&filters[car_type][id][$eq]=${car_type_id}`,
  );

export const user_cars = () =>
  request.get(
    '/users/me?[populate][0]=cars&populate[1]=cars.car_model&populate[2]=cars.car_model.Car_Image&populate[3]=cars.car_model.car_type&populate[4]=cars.current_order&populate[5]=cars.orders&populate[6]=cars.car_model.car_company&populate[7]=cars.fuel_type&populate[8]=cars.cleaner',
  );

export const time_slots = apartment_id =>
  request.get(`/apartments/${apartment_id}?populate[0]=time_slot`);

export const cleaning_order = body => request.post('/orders/createNew', body);

export const cleaning_renew_order = body =>
  request.post('/orders/renewOrder', body);

export const add_apartment = body => request.post('/apartments', body);

export const order_discount = (user_id, car_id) =>
  request.get(
    `/orders/subsequentCarDiscount/?userId=${user_id}&carId=${car_id}`,
  );

export const check_demo_available = (apartmentid, userid) =>
  request.get(
    `/orders/demoPlanCheck?apartmentid=${apartmentid}&userid=${userid}`,
  );

export const mark_demo_done = userid =>
  request.get(`/orders/demoDone?userid=${userid}`);

export const order_renew_discount = carId =>
  request.get(`/orders/renewalDiscount/${carId}`);
