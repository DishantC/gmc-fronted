import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  token: null,
  isUser: false,
  fcmToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isUser = true;
    },
    clearUser: (state, payload) => {
      state.isUser = false;
      state.user = undefined;
      state.token = '';
      state.fcmToken = '';
    },
    setFcmToken: (state, action) => {
      state.user.fcmToken = action.payload.fcmToken;
    },
    setupdatedUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;

export const { setUser, clearUser, setFcmToken, setupdatedUser } =
  authSlice.actions;
