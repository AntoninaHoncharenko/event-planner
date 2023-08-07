import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllEvents,
  getOneEvent,
  addEvent,
  deleteEvent,
  updateEvent,
} from './operation';

const initialState = {
  events: [],
  oneEvent: {},
  isLoading: false,
  error: null,
};

const extaActions = [
  getAllEvents,
  getOneEvent,
  addEvent,
  deleteEvent,
  updateEvent,
];
const getActions = type => extaActions.map(action => action[type]);

const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const getAllEventsReducer = (state, action) => {
  state.events = action.payload;
};

const getOneEventReducer = (state, action) => {
  state.oneEvent = action.payload;
};

const addEventReducer = (state, action) => {
  state.events.push(action.payload);
};

const updateEventReducer = (state, action) => {
  const updatedEvent = action.payload;
  const index = state.events.findIndex(event => event.id === updatedEvent.id);
  if (index !== -1) {
    state.events[index] = updatedEvent;
  }
};

const deleteEventReducer = (state, action) => {
  const index = state.events.findIndex(event => event.id === action.payload.id);
  state.events.splice(index, 1);
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllEvents.fulfilled, getAllEventsReducer)
      .addCase(getOneEvent.fulfilled, getOneEventReducer)
      .addCase(addEvent.fulfilled, addEventReducer)
      .addCase(deleteEvent.fulfilled, deleteEventReducer)
      .addCase(updateEvent.fulfilled, updateEventReducer)
      .addMatcher(isAnyOf(...getActions('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), rejectedReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledReducer);
  },
});

export const eventsReducer = eventsSlice.reducer;
