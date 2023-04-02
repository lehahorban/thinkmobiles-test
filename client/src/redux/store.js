import { configureStore } from "@reduxjs/toolkit";
import clientSlice from "./client/clientSlice.js";
import eventSlice from "./event/eventSlice.js";
import authSlice from "./auth/authSlice.js";

export const store = configureStore({
  reducer: {
    client: clientSlice,
    event: eventSlice,
    auth: authSlice,
  },
});
