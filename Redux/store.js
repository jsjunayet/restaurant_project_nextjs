import counterReducer from '@/components/AllReduxSlice/CounterSlice';
import { configureStore } from '@reduxjs/toolkit'
import { AllApi } from './Feature/AllApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
      counter: counterReducer,
      [AllApi.reducerPath]: AllApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AllApi.middleware),
})
setupListeners(store.dispatch)