import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllAttendanceRecords = createAsyncThunk(
  "attendance/fetchAllAttendanceRecords",
  async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/attendance/all-records"
      );

      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else if (response.status === 301) {
        const etag = response.headers.get("ETag");
        console.log(etag);
      }
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  attendance: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

const AttendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAttendanceRecords.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = null;
      })
      .addCase(fetchAllAttendanceRecords.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.attendance = action.payload;
      })
      .addCase(fetchAllAttendanceRecords.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = AttendanceSlice.actions;
export default AttendanceSlice;
