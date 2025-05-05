import React from 'react'
import logo from './images/logo1.png'
import './Style.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';



function Header() {
  return (
    <>

    <div className="logo1">
     
        <Row>
            <div className=" logo d-flex">
              <Col sm={10}><Link to={'/'}><img src={logo} height={50} width={50}/></Link></Col>
              <Col sm={1}><Link to={'/Addtocart'}><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>Cart</Link></Col>
              <Col sm={1}><Link to={'/Shoppingbag'}><FontAwesomeIcon icon={faBagShopping} ></FontAwesomeIcon>shop</Link></Col>
            </div>
        </Row>
    </div>
    <br/>
</>
)
}

export default Header