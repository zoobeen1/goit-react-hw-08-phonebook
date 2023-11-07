import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshSession, register } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, () => {
        console.log('Попытка регистрации');
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (_, { payload }) => {
        console.log(payload);
      })
      //LogIn
      .addCase(logIn.pending, () => {
        console.log('Попытка входа');
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (_, { payload }) => {
        console.log(payload);
      })
      //LogOut
      .addCase(logOut.pending, () => {
        console.log('Попытка выхода');
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (_, { payload }) => {
        console.log(payload);
      })
      //RefreshSession
      .addCase(refreshSession.pending, () => {
        console.log('Попытка возобновления сессии');
      })
      .addCase(refreshSession.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshSession.rejected, (_, { payload }) => {
        console.log(payload);
      });
  },
});

export const authReducer = authSlice.reducer;
