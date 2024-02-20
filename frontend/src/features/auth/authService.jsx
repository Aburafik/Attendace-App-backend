import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "./authSlice";

import {
  loginAuthService,
  registerAuthService,
} from "../../pages/Form/auth/AuthService";

export const loginUserAsync = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { dispatch }) => {
    const userData = await loginAuthService(credentials);
    const token = userData.token;
    localStorage.setItem("token", token);
    dispatch(login(userData));
    return userData;
  }
);

export const registerUserAsync = createAsyncThunk(
  "auth/registerUser",
  async (formData, { dispatch }) => {
    const authData = await registerAuthService(formData);
    dispatch(register(formData));
    return authData;
  }
);
