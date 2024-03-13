import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async () => {
    const dispatch = useDispatch();
    const response = await fetch("http://localhost:5000/api/admin/employees")
    const data = await response.data;
    return data;
  }
);

console.log(fetchEmployees);

const user1 = {
  id: 1,
  name: "Ben",
  department: "IT",
  role: "software Engineer",
};
const user2 = {
  id: 1,
  name: "Samuel",
  department: "IT",
  role: "Human resource",
};

const initialState = {
  employees: [],
  status: "idle",
  error: null,
};

const Employeeslice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    getEmployees: {
      reducer(state, action) {
        console.log(action.payload);
        state.employees = action.payload;
      },
    },
    getStatus: {
      reducer(state, action) {
        console.log(action.payload);
        state.status = action.payload;
      },
    },
    getError: {
      reducer(state, action) {
        console.log(action.payload);
        state.error = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchEmployees.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchEmployees.fulfilled, (state, action) => {
          state.status = "idle";
          console.log(action.payload);
          state.employees = action.payload;
        })
        .addCase(fetchEmployees.rejected, (state, action) => {
          state.status = "idle";
          state.error = action.error.message;
        });
    },
  },
});

export const { getEmployees, getStatus, getError } = Employeeslice.actions;
export default Employeeslice.reducer;
