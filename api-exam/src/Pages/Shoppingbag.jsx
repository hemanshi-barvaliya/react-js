import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';


function Shoppingbag() 
{
    const cartdata = useSelector((state) => state.counter.shop);
    
    const [item,setitem] = useState(cartdata);

    const totalprice = item.reduce((total,item)=> total+item.price,0);
   

  return (
    <Container>
        <h2>Shop items</h2>
        {
            item && item.map((v,i)=>{
                return(
                    <div key={i}>
                        <h3><img src={v.thumbnail} /></h3>
                        <h3>{v.title}</h3>
                        <h3 >Price: ${v.price}</h3>
                       
                    </div>
                )
            })
        }
        <div>
            <h3 className="price ">Total :${totalprice.toFixed(2)}</h3>
        </div>
    </Container>
  )
}
export default Shoppingbag