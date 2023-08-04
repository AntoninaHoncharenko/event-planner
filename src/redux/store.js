import { configureStore } from '@reduxjs/toolkit';
import { eventsReducer } from './eventsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    filter: filterReducer,
  },
});
