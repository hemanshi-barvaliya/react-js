import { configureStore } from '@reduxjs/toolkit'
import counterSlicer from './counterSlicer'


export const store = configureStore({
  reducer: {
     
        student: counterSlicer,
  }
});

export default store;
