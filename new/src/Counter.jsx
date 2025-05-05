import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { btn, decrement, increment, shop } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button onClick={() => dispatch(btn())}> Cart</button>
        <span>{count}</span>
        <button onClick={() => dispatch(shop())}>Shop</button>
      </div>
    </div>
  )
}