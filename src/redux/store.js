import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slicers/auth-slice';
import { counterSlice } from './slicers/counter-slice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    counter: counterSlice.reducer,
  },
});
