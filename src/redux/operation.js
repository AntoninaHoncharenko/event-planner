import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64cacaaf700d50e3c7054b1e.mockapi.io/api/';

export const getAllEvents = createAsyncThunk(
  'events/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/events');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOneEvent = createAsyncThunk(
  'events/getOne',
  async (eventId, thunkAPI) => {
    try {
      const response = await axios.get(`/events/${eventId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addEvent = createAsyncThunk(
  'events/addEvent',
  async (event, thunkAPI) => {
    try {
      const response = await axios.post('/events', event);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateEvent = createAsyncThunk(
  'events/updateEvent',
  async ({ id, event }, thunkAPI) => {
    try {
      const response = await axios.put(`/events/${id}`, event);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteEvent = createAsyncThunk(
  'events/deleteEvent',
  async (eventId, thunkAPI) => {
    try {
      const response = await axios.delete(`/events/${eventId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateFilter = createAction('events/updateFilter');
