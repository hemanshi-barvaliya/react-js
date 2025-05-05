import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { shop } from '../counterSlice';
import { useDispatch, useSelector } from 'react-redux';

function Addtocart() {

    const cartdata = useSelector((state) => state.counter.count);
    const [data,setdata] = useState(cartdata);

    const dispatch = useDispatch()

  return (
    <Container>
        <h2>Cart Data</h2>
        {
            data && data.map((v,i)=>{
                return(
                    <div key={i}>
                        <h3><img src={v.thumbnail} /></h3>
                        <h3>{v.title}</h3>
                        <h3>Price: ${v.price}</h3>
                        <button className='btn1' onClick={()=>{dispatch(shop(v))}}>shop now</button>
                    </div>
                )
            })
        }
    </Container>
  )
}

export default Addtocart