import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { shop } from './shopSlice';
import { Container } from 'react-bootstrap';

function Addtocart() {
    const cartdata = useSelector((state) => state.counter.count);
    
    const [data, setdata] = useState(cartdata);


    const dispatch  = useDispatch();


    return (
    <Container>
        <div>
            <h2>Cart Data</h2>
            {data && data.map((v, i) => {
                return (
                    <div key={i}>
                        <h3><img src={v.thumbnail} alt={v.title} /></h3>
                        <h3>{v.title}</h3>
                        <h3>Price: ${v.price}</h3>
                        <button className="btn" onClick={()=>{dispatch(shop(v))}}>Shop Now</button>
                    </div>
                );
            })}
            
        </div>
    </Container>
    );
}

export default Addtocart;
