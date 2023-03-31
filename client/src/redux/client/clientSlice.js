import { createSlice } from "@reduxjs/toolkit";
import { createClient, getClients, getClientById } from "./clientOperations";

const clientSlice = createSlice({
  name: "client",
  initialState: {
    isLoading: false,
    clients: [],
    // firstName: "",
    // lastName: "",
    // email: "",
    // phoneNumber: "",
  },
  reducers: {},
  extraReducers: {
    // Create client
    [createClient.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [createClient.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.clients.push(payload);
    },
    [createClient.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    // Get clients
    [getClients.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getClients.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.clients = payload;
    },
    [getClients.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    // Get clients
    [getClientById.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getClientById.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [getClientById.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export default clientSlice.reducer;
