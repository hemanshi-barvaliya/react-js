import React, { useEffect, useState } from 'react'

function Header() {

  const[list,setlist]=useState([]);

  useEffect(()=>{
    fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
     .then(json => setlist(json.recipes));
 
    // .then(console.log);


    
  },[])

  return (
    <>
    {
      list && list.map((v,i)=>(
          <div key={i} className='d-flex p-5 '>
            <div><img src={v.image} height={100} width={100}/></div>
            <div>{v.name}</div>
            <div>{v.ingredients}</div>
            <div>{v.instructions}</div>
       
          </div>
      ))
    }
    </>
  )
}

export default Header