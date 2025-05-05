import { configureStore } from '@reduxjs/toolkit'
import shop from './shopSlice'

export default configureStore({
  reducer: {

    counter : shop,

  },
})