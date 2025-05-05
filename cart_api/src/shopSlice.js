import { createSlice } from '@reduxjs/toolkit'

export const shopSlice = createSlice({
  name: 'counter',
  initialState: {
   count : [],
    shop : [],
  },

  reducers: {
   
    btn:(state,action)=>{
        var data = [...state.count,action.payload];
        state.count=data;
    },
    shop:(state,action)=>{
      var shopdata = [...state.shop,action.payload];
      state.shop=shopdata;
  },
  
 

  },
})


export const {btn,shop} = shopSlice.actions

export default shopSlice.reducer


// btn: (state, action) => {
//   state.count.push(action.payload);
// },