import { combineReducers } from 'redux';
import authReducer from './auth/authSlice';
import newCarReducer from './newCar/newCarSlice';
import currentCarReducer from './currentCar/currentCarSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  newCar: newCarReducer,
  currentCar: currentCarReducer,
});

export default rootReducer;
