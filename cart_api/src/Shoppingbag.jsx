import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Shoppingbag() {
    const cartdata = useSelector((state) => state.counter.shop);
    
    const [data, setdata] = useState(cartdata);

    const totalPrice = data.reduce((total, item) => total + item.price, 0);

    return (
    <Container>
        <div>
            <h2>Shopping Bag</h2>
            {data && data.map((v, i) => {
                return (
                    <div key={i} >
                        <h3><img src={v.thumbnail} alt={v.title} /></h3>
                        <h3>{v.title}</h3>
                        <h3>Price: ${v.price}</h3>
                    </div>
                );
            })}
            
            <div>
                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            </div>
            <div>
               
              
                    <Link to={'/ProceedToShopping'}> <button className="btn">Proceed To Shopping</button></Link>
               
            </div>
        </div>
    </Container>
    );
}

export default Shoppingbag