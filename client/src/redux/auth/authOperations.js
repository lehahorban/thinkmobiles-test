import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../api/authApi.js";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password }) => {
    try {
      const { data } = await authApi.post("auth/register", {
        name,
        email,
        password,
      });
      if (data.token) {
        window.localStorage.setItem("token", data.token);
      }
      console.log(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ name, email, password }) => {
    try {
      const { data } = await authApi.post("auth/login", {
        name,
        email,
        password,
      });
      if (data.token) {
        window.localStorage.setItem("token", data.token);
      }

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const currentUser = createAsyncThunk("auth/currentUser", async () => {
  try {
    const { data } = await authApi.get("auth/current");
    return data;
  } catch (error) {
    console.log(error);
  }
});
