import { configureStore } from '@reduxjs/toolkit'
import  resultSlicer from './resultSlicer'

export default configureStore({
  reducer: {


    student : resultSlicer,

  }
})

