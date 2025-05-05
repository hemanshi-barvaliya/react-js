import React, { useRef } from 'react'

const Ref = () => {

    const uref = useRef('test');

    const btn = () =>{

        uref.current.type="password";

    }

  
  return (

    <>
    
            <div>

                <input type="text" ref={uref}/>

                <button onClick={btn}>Click here</button>
            </div>
    
    </>

    
  )
}

export default Ref