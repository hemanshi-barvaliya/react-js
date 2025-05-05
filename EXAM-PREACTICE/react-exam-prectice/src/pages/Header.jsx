import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <Row>
    
    <Col sm={4}><Link to={'/'}>logo</Link></Col>
    <Col sm={4}><Link to={'/Blog'}>Home</Link></Col>
    <Col sm={1}><Link to={'/Addtobag'}>Cart</Link></Col>
    <Col sm={1}><Link to={'/Shopitem'}>shop</Link></Col>
    
</Row>
  )
}

export default Header