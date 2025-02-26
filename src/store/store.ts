import { configureStore } from '@reduxjs/toolkit';
import { tasks } from 'src/store/slices';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    tasks,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
