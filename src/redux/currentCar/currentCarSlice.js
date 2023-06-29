import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  car: null,
};

const currentCarSlice = createSlice({
  name: 'currentCar',
  initialState: initialState,
  reducers: {
    setCurrentCar: (state, action) => {
      state.car = action.payload.car;
    },
    reset: () => initialState,
  },
});

export default currentCarSlice.reducer;

export const { setCurrentCar, reset } = currentCarSlice.actions;
