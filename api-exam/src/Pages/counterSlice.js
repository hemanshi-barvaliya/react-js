import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count:[],
    shop:[],
  },
  reducers: {
    
    btn:(state,action)=>{
        state.count.push(action.payload);
    },
    shop:(state,action)=>{
        state.shop.push(action.payload);
    }
  }
})

export const { btn, shop } = counterSlice.actions

export default counterSlice.reducer