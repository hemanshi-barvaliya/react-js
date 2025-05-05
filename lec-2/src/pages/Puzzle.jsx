import React, { useState } from 'react'

const Puzzle = () => {
  const [list, setlist] = useState([5, '', 6, 8, 1, 3, 2, 4, 7])

  const btn = (i, n) => {
    
    var d = [...list];

    if (i == 0) {
      if (d[1] == '') 
      {
        d[1] = n
        d[i] = ''
      }
      if (d[3] == '') {
        d[3] = n
        d[i] = ''
      }
    }

    if (i == 1) {
      if (d[0] == '') {
        d[0] = n
        d[i] = ''
      }
      if (d[2] == '') {
        d[2] = n
        d[i] = ''
      }
      if (d[4] == '') {
        d[4] = n
        d[i] = ''
      }
    }
    setlist(n)
  }

  return (
    <>
      <h1> Number Puzzle </h1>
      <div>

        <input type='button' value={list[0]} onClick={(e) => {btn(0, e.target.value)}} />
        <input type='button' value={list[1]} onClick={(e) => {btn(1, e.target.value)}} />
        <input type='button' value={list[2]} onClick={(e) => {btn(2, e.target.value)}} />
        <input type='button' value={list[3]} onClick={(e) => {btn(3, e.target.value)}} />
        <input type='button' value={list[4]} onClick={(e) => {btn(4, e.target.value)}} />
        <input type='button' value={list[5]} onClick={(e) => {btn(5, e.target.value)}} />
        <input type='button' value={list[6]} onClick={(e) => {btn(6, e.target.value)}} />
        <input type='button' value={list[7]} onClick={(e) => {btn(7, e.target.value)}} />
        <input type='button' value={list[8]} onClick={(e) => {btn(8, e.target.value)}} />

      </div>
    </>
  )

}

export default Puzzle




