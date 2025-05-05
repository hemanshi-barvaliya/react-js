import { configureStore } from '@reduxjs/toolkit'
import shopping from './Pages/counterSlice'

export default configureStore({
  reducer: {

    counter : shopping,
    
  },
})