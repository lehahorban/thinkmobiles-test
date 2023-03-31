import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api.js";

export const createEvent = createAsyncThunk(
  "event/createEvent",
  async (params) => {
    try {
      const { data } = await api.post("/event", params);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getEventById = createAsyncThunk("event/getEvents", async (id) => {
  try {
    const { data } = await api.get(`/event/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getEvents = createAsyncThunk("event/getEvents", async () => {
  try {
    const { data } = await api.get(`/events`);

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteEvents = createAsyncThunk(
  "event/deleteEvents",
  async (eventIds) => {
    try {
      await api.delete(`/event`, { data: eventIds });
      return eventIds;
    } catch (error) {
      console.log(error);
    }
  }
);
