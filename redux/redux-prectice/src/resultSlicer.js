import { createSlice } from '@reduxjs/toolkit'

export const resultSlicer = createSlice({
  name: 'counter',
  
  initialState: {
    sname: "Rahul"
  },
  
  reducers: {

    btn: (state, action)=>{
        state.sname = "Creative";
    } 
    
  }
})

// Action creators are generated for each case reducer function
export const { btn } = resultSlicer.actions

export default resultSlicer.reducer