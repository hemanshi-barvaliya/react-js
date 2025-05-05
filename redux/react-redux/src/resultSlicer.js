import { createSlice } from '@reduxjs/toolkit'

export const resultSlicer = createSlice({
  name: 'counter',
  
  initialState: {
    value: 0
    
  },
  
  reducers: {

    increment: (state, action)=>{
      if(state.value!=10)
        state.value +=1
        
    },

    decrement: (state, action)=>{
      if(state.value!=0)
      state.value -=1
      
  }
    
  }
})
export const { increment , decrement } = resultSlicer.actions

export default resultSlicer.reducer