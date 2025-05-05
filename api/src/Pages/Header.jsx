import React from "react";
import './Input.css';
import logo from './Images/asset 1.png'
import cart from './Images/asset 10.png'
import shop from './Images/bag.png'
import { Col, Container, Row } from "react-bootstrap";
import Cart from "./Cart";
import { Link } from "react-router-dom";
function Header()
{
    return(
        <>

<div>

    <Row>
        <div className="item_price">
        <Col sm={10}><Link to={'/'}><img src={logo} alt="imgs" /></Link></Col>
        <Col sm={1}><Link to={'/Addtocart'}><img className="text-end" src={cart} alt="imgs" />Cart</Link></Col>
        <Col sm={1}><Link to={'/Shoppingbag'}><img className="text-end" src={shop} alt="imgs" height={30} width={30} /></Link></Col>
        </div>
    </Row>

</div>
<br/>
        </>
    );
}


export default Header;