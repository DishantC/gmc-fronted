import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carNumber: '',
  carModel: null,
  carType: null,
  carCompany: null,
  carCompanyId: null,
  carFuel: null,
  transmission: null,
};

const newCarSlice = createSlice({
  name: 'newCar',
  initialState: initialState,
  reducers: {
    setCarData: (state, action) => {
      state.carNumber = action.payload.carNumber;
      state.carModel = action.payload.carModel;
      state.carType = action.payload.carType;
      state.carCompany = action.payload.carCompany;
      state.carCompanyId = action.payload.carCompanyId;
      state.carFuel = action.payload.carFuel;
      state.transmission = action.payload.transmission;
    },
    reset: () => initialState,
  },
});

export default newCarSlice.reducer;

export const { setCarData, reset } = newCarSlice.actions;
