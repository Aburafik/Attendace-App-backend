import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/employees");
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  employees: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

const Employeeslice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        console.log(action.payload);
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = Employeeslice.actions;
export default Employeeslice.reducer;
