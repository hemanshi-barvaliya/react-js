import React, { useContext } from 'react'
import { namecontext } from '../App'

const Context = () => {

    const prt = useContext(namecontext)
  return (
    <>
    <h2>Context</h2>

    <h1>Name: {prt} </h1>
    </>

  )
}

export default Context