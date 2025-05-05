import { createSlice } from '@reduxjs/toolkit';

export const counterSlicer = createSlice({
  name: 'counter',
  initialState: {
    sname: "yatra"
  },
  reducers: {
    btn: (state, action) => {
      state.sname = "creative"; // Use state.sname instead of state.name
    }
  }
});

export const { btn } = counterSlicer.actions;

export default counterSlicer.reducer;
