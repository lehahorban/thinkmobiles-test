import { createSlice } from "@reduxjs/toolkit";
import {
  createEvent,
  getEventById,
  getEvents,
  deleteEvents,
} from "./eventOperations";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    isLoading: false,
    events: [],
  },
  reducers: {},
  extraReducers: {
    // Create event
    [createEvent.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [createEvent.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.events.push(payload);
    },
    [createEvent.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    // Get event by id
    [getEventById.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getEventById.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.events = payload;
    },
    [getEventById.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    // Get events
    [getEvents.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getEvents.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.events = payload;
    },
    [getEvents.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    // Delete events
    [deleteEvents.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [deleteEvents.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log(state.events);
      console.log(payload);
    },
    [deleteEvents.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export default eventSlice.reducer;
