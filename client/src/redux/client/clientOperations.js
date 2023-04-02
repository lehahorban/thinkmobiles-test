import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/authApi.js";

// export const createClient = createAsyncThunk(
//   "client/createClient",
//   async (params) => {
//     try {
//       const { data } = await api.post("/client", params);
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const createClient = createAsyncThunk(
  "client/createClient",
  async (params) => {
    try {
      const { data } = await api.post("/client", params);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getClients = createAsyncThunk("client/getClients", async () => {
  try {
    const { data } = await api.get("/clients");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getClientById = createAsyncThunk(
  "client/getClientById",
  async (id) => {
    try {
      const { data } = await api.get(`/client/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
