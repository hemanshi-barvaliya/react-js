import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { btn, shop } from "../counterSlice";
import { Col, Container, Row } from "react-bootstrap";

const Cart_item = () => {
    let { id } = useParams();
    const [list, setlist] = useState(''); 

    useEffect(() => {
        fetch('https://dummyjson.com/products/' + id)
            .then(res => res.json())
            .then(json => setlist(json))
        
    },)

    const dispatch  = useDispatch();

    return (
       
       <Row>
           <Col sm={3}>
            <div className="cart-item">
                <div className="padding">
                    <h4> Item id: {id}</h4>
                    <p>Category: {list.category}</p>
                    <p>Discount Percentage: {list.discountPercentage}%</p>
                    <p>rating: {list.rating}</p>
                    <p>SKU: {list.sku}</p>
                    <p>stock: {list.stock}</p>
                    <p>warranty: {list.warrantyInformation}</p>
                    <p>Ship: {list.shippingInformation}</p>
                

                </div>
            </div>
            </Col>
            <Col sm={9}>
                <div className="cart_data ">
                    <h2 className=""><img className="cart_data" src={list.thumbnail}/></h2>
                    <div className="main">
                        <h2>{list.title}</h2>
                        <h4>Description:</h4>
                        <p>{list.description}</p>
                        <h3 className="price"> Price: ${list.price}</h3>
                        <button className='btn1' onClick={()=>{dispatch(btn(list))}}>Add to Cart</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className='btn1' onClick={()=>{dispatch(shop(list))}}>Shop Now</button>
                    </div>
                </div>
            </Col>
            </Row>
 
    );
};

export default Cart_item;