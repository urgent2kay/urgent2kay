import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../features/auth/authApi';
import { billsApi } from '../features/bills/billsApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [billsApi.reducerPath]: billsApi.reducer,  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(billsApi.middleware), 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
