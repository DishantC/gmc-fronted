import request from '../utils/fetch';

export const delete_car = id => request.Delete(`/cars/${id}`);

export const get_user_cars = () =>
  request.get(
    '/users/me?[populate][0]=cars&populate[1]=cars.car_model&populate[2]=cars.car_model.Car_Image&populate[3]=cars.car_model.car_type&populate[4]=cars.apartment&populate[5]=cars.current_order&populate[6]=cars.current_order.plan_price.plan&populate[7]=cars.orders&populate[8]=cars.car_model.car_company&populate[9]=cars.fuel_type',
  );

export const user_cars = () =>
  request.get(
    '/users/me?[populate][0]=cars&populate[1]=cars.car_model&populate[2]=cars.car_model.Car_Image',
  );

export const add_car_to_user = data => request.put('/user/me', data);
